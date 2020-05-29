import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
public subject:Subject<String>;
  constructor() {

    this.subject= new Subject();
  }
}
