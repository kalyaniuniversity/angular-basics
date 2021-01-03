import {Component, OnInit} from '@angular/core';
import {EventManagerService} from '../event-manager.service';

@Component({
  selector: 'app-deep',
  templateUrl: './deep.component.html',
  styleUrls: ['./deep.component.css']
})
export class DeepComponent implements OnInit {

  public outputFromSreshtha: string = '';

  constructor(private eventManager: EventManagerService) { }

  ngOnInit(): void {
    this.eventManager.shout.subscribe(
      (value: string) => {
        this.outputFromSreshtha = value;
      }
    );
  }

  public shoutOut(): void {
    this.eventManager.shout.next('I don\'t know Angular');
  }
}
