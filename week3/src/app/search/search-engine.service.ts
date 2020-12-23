import {Injectable} from '@angular/core';
import {Dictionary} from './model/dictionary';
import {Student} from './interface/student';

@Injectable({
	providedIn: 'root'
})
export class SearchEngineService {

	private readonly _dictionary: Dictionary = new Dictionary();

	constructor() {
	}

	private isValid(term: string): boolean {
		return (term !== undefined) && (term !== null) && (term !== '');
	}

	public result(searchTerm: string): Student[] {

		let result: Student[] = [];

		if (!this.isValid(searchTerm)) {
			return result;
		}

		this._dictionary.datastore.forEach((student: Student, index: number) => {
			if (student.name.includes(searchTerm)) result.push(student);
		});

		return result;
	}
}
