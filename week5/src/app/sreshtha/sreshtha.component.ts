import {Component, OnInit} from '@angular/core';
import {EventManagerService} from '../event-manager.service';

@Component({
  selector: 'app-sreshtha',
  templateUrl: './sreshtha.component.html',
  styleUrls: ['./sreshtha.component.css']
})
export class SreshthaComponent implements OnInit {

  constructor(private eventManager: EventManagerService) { }

  ngOnInit(): void {
  }

  public shoutOut(): void {
    this.eventManager.shout.next('I am learning AWS');
  }
}
