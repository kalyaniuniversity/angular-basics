import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-child-component',
	templateUrl: './child-component.component.html',
	styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

	@Input()
	public childName: string;

	@Input()
	public childCount: number;

	@Output()
	public countEvent: EventEmitter<number> = new EventEmitter<number>();

	public price: number = 2000;

	private count: number = 0;

	constructor() {
	}

	ngOnInit(): void {
	}

	public incrementCount(): void {
		this.count += 1;
		this.countEvent.emit(this.count);
	}

	public decrementCount(): void {
		this.count -= 1;
		this.countEvent.emit(this.count);
	}
}
