import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { SightingBoxComponent } from './sighting-box.component';
import { SightingService } from '../services/sighting.service';
import { SpeciesService } from '../services/species.service';
import { EmitterService } from '../../emitter.service';
import { Sighting } from '../model/sighting';

@Component({
  selector: 'sighting-form',
  templateUrl: './sighting-form.component.html'
})

export class SightingFormComponent implements OnInit {

  species: string[];

  constructor(
    private sightingService: SightingService,
    private speciesService: SpeciesService
  ){}

  @Input() listId: string;

  ngOnInit(){
    this.loadSpecies()
  }

  loadSpecies() {
      this.speciesService.getSpecies()
        .subscribe(
          species => this.species = species,
          err => {
            console.log(err);
          });
  }

  submitSighting(form: NgForm) {

    const sighting = new Sighting(
      form.value.species,
      form.value.description,
      new Date(form.value.dateTime),
      form.value.count);
      
    let sightingOperation:Observable<Sighting[]>;
    sightingOperation = this.sightingService.addSighting(sighting);
    sightingOperation.subscribe(
      sightings => {
        EmitterService.get(this.listId).emit(sightings);
      },
      err => {
        console.log(err);
      });
      form.resetForm();
  }

  clear(form: NgForm) {
    form.resetForm();
  }

  validate(value) {
//    value < 0 ? this.sighting.count = 0 : this.sighting.count = value;
  }
}
