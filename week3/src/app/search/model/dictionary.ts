import {Student} from '../interface/student';

export class Dictionary {

	private static readonly _bishnu: Student = {
		name: 'Bishnupada Das',
		dept: 'MCA',
		roll: 1
	};

	private static readonly _ramij: Student = {
		name: 'Ramij Raja',
		dept: 'MCA',
		roll: 2
	};

	private static readonly _ayan: Student = {
		name: 'Ayan Kumar Saha',
		dept: 'MCA',
		roll: 3
	};

	private static readonly _abhijit: Student = {
		name: 'Abhijit Prasad',
		dept: 'MCA',
		roll: 4
	};

	private static readonly _datastore: Student[] = [
		Dictionary._bishnu,
		Dictionary._abhijit,
		Dictionary._ayan,
		Dictionary._ramij
	];

	get datastore(): Student[] {
		return Dictionary._datastore;
	}
}
