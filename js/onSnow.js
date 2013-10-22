var form = [



	{
		name: 'Ski/Ride',
		fields: [
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
		]
	},



	{
		name: 'Toboggan Loaded',
		fields: [
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123', twoPerson: true },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
		]
	},



	{
		name: 'Some random form with example of a dropdown',
		fields: [
			{ name: 'Weather', type: 'checkbox', sqlName: '123123', options: ['rain', 'snow', 'volcano'] },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: '123123' },
		]
	}



];

/* DIFFERENT VALUES THAT 'type' CAN BE
 * checkbox
 * input
 * textarea
 * dropdown

 */