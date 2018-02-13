import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SightingBoxComponent } from './components/sighting-box.component';
import { SightingListComponent } from './components/sighting-list.component';
import { SightingFormComponent } from './components/sighting-form.component';
import { SightingComponent } from './components/index';

import { SightingService } from './services/sighting.service';
import { SpeciesService } from './services/species.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,

  ],
  declarations: [
    SightingBoxComponent,
    SightingFormComponent,
    SightingListComponent,
    SightingComponent
  ],

  providers: [
      SightingService,
      SpeciesService
  ],

  exports:[
    SightingBoxComponent,
    SightingFormComponent,
    SightingListComponent,
    SightingComponent
  ]

})
export class SightingModule {
}
