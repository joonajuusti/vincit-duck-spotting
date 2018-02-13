import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Sighting } from '../model/sighting';
import { SightingService } from '../services/sighting.service';
import { EmitterService } from '../../emitter.service';

@Component({
  selector: 'sighting-list',
  template: `
  <label for="sort">Sort the sightings</label>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary" (click)="sortAscending()">Ascending</button>
    <button type="button" class="btn btn-secondary" (click)="sortDescending()">Descending</button>
  </div>
  <sighting-box
    [listId]="listId"
    *ngFor="let sighting of sightings"
    [sighting]="sighting">
  </sighting-box>
  `
})

export class SightingListComponent implements OnInit, OnChanges{
  sightings: Sighting[];

  @Input() listId: string;

  constructor(private sightingService: SightingService) {}

  ngOnInit() {
    this.loadSightings();
  }

  //method to load all of the sightings
  loadSightings() {
    this.sightingService.getSightings().subscribe(sightings =>
      this.sightings = sightings,
      err => {
        console.log(err);
      });
  }

  //methods to sort the sightings according to dateTime
  sortAscending() {
    this.sightings.sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
  }

  sortDescending() {
    this.sightings.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
  }

  ngOnChanges(changes:any) {
    EmitterService.get(this.listId).subscribe((sightings:Sighting[]) => { this.loadSightings() });
  }

}
