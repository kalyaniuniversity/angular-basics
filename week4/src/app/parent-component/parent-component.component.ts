import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-parent-component',
	templateUrl: './parent-component.component.html',
	styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

	public name: string = 'Deep';
	public count: number = 0;
	public parentCount: number = 0;

	constructor() {
	}

	ngOnInit(): void {
	}

	public incrementCount(): void {
		this.count += 1;
	}

	public decrementCount(): void {
		this.count -= 1;
	}

	public updateParentCount(newValue: number): void {
		this.parentCount = newValue;
	}
}
