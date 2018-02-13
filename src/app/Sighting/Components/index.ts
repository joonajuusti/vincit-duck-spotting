import { Component} from '@angular/core';
import { EmitterService } from '../../emitter.service';

@Component({
    selector: 'sighting-widget',
    template: `
        <div class="row">
          <div class="col-6 mx-auto">
            <sighting-form [listId]="listId"></sighting-form>
            <br>
            <sighting-list [listId]="listId"></sighting-list>
          </div>
        </div>
    `,
})
export class SightingComponent {
    // Event tracking properties
    private listId = 'COMMENT_COMPONENT_LIST';
 }
