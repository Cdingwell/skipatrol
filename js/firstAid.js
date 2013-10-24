var firstAidorm = [

	{
		name: 'ASSESSMENT',
		fields: [
			{ name: 'Priority Survey', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Secondary Survey', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Vital Signs Evaluation Registration', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			]
	}
	
	{
		name: 'SPINAL INJURIES',
		fields: [
			{ name: 'Cervical', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Spinal', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Pelvis', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Femur /Sager Splint', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
		]
	},

	{
		name: 'Fractures',
		fields: [
			{ name: 'Clavicle', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Scapula', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Lower Arm', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Humerus', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Bent Knee', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Lower Leg', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Shoulder Dislocation', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
		]
	}
	

	{
		name: 'Slings',
		fields: [
			{ name: 'Small Arm Sling', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Large Arm Sling', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Body Sling', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			]
	}

	{
		name: 'Bandgaes',
		fields: [
			{ name: 'Head', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Shoulder', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Chest/Back', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Elbow', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Open Hand / Foot', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Pressure Hand', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Eye / Check Ear', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Pressure', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Open Fracture', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Stirrup', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Modified Stirrup', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			{ name: 'Knee', type: 'dropdown', sqlName: 'cervicalsdfd', options: ['First Initial','First Initial','Third Initial'] }
			
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
