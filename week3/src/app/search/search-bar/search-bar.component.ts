import {Component, OnInit} from '@angular/core';
import {SearchEngineService} from '../search-engine.service';
import {Student} from '../interface/student';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

	public result: Student[] = [];
	public viewResult: boolean = false;

	constructor(
		private _search: SearchEngineService
	) {
	}

	ngOnInit(): void {
	}

	public showResult(): void {
		this.viewResult = true;
	}

	public hideResult(): void {
		this.viewResult = false;
	}

	public search(event: Event): void {
		const target: HTMLInputElement = event.target as HTMLInputElement;
		const searchTerm: string = target.value;
		this.result = this._search.result(searchTerm);
	}
}
