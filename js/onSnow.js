var form = [



	{
		name: 'Ski/Ride',
		fields: [
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' }
		]
	},



	{
		name: 'Toboggan Loaded',
		fields: [
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123', twoPerson: true },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' }
		]
	},



	{
		name: 'Toboggan Loaded',
		fields: [
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123', twoPerson: true },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' }
		]
	},



	{
		name: 'Choose left right or both',
		fields: [
			{ name: 'Foot', type: 'dropdown', sqlName: 'foot', options: ['left', 'right', 'both'] },
			{ name: 'Ankle', type: 'dropdown', sqlName: 'ankle', options: ['left', 'right', 'both'] },
			{ name: 'Hip', type: 'dropdown', sqlName: 'hip', options: ['left', 'right', 'both'] }
		]
	}



];

/* DIFFERENT VALUES THAT 'type' CAN BE
 *
 * checkbox
 * input		-	this is a one line input field
 * textarea		-	this is a multiline input field
 * dropdown		-	use this for either a dropdown OR a radio box
 *
 */