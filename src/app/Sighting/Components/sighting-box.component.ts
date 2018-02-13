import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Sighting } from '../model/sighting';
import { EmitterService } from '../../emitter.service';
import { SightingService } from '../services/sighting.service';

@Component({
  selector: 'sighting-box',
  templateUrl: 'sighting-box.component.html',
  styles:[`
    .author{
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
    }
    .config{
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
})

export class SightingBoxComponent implements OnInit {
  constructor(
    private sightingService: SightingService
  ){}

  @Input() sighting: Sighting;
  @Input() listId: string;

  ngOnInit(){
    this.sighting.dateTime = new Date(this.sighting.dateTime)
    this.sighting.dateString = this.sighting.dateTime.toLocaleString('en-GB',
     {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})
  }
}
