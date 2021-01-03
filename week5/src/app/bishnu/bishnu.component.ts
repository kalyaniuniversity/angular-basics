import {Component, OnInit} from '@angular/core';
import {EventManagerService} from '../event-manager.service';

@Component({
  selector: 'app-bishnu',
  templateUrl: './bishnu.component.html',
  styleUrls: ['./bishnu.component.css']
})
export class BishnuComponent implements OnInit {

  public outputFromSreshtha: string = '';

  constructor(private eventManager: EventManagerService) { }

  ngOnInit(): void {
    this.eventManager.shout.subscribe(
      (value: string) => {
        this.outputFromSreshtha = value;
      }
    );
  }

}
