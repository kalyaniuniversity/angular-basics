import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  public shout: Subject<string> = new Subject<string>();

  constructor() { }
}
