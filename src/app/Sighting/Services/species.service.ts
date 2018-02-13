import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpeciesService {
  constructor (private http: Http) {}

  private speciesUrl = 'http://localhost:8081/species';

  getSpecies(): Observable<string[]> {
    return this.http.get(this.speciesUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
