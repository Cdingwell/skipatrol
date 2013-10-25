var firstAidorm = [

	{
		name: 'ASSESSMENT',
		fields: [
			{ name: 'Priority Survey', type: 'dropdown', sqlName: 'prioritySurvey', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Secondary Survey', type: 'dropdown', sqlName: 'secondarySurvey', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Vital Signs Evaluation Registration', type: 'dropdown', sqlName: 'vitalSigns', options: ['First Initial','First Initial','Third Initial'] }
			]
	},
	
	{
		name: 'SPINAL INJURIES',
		fields: [
			{ name: 'Cervical', type: 'dropdown', sqlName: 'cervicalCollar', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Spinal', type: 'dropdown', sqlName: 'spinal', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Pelvis', type: 'dropdown', sqlName: 'pelvis', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Femur /Sager Splint', type: 'dropdown', sqlName: 'femur', options: ['First Initial','First Initial','Third Initial'] }
		]
	},

	{
		name: 'Fractures',
		fields: [
			{ name: 'Clavicle', type: 'dropdown', sqlName: 'clavicle', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Scapula', type: 'dropdown', sqlName: 'scapula', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Lower Arm', type: 'dropdown', sqlName: 'lowerArm', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Humerus', type: 'dropdown', sqlName: 'humerus', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Bent Knee', type: 'dropdown', sqlName: 'bentKnee', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Lower Leg', type: 'dropdown', sqlName: 'lowerLeg', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Shoulder Dislocation', type: 'dropdown', sqlName: 'shoulderDislocation', options: ['First Initial','First Initial','Third Initial'] }
		]
	},
	

	{
		name: 'Slings',
		fields: [
			{ name: 'Small Arm Sling', type: 'dropdown', sqlName: 'smallArmSling', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Large Arm Sling', type: 'dropdown', sqlName: 'largeArmSling', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Body Sling', type: 'dropdown', sqlName: 'bodySling', options: ['First Initial','First Initial','Third Initial'] }
			]
	},

	{
		name: 'Bandgaes',
		fields: [
			{ name: 'Head', type: 'dropdown', sqlName: 'head', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Shoulder', type: 'dropdown', sqlName: 'shoulder', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Chest/Back', type: 'dropdown', sqlName: 'chestBack', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Elbow', type: 'dropdown', sqlName: 'elbow', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Open Hand / Foot', type: 'dropdown', sqlName: 'openHandFoot', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Pressure Hand', type: 'dropdown', sqlName: 'pressureHand', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Eye / Check Ear', type: 'dropdown', sqlName: 'eyeCheekEar', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Pressure', type: 'dropdown', sqlName: 'pressure', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Open Fracture', type: 'dropdown', sqlName: 'openFracture', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Stirrup', type: 'dropdown', sqlName: 'stirrup', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Modified Stirrup', type: 'dropdown', sqlName: 'modifiedStirrup', options: ['First Initial','First Initial','Third Initial'] },
			{ name: 'Knee', type: 'dropdown', sqlName: 'knee', options: ['First Initial','First Initial','Third Initial'] }
			
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
