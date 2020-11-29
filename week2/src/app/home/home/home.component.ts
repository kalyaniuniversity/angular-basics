import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name: string = 'Lovely C.';

  constructor() { }

  ngOnInit(): void {
  }

  public changeName(): void {
    this.name = 'Ramij';
  }
}
