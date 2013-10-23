	{
		name: 'Basic Information',
		fields: [
			{ name: 'ID', type: 'input', sqlName: 'id'},
			{ name: 'Report Number', type: 'input', sqlName: 'reportNum' },
			{ name: 'CSPS Number', type: 'input', sqlName: 'CSPSNum1'},
			{ name: 'CSPS Number', type: 'input', sqlName: 'CSPSNum2'},
			{ name: 'CSPS Number', type: 'input', sqlName: 'CSPSNum3'},
			{ name: 'Date of Birth', type: 'input', sqlName: 'DOB' },
			{ name: 'Age', type: 'input', sqlName: 'age'},
			{ name: 'Gender', type: 'dropdown', sqlName: 'gender', options: ['Male', 'Female', 'Other'] }
			
			]
	}

			
	{
		name: 'Complaints - Choose left right or both',
		fields: [
			{ name: 'Foot', type: 'dropdown', sqlName: 'foot', options: ['left', 'right', 'both'] },
			{ name: 'Ankle', type: 'dropdown', sqlName: 'ankle', options: ['left', 'right', 'both'] },
			{ name: 'Lower Leg', type: 'dropdown', sqlName: 'lowerLeg', options: ['left', 'right', 'both'] },
			{ name: 'Knee', type: 'dropdown', sqlName: 'knee', options: ['left', 'right', 'both'] },
			{ name: 'Thigh', type: 'dropdown', sqlName: 'thigh', options: ['left', 'right', 'both'] },
			{ name: 'Hip', type: 'dropdown', sqlName: 'hip', options: ['left', 'right', 'both'] },
			{ name: 'Lower Ab', type: 'dropdown', sqlName: 'lowerAb', options: ['left', 'right', 'both'] },
			{ name: 'Upper Ab', type: 'dropdown', sqlName: 'upperAb', options: ['left', 'right', 'both'] },
			{ name: 'Chest', type: 'dropdown', sqlName: 'chest', options: ['left', 'right', 'both'] },
			{ name: 'Clavicle', type: 'dropdown', sqlName: 'clavicle', options: ['left', 'right', 'both'] },
			{ name: 'Shoulder', type: 'dropdown', sqlName: 'shoulder', options: ['left', 'right', 'both'] },
			{ name: 'Upper Arm', type: 'dropdown', sqlName: 'upperArm', options: ['left', 'right', 'both'] },
			{ name: 'Elbow', type: 'dropdown', sqlName: 'elbow', options: ['left', 'right', 'both'] },
			{ name: 'Lower Arm', type: 'dropdown', sqlName: 'lowerArm', options: ['left', 'right', 'both'] },
			{ name: 'Wrist', type: 'dropdown', sqlName: 'wrist', options: ['left', 'right', 'both'] },
			{ name: 'Hand', type: 'dropdown', sqlName: 'hand', options: ['left', 'right', 'both'] },
			{ name: 'Thumb', type: 'dropdown', sqlName: 'thumb', options: ['left', 'right', 'both'] },
			{ name: 'Finger', type: 'dropdown', sqlName: 'finger', options: ['left', 'right', 'both'] }
			]
	}
	
	{
		name: 'Complaints - Mark all that apply',
		fields: [
			{ name: 'Upper Back', type: 'checkbox', sqlName: 'upperBack' },
			{ name: 'Lower Back', type: 'checkbox', sqlName: 'lowerBack' },
			{ name: 'Tailbone', type: 'checkbox', sqlName: 'tailbone' },
			{ name: 'Head', type: 'checkbox', sqlName: 'head' },
			{ name: 'Face', type: 'checkbox', sqlName: 'face'},
			{ name: 'Medical', type: 'checkbox', sqlName: 'medical' },
			{ name: 'No Injury', type: 'checkbox', sqlName: 'noInjury' }
			
	{
		name: 'Complaints - Treatment Protocol',
		fields: [
			{ name: 'Fracture', type: 'checkbox', sqlName: 'fracture' },
			{ name: 'Sprain', type: 'checkbox', sqlName: 'sprain' },
			{ name: 'Strain', type: 'checkbox', sqlName: 'strain' },
			{ name: 'Bruise', type: 'checkbox', sqlName: 'bruise' },
			{ name: 'Laceration', type: 'checkbox', sqlName: 'laceration' },
			{ name: 'Dislocation', type: 'checkbox', sqlName: 'dislocation' },
			{ name: 'Cardiac', type: 'checkbox', sqlName: 'cardiac' },
			{ name: 'Stroke', type: 'checkbox', sqlName: 'stroke' },
			{ name: 'Concussion', type: 'checkbox', sqlName: 'concussion' },
			{ name: 'Hypothermia', type: 'checkbox', sqlName: 'hypothermia' },
			{ name: 'Frostbite', type: 'checkbox', sqlName: 'frostbite' },
			{ name: 'Internal', type: 'checkbox', sqlName: 'internal' },
			{ name: 'Illness', type: 'checkbox', sqlName: 'illness' },
			{ name: 'Deceased', type: 'checkbox', sqlName: 'deceased' },
			{ name: 'Unknown', type: 'checkbox', sqlName: 'unknown' }
		]
	}
		
		
	{
		name: 'Location',
		fields: [
			{ name: 'Incident Location', type: 'dropdown', sqlName: 'incidentLocation', options: ['markedRun', 'Freestyle Terrain', 'Terrain/Rail Park', 'Competition Terrain','Half Pipe', 'Out Of Bounds', 'Closed inbounds', 'Off Trail', 'Lift Accident', 'Premises', 'Unknown', 'N/A'] },
			{ name: 'Run Classification', type: 'dropdown', sqlName: 'runClassification', options: ['Easiest', 'More Difficult', 'Most Difficult', 'Extreme', 'N/A'] },
			{ name: 'Activity', type: 'dropdown', sqlName: 'activity', options: ['Alpine', 'Snowboard', 'Telemark', 'Nordic', 'Touring', 'Tubing', 'Non-skiing', 'Other'] },
			{ name: 'Involvement', type: 'dropdown', sqlName: 'involvement', options: ['Recreation skiing/riding', 'Recreation jumping', 'Competition', 'Training', 'In Lesson', 'Tube Slide', 'Unknown'] }
		]
	}
	
	{
		name: 'Conditions',
		fields: [			
			{ name: 'Weather', type: 'dropdown', sqlName: 'weather', options: ['Clear', 'Overcast', 'Snowing', 'Raining', 'Fog', 'Unknown', 'N/A'] },
			{ name: 'Light', type: 'dropdown', sqlName: 'light', options: ['Sharp', 'Flat', 'Whiteout', 'Lights', 'Dark', 'Unknown', 'N/A'] },
			{ name: 'Temperature', type: 'dropdown', sqlName: 'temp', options: ['Above 10', '0 to 10', '-10 to 0', '-20 to -11', 'Below -20', 'Unknown', 'N/A'] },
			{ name: 'Snow', type: 'dropdown', sqlName: 'snow', options: ['No New', '0 to 5', '5 to 10', '10 to 15', 'Over 15', 'Unknown', 'N/A'] },
			{ name: 'Surface', type: 'dropdown', sqlName: 'surface', options: ['Groomed', 'Moguls', 'Powder',  'Variable', 'Granular', 'Hard', 'Unknown'] },
			{ name: 'Equipment', type: 'dropdown', sqlName: 'equipment', options: ['Owned', 'Area Rental', 'Other Rental', 'Area demos', 'Other demos', 'Unknown', 'N/A'] },
			{ name: 'Helmet', type: 'dropdown', sqlName: 'helmet', options: ['Owned', 'Rental', 'None'] },
			{ name: 'Ability', type: 'dropdown', sqlName: 'ability', options: ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert', 'Unknown', 'N/A'] },
			{ name: 'Collision', type: 'checkbox', sqlName: 'collision'}
			
	{
		name: 'Transport',
		fields: [
			{ name: 'To First Aid', type: 'dropdown', sqlName: 'firstAid', options: ['Walk/Ski', 'Toboggan', 'Snowmobile', 'Helicopter', 'Download', 'On-hill', 'Other', 'Unknown', 'N/A'] },
			{ name: 'From Base', type: 'dropdown', sqlName: 'fromBase', options: ['Private Car', 'Taxi', 'Company', 'Ambulance', 'Bus', 'Helicopter', 'Walk/Ski', 'Other', 'Unknown', 'N/A'] },
			
		]
	}
	
	{
		name: 'If not a collision, what was the primary cause of accident?',
		fields: [
			{ name: 'Non Collision', type: 'dropdown', sqlName: 'nonCollision', options: ['Fall - Skier lost control', 'Fall - Caught an edge', 'Fall & struck by own equipment', 'Fall - Jumping', 'Fall - change of conditions', 'Fall - change of terrain', 'Near collision', 'Prior medical condition', 'Skied off trail', 'Equipment failure(Not binding)', 'Binding pre-released', 'Hit by others equipment', 'N/A'] },
			{ name: 'Lift Related', type: 'dropdown', sqlName: 'liftRelated', options: ['Clothing caught on lift', 'Fall while loading', 'Fall after unload', 'Fall from lift', 'Jump chair lift', 'Injured by restraining bar', 'Struck by chair', 'N/A']},
			{ name: 'Non-Skiing Related', type: 'checkbox', sqlName: 'nonSkiingRelated', options: ['Slip & fall (Non skiing)', 'Cold/weather related', 'Not otherwise classified', 'Other', 'N/A']},
		]
	}

	


];