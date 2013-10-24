var form = [

	{
		name: 'Ski/Ride',
		fields: [
			{ name: 'Travel, turn, climb, stop', type: 'checkbox', sqlName: 'travelTurnClimbStop' },
			{ name: 'Stable and balanced position', type: 'checkbox', sqlName: 'stableBalancedPosition' },
			{ name: 'Control of speed and direction', type: 'checkbox', sqlName: 'controlSpeedDirection' },
			{ name: 'Sideslip/Falling Leaf', type: 'checkbox', sqlName: 'sideslipFallingLeaf' },
			{ name: 'Traversing', type: 'checkbox', sqlName: 'traversing' },
			{ name: 'Edging, Pivot and Pressure', type: 'checkbox', sqlName: 'edgingPivotPressure' },
			{ name: 'Rhythm and Coordination', type: 'checkbox', sqlName: 'rhythmCoordination' },
			{ name: '4-6 turns on moderation terrain', type: 'checkbox', sqlName: '46TurnsModerateTerrain' },
			{ name: '4-6 turns on difficult terrain', type: 'checkbox', sqlName: '46TurnsDifficultTerrain' },
			{ name: 'Carrying equipment', type: 'checkbox', sqlName: 'carryingEquipment' },
			{ name: 'Fitness/flexibility/strength', type: 'checkbox', sqlName: 'fitnessFlexibilityStrength' },
			{ name: 'Applies responsibility code', type: 'checkbox', sqlName: 'appliesResponsibilityCode' },
			{ name: 'Safe and in-control', type: 'checkbox', sqlName: 'safeInControl' },
			{ name: 'Full run', type: 'checkbox', sqlName: 'fullRun' }
		]
	},



	{
		name: 'Incident Site',
		fields: [
			{ name: '10 considerations on approach', type: 'checkbox', sqlName: 'considerApproach' },
			{ name: 'Communication (whistle, hand, radio)', type: 'checkbox', sqlName: 'Communication_Incid' },
			{ name: 'Teamwork, roles, competency, safety', type: 'checkbox', sqlName: 'TeamRoleCompSafety' },
			{ name: 'Marks incident site', type: 'checkbox', sqlName: 'MarkIncident' },
			{ name: 'Location of key equipment', type: 'checkbox', sqlName: 'locationkeyEquip' },
			{ name: 'Secures toboggan and equipment', type: 'checkbox', sqlName: 'secureTobbgEquip' },
			{ name: 'Location, directions, and medical facility', type: 'checkbox', sqlName: 'LocatDirMed' },
			{ name: 'Follow-up and site clean-up', type: 'checkbox', sqlName: 'followupSiteClean' },
			{ name: 'Transport of backboards/equipment', type: 'checkbox', sqlName: 'TansportBackEquip' },
			{ name: 'Loading patient', type: 'checkbox', sqlName: 'LoadPatient' },
			{ name: 'Patient follow-up at base', type: 'checkbox', sqlName: 'patientUpbase' }
		]
	},
	
	
	{
		name: 'Equipment',
		fields: [
			{ name: 'Toboggan check', type: 'checkbox', sqlName: 'tobogganCheck' },
			{ name: 'Pack check/Uniform check', type: 'checkbox', sqlName: 'packCheckUniformCheck' },
			{ name: 'Toboggan set up/operation', type: 'checkbox', sqlName: 'tobogganSetUpOp' },
			{ name: 'Toboggan transport on lifts', type: 'checkbox', sqlName: 'tombogganTransportLifts' },
		]
	},


	{
		name: 'Toboggan Empty',
		fields: [
			{ name: 'Communication (whistle, hand, radio)', type: 'checkbox', sqlName: 'communicationWhistle_Empty' },
			{ name: 'Check traffic', type: 'checkbox', sqlName: 'checkTraffic_Empty' },
			{ name: 'Route finding', type: 'checkbox', sqlName: 'routeFinding_Empty' },
			{ name: 'Position in handles', type: 'checkbox', sqlName: 'positionHandles_Empty' },
			{ name: 'Stable and balanced', type: 'checkbox', sqlName: 'stableBalanced_Empty' },
			{ name: 'Use of brake/runners', type: 'checkbox', sqlName: 'useBrakeRunners_Empty' },
			{ name: 'Sideslip/Falling leaf', type: 'checkbox', sqlName: 'sideslipFalllingLeaf_Empty' },
			{ name: 'Snowplow', type: 'checkbox', sqlName: 'snowplow_Empty' },
			{ name: 'Traversing', type: 'checkbox', sqlName: 'traversing_Empty' },
			{ name: 'Direction change', type: 'checkbox', sqlName: 'directionChange_Empty' },
			{ name: 'Controlled, smooth, safe descent', type: 'checkbox', sqlName: 'controlledSmoothSafeDecent_Empty' },
			{ name: 'Short radius turns', type: 'checkbox', sqlName: 'shortRadiusTurn_Empty' },
			{ name: 'Use of fall line', type: 'checkbox', sqlName: 'useFallLine_Empty' },
			{ name: 'Compensating (for varying conditions)', type: 'checkbox', sqlName: 'compensating_Empty' },
			{ name: 'Stopping up and out from accident', type: 'checkbox', sqlName: 'stoppingUpOutAccident_Empty' }
		]
	},	
	
	

	{
		name: 'Toboggan Loaded',
		fields: [
			{ name: 'Communication to patient', type: 'checkbox', sqlName: 'comm2patien1_Loaded', twoPerson: true },
			{ name: 'Check traffic on start stop', type: 'checkbox', sqlName: 'traffic1_Loaded', twoPerson: true },
			{ name: 'Position in handles', type: 'checkbox', sqlName: 'position1_Loaded', twoPerson: true },
			{ name: 'Route finding', type: 'checkbox', sqlName: 'routefind1_Loaded', twoPerson: true },
			{ name: 'Stable and balanced', type: 'checkbox', sqlName: 'stableBalance1_Loaded', twoPerson: true },
			{ name: 'Sideslip/Falling leaf', type: 'checkbox', sqlName: 'sideSlip_fallLeaf1_Loaded', twoPerson: true },
			{ name: 'Snowplow', type: 'checkbox', sqlName: 'snowplow1_Loaded', twoPerson: true },
			{ name: 'Use of brake/runners', type: 'checkbox', sqlName: 'brakeRunners1_Loaded', twoPerson: true },
			{ name: 'Use of fall line', type: 'checkbox', sqlName: 'fallLine1_Loaded', twoPerson: true },
			{ name: 'Transitions (safe, smooth, controlled)', type: 'checkbox', sqlName: 'Transitions1_Loaded', twoPerson: true },
			{ name: 'Controlled, smooth, safe descent', type: 'checkbox', sqlName: 'controlSmoothDecent1_Loaded', twoPerson: true },
			{ name: 'Direction change (static and moving)', type: 'checkbox', sqlName: 'Direction1_Loaded', twoPerson: true },
			{ name: 'Compensating (for varying conditions)', type: 'checkbox', sqlName: 'compensating1_Loaded', twoPerson: true }
		]
	},
	
	
	{
		name: 'Toboggan Two Person (see above, plus...)',
		fields: [
			{ name: 'Rope is secured properly', type: 'checkbox', sqlName: 'ropeSecured2_Loaded' },
			{ name: 'Change over efficient and safe', type: 'checkbox', sqlName: 'changeEfficientSafe2_Loaded' },
			{ name: 'Communication with other patroller', type: 'checkbox', sqlName: 'commWithPatroller2_Loaded' },
			{ name: 'Drag is in dominant braking position', type: 'checkbox', sqlName: 'dragBrakePosition2_Loaded' },
			{ name: 'Front in charge (route, ride, communication)', type: 'checkbox', sqlName: 'FrontCharge2_Loaded' }
		]
	}
	
	
	{
		name: 'Critical Outcome',
		fields: [
			{ name: 'Demonstrates safety, control and competency while performing a simulation that includes: Being called to an accident, getting and inspecting a toboggan, bringin an unloaded toboggan to an incident site, securing a toboggan, basic incident site management, loading a patient, and operating a loaded toboggan.', type: 'checkbox', sqlName: 'crticalSection' },
			{ name: 'Instructor/Patroller', type: 'input', sqlName: 'instID' },
			{ name: 'Date', type: 'input', sqlName: 'Timestamp' },
			{ name: 'Notes', type: 'textarea', sqlName: 'notes' }
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