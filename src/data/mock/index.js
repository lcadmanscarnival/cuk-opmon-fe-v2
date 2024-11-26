const data = {
	'/api/fleet': [
		{
			ship: {
				id: 1,
				name: 'Queen Anne',
				brand: 'Cunard',
				imo: '9839399',
				mmsi: '310835000',
				call_sign: 'ZCHE5',
				flag: 'UK',
				length: 322.5,
				width: 35.6,
				status: 'Operational',
				current_load: '80%',
				image: 'qa.png'
			},
			position: {
				latitude: 61.60752177729324,
				longitude: 4.334874022970862,
				course: 90,
				speed: 15,
				heading: 95,
				accuracy: 10,
				timestamp: '2024-10-01 at 10:30:00 (UTC)'
			},
			system: {
				vm_hosts: 80,
				network_bandwidth: '100MBps',
				ci_alerts: 10
			}
		},
		{
			ship: {
				id: 2,
				name: 'Queen Victoria',
				brand: 'Cunard',
				imo: '9320556',
				mmsi: '310624000',
				call_sign: 'ZCEF3',
				flag: 'UK',
				length: 294.0,
				width: 32.3,
				status: 'Maintenance',
				current_load: 'None',
				image: 'qv.png'
			},
			position: {
				latitude: 38.882860771479145,
				longitude: 19.35395244991261,
				course: 90,
				speed: 15,
				heading: 95,
				accuracy: 10,
				timestamp: '2024-10-01T10:30:00Z'
			},
			system: {
				vm_hosts: 80,
				network_bandwidth: '100MBps',
				ci_alerts: 10
			}
		},
		{
			ship: {
				id: 3,
				name: 'Queen Mary 2',
				brand: 'Cunard',
				imo: '9241061',
				mmsi: '310627000',
				call_sign: 'ZCEF6',
				flag: 'UK',
				length: 345.0,
				width: 41.14,
				status: 'Operational',
				current_load: '40%',
				image: 'qm2.png'
			},
			position: {
				latitude: 40.691084301394554,
				longitude: -72.31567894335015,
				course: 90,
				speed: 15,
				heading: 95,
				accuracy: 10,
				timestamp: '2024-10-01T10:30:00Z'
			},
			system: {
				vm_hosts: 60,
				network_bandwidth: '90Mbps',
				ci_alerts: 10
			}
		},
		{
			ship: {
				id: 4,
				name: 'Queen Elizabeth',
				brand: 'Cunard',
				imo: '6725418',
				mmsi: '576059000',
				call_sign: 'YJVW6',
				flag: 'UK',
				length: 293.5,
				width: 32.0,
				status: 'Operational',
				current_load: '70%',
				image: 'qe.png'
			},
			position: {
				latitude: 27.831281650459516,
				longitude: -79.79799561307672,
				course: 90,
				speed: 15,
				heading: 95,
				accuracy: 10,
				timestamp: '2024-10-01T10:30:00Z'
			},
			system: {
				vm_hosts: 60,
				network_bandwidth: '90Mbps',
				ci_alerts: 10
			}
		}
	],
	'/api/ship/arvia/apps': {
		totalCount: 6,
		pageSize: 50,
		entities: [
			{
				entityId: 'APPLICATION-0A85ED623022CDA1',
				type: 'APPLICATION',
				displayName: 'Mistral'
			},
			{
				entityId: 'APPLICATION-83BA5FABAC59C728',
				type: 'APPLICATION',
				displayName: 'YMS'
			},
			{
				entityId: 'APPLICATION-CDE29F6BED54693B',
				type: 'APPLICATION',
				displayName: 'iCafe'
			},
			{
				entityId: 'APPLICATION-D56921BE209B4E66',
				type: 'APPLICATION',
				displayName: 'My Holiday'
			},
			{
				entityId: 'APPLICATION-EA7C4B59F27D43EB',
				type: 'APPLICATION',
				displayName: 'My web application'
			},
			{
				entityId: 'APPLICATION-F988B1CD5B97A7C9',
				type: 'APPLICATION',
				displayName: 'XDining'
			}
		]
	}
}
