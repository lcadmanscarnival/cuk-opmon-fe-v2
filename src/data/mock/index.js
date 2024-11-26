export const mockData = {
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
	apps: {
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
	},
	hosts: {
		totalCount: 263,
		pageSize: 50,
		nextPageKey: 'AQAKdHlwZShIT1NUKQEADTE3MzE5MjI1ODM3MDcBAA0xNzMyMTgxNzgzNzA3AQAYTGxVZFltdTVTMk1mUDJ5SVVtYnhwMjg9AAAA',
		entities: [
			{
				entityId: 'HOST-0157603BC565636A',
				type: 'HOST',
				displayName: 'CUK-ARV-CMG15'
			},
			{
				entityId: 'HOST-027B492589910392',
				type: 'HOST',
				displayName: 'CUK-ARV-MST2.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-035EB1200DE1A696',
				type: 'HOST',
				displayName: 'CUK-ARV-FKE05.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-0363E407BAD943BC',
				type: 'HOST',
				displayName: 'CUK-ARV-MDW06.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-043F97BF45CE71F9',
				type: 'HOST',
				displayName: 'CUK-ARV-KDS07.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-04885E60F0D61680',
				type: 'HOST',
				displayName: 'CUK-ARV-CHK2.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-04F831D51042EB5D',
				type: 'HOST',
				displayName: 'CUK-ARV-JMP32.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-060DF3F1C315F063',
				type: 'HOST',
				displayName: 'CUK-ARV-ARM1.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-07083D65973F3C36',
				type: 'HOST',
				displayName: 'CUK-ARV-CMG14'
			},
			{
				entityId: 'HOST-09E3F729D410EB6F',
				type: 'HOST',
				displayName: 'CUK-ARV-JMP37.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-0C5D6C5A507835F0',
				type: 'HOST',
				displayName: 'CUK-ARV-SPA01.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-0D5C6F31CB376036',
				type: 'HOST',
				displayName: 'CUK-ARV-CMG13'
			},
			{
				entityId: 'HOST-0DB86C8F332EEFDD',
				type: 'HOST',
				displayName: 'CUK-ARV-CTV11.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-101C3E1E6B7E18B9',
				type: 'HOST',
				displayName: 'CUK-ARV-NDC1.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-13AC45A940D3B7E9',
				type: 'HOST',
				displayName: 'CUK-ARV-API01.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-15A9323C1A71677B',
				type: 'HOST',
				displayName: 'CUK-ARV-VSN03.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-15AD9AB8F4211AB6',
				type: 'HOST',
				displayName: 'CUK-ARV-JMP45.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-15B95B3D6A7A7D5E',
				type: 'HOST',
				displayName: 'CUK-ARV-ENG01.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-1885D9080783538E',
				type: 'HOST',
				displayName: 'CUK-ARV-EX02.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-1917B827FC64EB4D',
				type: 'HOST',
				displayName: 'CUK-ARV-SNB2.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-194117D34F641266',
				type: 'HOST',
				displayName: 'CUK-ARV-JMP40.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-1BA0FD3288707F86',
				type: 'HOST',
				displayName: 'CUK-ARV-ARM2.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-1EC1C2DF41B70722',
				type: 'HOST',
				displayName: 'CUK-ARV-CTV15.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-2246EA8C0944D13E',
				type: 'HOST',
				displayName: 'CUK-ARV-CYB03.CarnivalUK.com'
			},
			{
				entityId: 'HOST-22B880A700EB4327',
				type: 'HOST',
				displayName: 'CUK-ARV-CTV19.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-24BF5FD7D300FC13',
				type: 'HOST',
				displayName: 'CUK-ARV-CYB01.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-24DA024387135250',
				type: 'HOST',
				displayName: 'CUK-ARV-FKE04.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-250BEFEF1C2586DC',
				type: 'HOST',
				displayName: 'CUK-ARV-JMP12.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-267E46D92825D4A9',
				type: 'HOST',
				displayName: 'CUK-ARV-FKE06.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-2AFC2B54BEF15BE0',
				type: 'HOST',
				displayName: 'CUK-ARV-MDW04.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-2B628725A00D3E44',
				type: 'HOST',
				displayName: 'CUK-ARV-CTV02.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-2CB769743E895030',
				type: 'HOST',
				displayName: 'CUK-ARV-CK01.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-2D3CBD444EE06894',
				type: 'HOST',
				displayName: 'CUK-ARV-SM02.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-30E5D6A9A840EC36',
				type: 'HOST',
				displayName: 'CUK-ARV-PN04.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-315E6F9717B52FA2',
				type: 'HOST',
				displayName: 'CUK-ARV-JMP26.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-32321FFC74F088E5',
				type: 'HOST',
				displayName: 'CUK-ARV-VAR1.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-33F826262D6EB6FD',
				type: 'HOST',
				displayName: 'CUK-ARV-CTV12.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-362004FE64060D0B',
				type: 'HOST',
				displayName: 'CUK-ARV-SNA2.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3666DEDF87C76F04',
				type: 'HOST',
				displayName: 'CUK-ARV-NDB1.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-375D5688E88CC55C',
				type: 'HOST',
				displayName: 'CUK-ARV-CTV31.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-37D2E2BD51F63055',
				type: 'HOST',
				displayName: 'CUK-ARV-JMP36.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-39ABA30FCF366EB3',
				type: 'HOST',
				displayName: 'CUK-ARV-JMP25.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3A15F332DAB3C8E8',
				type: 'HOST',
				displayName: 'CUK-ARV-OCN1.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3C0D76746184038C',
				type: 'HOST',
				displayName: 'CUK-ARV-DC01-UK.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3C2DC73DFEE2786E',
				type: 'HOST',
				displayName: 'CUK-ARV-ENG02.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3CCB5D2934735369',
				type: 'HOST',
				displayName: 'CUK-ARV-CTV05.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3D5B129E7106C853',
				type: 'HOST',
				displayName: 'CUK-ARV-DH02.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3E1674DF433B6B01',
				type: 'HOST',
				displayName: 'CUK-ARV-IP02.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3EEC43514561F074',
				type: 'HOST',
				displayName: 'CUK-ARV-KDS23.Arvia.CarnivalUK.com'
			},
			{
				entityId: 'HOST-3F0944F37B1755B2',
				type: 'HOST',
				displayName: 'CUK-ARV-ANS01.Arvia.CarnivalUK.com'
			}
		]
	},
	problems: {
		totalCount: 41,
		pageSize: 10,
		nextPageKey: 'AQANMTczMjA5NDk0NTc2MAEADTE3MzIxODEzNDU3NjABADJMb25nKDIpLUxvbmcoMTkzNGNlMDA2MDcpLUxvbmcoMzhlN2RiNGFlMmE3N2RmOCktYQAAAQAAAAoAAAAA',
		problems: [
			{
				problemId: '-3109041630399092800_1731974604361V2',
				displayId: 'P-24111085',
				title: 'Http monitor global outage',
				impactLevel: 'APPLICATION',
				severityLevel: 'AVAILABILITY',
				status: 'OPEN',
				affectedEntities: [
					{
						entityId: {
							id: 'HTTP_CHECK-FEE14719D7117571',
							type: 'HTTP_CHECK'
						},
						name: 'CUK-POC-ARV-YMS_Event Capacity Check'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'HTTP_CHECK-FEE14719D7117571',
							type: 'HTTP_CHECK'
						},
						name: 'CUK-POC-ARV-YMS_Event Capacity Check'
					}
				],
				rootCauseEntity: null,
				managementZones: [],
				entityTags: [],
				problemFilters: [
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					},
					{
						id: 'acf874a7-10ee-3030-bb51-91894d5f18e3',
						name: 'Arvia MSTeams '
					},
					{
						id: '4c0854d8-2f0c-37aa-9004-12a9e68d1a66',
						name: 'Over 30min'
					}
				],
				startTime: 1731974604361,
				endTime: -1
			},
			{
				problemId: '365562434842181666_1732176600000V2',
				displayId: 'P-24111196',
				title: 'Failure rate increase',
				impactLevel: 'SERVICES',
				severityLevel: 'ERROR',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'SERVICE-1C9595C526CEAACA',
							type: 'SERVICE'
						},
						name: 'Client'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'SERVICE-1C9595C526CEAACA',
							type: 'SERVICE'
						},
						name: 'Client'
					}
				],
				rootCauseEntity: {
					entityId: {
						id: 'SERVICE-1C9595C526CEAACA',
						type: 'SERVICE'
					},
					name: 'Client'
				},
				managementZones: [
					{
						id: '4846219304433368688',
						name: 'Func:SCM'
					}
				],
				entityTags: [
					{
						context: 'CONTEXTLESS',
						key: 'Function',
						value: 'SCM',
						stringRepresentation: 'Function:SCM'
					},
					{
						context: 'CONTEXTLESS',
						key: 'status',
						value: 'Operational',
						stringRepresentation: 'status:Operational'
					},
					{
						context: 'CONTEXTLESS',
						key: 'location',
						value: 'Arvia',
						stringRepresentation: 'location:Arvia'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Ship',
						value: 'ARV',
						stringRepresentation: 'Ship:ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'environment',
						value: 'Production',
						stringRepresentation: 'environment:Production'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Environment',
						value: 'PROD',
						stringRepresentation: 'Environment:PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Brand',
						value: 'CUK',
						stringRepresentation: 'Brand:CUK'
					},
					{
						context: 'CONTEXTLESS',
						key: 'fqdn',
						value: 'CUK-ARV-SCM1.Arvia.CarnivalUK.com',
						stringRepresentation: 'fqdn:CUK-ARV-SCM1.Arvia.CarnivalUK.com'
					},
					{
						context: 'CONTEXTLESS',
						key: 'typelocation',
						value: 'Ship',
						stringRepresentation: 'typelocation:Ship'
					}
				],
				problemFilters: [
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					},
					{
						id: 'acf874a7-10ee-3030-bb51-91894d5f18e3',
						name: 'Arvia MSTeams '
					}
				],
				startTime: 1732176900000,
				endTime: 1732177800000
			},
			{
				problemId: '-1547353073244226745_1732176480000V2',
				displayId: 'P-24111195',
				title: 'Failure rate increase',
				impactLevel: 'SERVICES',
				severityLevel: 'ERROR',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'SERVICE-D1BD4F67210A8A17',
							type: 'SERVICE'
						},
						name: 'Default Web Site:80,443 (/BGB)'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'SERVICE-D1BD4F67210A8A17',
							type: 'SERVICE'
						},
						name: 'Default Web Site:80,443 (/BGB)'
					}
				],
				rootCauseEntity: null,
				managementZones: [
					{
						id: '4846219304433368688',
						name: 'Func:SCM'
					}
				],
				entityTags: [
					{
						context: 'CONTEXTLESS',
						key: 'Function',
						value: 'SCM',
						stringRepresentation: 'Function:SCM'
					},
					{
						context: 'CONTEXTLESS',
						key: 'status',
						value: 'Operational',
						stringRepresentation: 'status:Operational'
					},
					{
						context: 'CONTEXTLESS',
						key: 'location',
						value: 'Arvia',
						stringRepresentation: 'location:Arvia'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Ship',
						value: 'ARV',
						stringRepresentation: 'Ship:ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'environment',
						value: 'Production',
						stringRepresentation: 'environment:Production'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Environment',
						value: 'PROD',
						stringRepresentation: 'Environment:PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Brand',
						value: 'CUK',
						stringRepresentation: 'Brand:CUK'
					},
					{
						context: 'CONTEXTLESS',
						key: 'fqdn',
						value: 'CUK-ARV-SCM1.Arvia.CarnivalUK.com',
						stringRepresentation: 'fqdn:CUK-ARV-SCM1.Arvia.CarnivalUK.com'
					},
					{
						context: 'CONTEXTLESS',
						key: 'typelocation',
						value: 'Ship',
						stringRepresentation: 'typelocation:Ship'
					}
				],
				problemFilters: [
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					}
				],
				startTime: 1732176780000,
				endTime: 1732177140000
			},
			{
				problemId: '-4125215937019899483_1732175147932V2',
				displayId: 'P-24111194',
				title: 'Http monitor global outage',
				impactLevel: 'APPLICATION',
				severityLevel: 'AVAILABILITY',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'HTTP_CHECK-CB2D3C50D8CC23C5',
							type: 'HTTP_CHECK'
						},
						name: 'CUK-POC-ARV-YMS_Get Venue List'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'HTTP_CHECK-CB2D3C50D8CC23C5',
							type: 'HTTP_CHECK'
						},
						name: 'CUK-POC-ARV-YMS_Get Venue List'
					}
				],
				rootCauseEntity: null,
				managementZones: [],
				entityTags: [],
				problemFilters: [
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					},
					{
						id: 'acf874a7-10ee-3030-bb51-91894d5f18e3',
						name: 'Arvia MSTeams '
					},
					{
						id: '4c0854d8-2f0c-37aa-9004-12a9e68d1a66',
						name: 'Over 30min'
					}
				],
				startTime: 1732175147932,
				endTime: 1732175745281
			},
			{
				problemId: '-1037180540175359259_1732172280000V2',
				displayId: 'P-24111193',
				title: 'Response time degradation',
				impactLevel: 'SERVICES',
				severityLevel: 'PERFORMANCE',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'SERVICE-8F82B1D78C16823E',
							type: 'SERVICE'
						},
						name: 'ExecutionTask'
					},
					{
						entityId: {
							id: 'SERVICE-330E6111A50117F6',
							type: 'SERVICE'
						},
						name: 'cuk.musteringPerson_V1.internal.apass.interactions'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'SERVICE-8F82B1D78C16823E',
							type: 'SERVICE'
						},
						name: 'ExecutionTask'
					},
					{
						entityId: {
							id: 'SERVICE-330E6111A50117F6',
							type: 'SERVICE'
						},
						name: 'cuk.musteringPerson_V1.internal.apass.interactions'
					}
				],
				rootCauseEntity: {
					entityId: {
						id: 'SERVICE-F5164B484ED57E33',
						type: 'SERVICE'
					},
					name: 'Software AG, webMethods Integration Server Queue Listener'
				},
				managementZones: [
					{
						id: '6163935869572493423',
						name: 'Func:MDW'
					}
				],
				entityTags: [
					{
						context: 'CONTEXTLESS',
						key: 'status',
						value: 'Operational',
						stringRepresentation: 'status:Operational'
					},
					{
						context: 'CONTEXTLESS',
						key: 'location',
						value: 'Arvia',
						stringRepresentation: 'location:Arvia'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Ship',
						value: 'ARV',
						stringRepresentation: 'Ship:ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Function',
						value: 'MDW',
						stringRepresentation: 'Function:MDW'
					},
					{
						context: 'CONTEXTLESS',
						key: 'environment',
						value: 'Production',
						stringRepresentation: 'environment:Production'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Environment',
						value: 'PROD',
						stringRepresentation: 'Environment:PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Brand',
						value: 'CUK',
						stringRepresentation: 'Brand:CUK'
					},
					{
						context: 'CONTEXTLESS',
						key: 'fqdn',
						value: 'CUK-ARV-MDW03.Arvia.CarnivalUK.com, CUK-ARV-MDW04.Arvia.CarnivalUK.com',
						stringRepresentation: 'fqdn:CUK-ARV-MDW03.Arvia.CarnivalUK.com, CUK-ARV-MDW04.Arvia.CarnivalUK.com'
					},
					{
						context: 'CONTEXTLESS',
						key: 'typelocation',
						value: 'Ship',
						stringRepresentation: 'typelocation:Ship'
					}
				],
				problemFilters: [
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					},
					{
						id: 'acf874a7-10ee-3030-bb51-91894d5f18e3',
						name: 'Arvia MSTeams '
					},
					{
						id: '4c0854d8-2f0c-37aa-9004-12a9e68d1a66',
						name: 'Over 30min'
					}
				],
				startTime: 1732172580000,
				endTime: 1732175520000
			},
			{
				problemId: '7282167974787747619_1732167090117V2',
				displayId: 'P-24111191',
				title: 'CPU saturation',
				impactLevel: 'INFRASTRUCTURE',
				severityLevel: 'RESOURCE_CONTENTION',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'HOST-91C87A2E19B9D0B2',
							type: 'HOST'
						},
						name: 'CUK-ARV-APA1.Arvia.CarnivalUK.com'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'HOST-91C87A2E19B9D0B2',
							type: 'HOST'
						},
						name: 'CUK-ARV-APA1.Arvia.CarnivalUK.com'
					}
				],
				rootCauseEntity: {
					entityId: {
						id: 'PROCESS_GROUP-20B7EF41850EABF3',
						type: 'PROCESS_GROUP'
					},
					name: ' - MSSQL15.MSSQLSERVER'
				},
				managementZones: [
					{
						id: '-7621578034712137700',
						name: 'Func:APA'
					}
				],
				entityTags: [
					{
						context: 'CONTEXTLESS',
						key: 'Group',
						value: 'APA',
						stringRepresentation: 'Group:APA'
					},
					{
						context: 'CONTEXTLESS',
						key: 'status',
						value: 'Operational',
						stringRepresentation: 'status:Operational'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Database',
						stringRepresentation: 'Database'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Ship',
						value: 'ARV',
						stringRepresentation: 'Ship:ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Function',
						value: 'APA',
						stringRepresentation: 'Function:APA'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS',
						value: 'Windows Server 2019 Standard 1809, ver. 10.0.17763',
						stringRepresentation: 'OS:Windows Server 2019 Standard 1809, ver. 10.0.17763'
					},
					{
						context: 'ENVIRONMENT',
						key: 'ARV',
						stringRepresentation: '[Environment]ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'fqdn',
						value: 'CUK-ARV-APA1.Arvia.CarnivalUK.com',
						stringRepresentation: 'fqdn:CUK-ARV-APA1.Arvia.CarnivalUK.com'
					},
					{
						context: 'ENVIRONMENT',
						key: 'VenueManagement',
						stringRepresentation: '[Environment]VenueManagement'
					},
					{
						context: 'CONTEXTLESS',
						key: 'location',
						value: 'Arvia',
						stringRepresentation: 'location:Arvia'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS Version',
						value: 'Windows Server 2019 Standard 1809, ver. 10.0.17763',
						stringRepresentation: 'OS Version:Windows Server 2019 Standard 1809, ver. 10.0.17763'
					},
					{
						context: 'ENVIRONMENT',
						key: 'PROD',
						stringRepresentation: '[Environment]PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'environment',
						value: 'Production',
						stringRepresentation: 'environment:Production'
					},
					{
						context: 'CONTEXTLESS',
						key: 'HostGroup',
						value: 'ARV_PROD',
						stringRepresentation: 'HostGroup:ARV_PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'sys_id',
						value: 'ce2e36961bca1910e963ea88b04bcbbb',
						stringRepresentation: 'sys_id:ce2e36961bca1910e963ea88b04bcbbb'
					},
					{
						context: 'CONTEXTLESS',
						key: 'applicationName',
						value: 'APASS',
						stringRepresentation: 'applicationName:APASS'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS Type',
						value: 'Windows',
						stringRepresentation: 'OS Type:Windows'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Environment',
						value: 'PROD',
						stringRepresentation: 'Environment:PROD'
					},
					{
						context: 'ENVIRONMENT',
						key: 'XDining',
						stringRepresentation: '[Environment]XDining'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Brand',
						value: 'CUK',
						stringRepresentation: 'Brand:CUK'
					},
					{
						context: 'CONTEXTLESS',
						key: 'typelocation',
						value: 'Ship',
						stringRepresentation: 'typelocation:Ship'
					}
				],
				problemFilters: [
					{
						id: '79d001b7-bda5-37a1-ad0f-28e634bbbf61',
						name: 'CPU Problems over 15 min'
					},
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					},
					{
						id: 'b20b6255-8234-3a6b-b092-f84b5983aefb',
						name: 'Critical_Infra_CPUandMemory'
					},
					{
						id: 'acf874a7-10ee-3030-bb51-91894d5f18e3',
						name: 'Arvia MSTeams '
					},
					{
						id: '4c0854d8-2f0c-37aa-9004-12a9e68d1a66',
						name: 'Over 30min'
					}
				],
				startTime: 1732167090117,
				endTime: 1732170873148
			},
			{
				problemId: '-1112721369927333970_1732165320000V2',
				displayId: 'P-24111190',
				title: 'ESXi network problems',
				impactLevel: 'INFRASTRUCTURE',
				severityLevel: 'ERROR',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'HYPERVISOR-CC0AF3844F7F0923',
							type: 'HYPERVISOR'
						},
						name: 'cuk-arv-es06.arvia.carnivaluk.com'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'HYPERVISOR-CC0AF3844F7F0923',
							type: 'HYPERVISOR'
						},
						name: 'cuk-arv-es06.arvia.carnivaluk.com'
					}
				],
				rootCauseEntity: null,
				managementZones: [
					{
						id: '-8167898017060998307',
						name: 'VMware'
					}
				],
				entityTags: [],
				problemFilters: [
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					},
					{
						id: 'acf874a7-10ee-3030-bb51-91894d5f18e3',
						name: 'Arvia MSTeams '
					}
				],
				startTime: 1732165620000,
				endTime: 1732165980000
			},
			{
				problemId: '-941340512833799001_1732162800312V2',
				displayId: 'P-24111189',
				title: 'Connectivity problem',
				impactLevel: 'INFRASTRUCTURE',
				severityLevel: 'ERROR',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'PROCESS_GROUP_INSTANCE-56C651191E370546',
							type: 'PROCESS_GROUP_INSTANCE'
						},
						name: 'SPK - splunkd'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'PROCESS_GROUP_INSTANCE-56C651191E370546',
							type: 'PROCESS_GROUP_INSTANCE'
						},
						name: 'SPK - splunkd'
					}
				],
				rootCauseEntity: null,
				managementZones: [
					{
						id: '5972540548952175806',
						name: 'Func:SPK'
					}
				],
				entityTags: [
					{
						context: 'CONTEXTLESS',
						key: 'Function',
						value: 'SPK',
						stringRepresentation: 'Function:SPK'
					},
					{
						context: 'CONTEXTLESS',
						key: 'status',
						value: 'Operational',
						stringRepresentation: 'status:Operational'
					},
					{
						context: 'CONTEXTLESS',
						key: 'location',
						value: 'Arvia',
						stringRepresentation: 'location:Arvia'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Ship',
						value: 'ARV',
						stringRepresentation: 'Ship:ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'environment',
						value: 'Production',
						stringRepresentation: 'environment:Production'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Environment',
						value: 'PROD',
						stringRepresentation: 'Environment:PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Brand',
						value: 'CUK',
						stringRepresentation: 'Brand:CUK'
					},
					{
						context: 'CONTEXTLESS',
						key: 'typelocation',
						value: 'Ship',
						stringRepresentation: 'typelocation:Ship'
					},
					{
						context: 'CONTEXTLESS',
						key: 'fqdn',
						value: 'CUK-ARV-SPK1.Arvia.CarnivalUK.com',
						stringRepresentation: 'fqdn:CUK-ARV-SPK1.Arvia.CarnivalUK.com'
					}
				],
				problemFilters: [
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					}
				],
				startTime: 1732162800312,
				endTime: 1732163362959
			},
			{
				problemId: '-3722027310877864873_1732161750034V2',
				displayId: 'P-24111188',
				title: 'Memory saturation',
				impactLevel: 'INFRASTRUCTURE',
				severityLevel: 'RESOURCE_CONTENTION',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'HOST-4D7E3CD4EBB0399C',
							type: 'HOST'
						},
						name: 'CUK-ARV-MST1.Arvia.CarnivalUK.com'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'HOST-4D7E3CD4EBB0399C',
							type: 'HOST'
						},
						name: 'CUK-ARV-MST1.Arvia.CarnivalUK.com'
					}
				],
				rootCauseEntity: null,
				managementZones: [
					{
						id: '-5814850603722788802',
						name: 'Func:MST'
					}
				],
				entityTags: [
					{
						context: 'CONTEXTLESS',
						key: 'Function',
						value: 'MST',
						stringRepresentation: 'Function:MST'
					},
					{
						context: 'CONTEXTLESS',
						key: 'status',
						value: 'Operational',
						stringRepresentation: 'status:Operational'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Database',
						stringRepresentation: 'Database'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Ship',
						value: 'ARV',
						stringRepresentation: 'Ship:ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'sys_id',
						value: '8a4d85ec1b57f150e963ea88b04bcbfa',
						stringRepresentation: 'sys_id:8a4d85ec1b57f150e963ea88b04bcbfa'
					},
					{
						context: 'ENVIRONMENT',
						key: 'ARV',
						stringRepresentation: '[Environment]ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'location',
						value: 'Arvia',
						stringRepresentation: 'location:Arvia'
					},
					{
						context: 'ENVIRONMENT',
						key: 'PROD',
						stringRepresentation: '[Environment]PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'fqdn',
						value: 'CUK-ARV-MST1.Arvia.CarnivalUK.com',
						stringRepresentation: 'fqdn:CUK-ARV-MST1.Arvia.CarnivalUK.com'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Group',
						value: 'MST',
						stringRepresentation: 'Group:MST'
					},
					{
						context: 'CONTEXTLESS',
						key: 'environment',
						value: 'Production',
						stringRepresentation: 'environment:Production'
					},
					{
						context: 'CONTEXTLESS',
						key: 'HostGroup',
						value: 'ARV_PROD',
						stringRepresentation: 'HostGroup:ARV_PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS Type',
						value: 'Windows',
						stringRepresentation: 'OS Type:Windows'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS Version',
						value: 'Windows Server 2022 Standard 21H2 2009, ver. 10.0.20348',
						stringRepresentation: 'OS Version:Windows Server 2022 Standard 21H2 2009, ver. 10.0.20348'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Environment',
						value: 'PROD',
						stringRepresentation: 'Environment:PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Brand',
						value: 'CUK',
						stringRepresentation: 'Brand:CUK'
					},
					{
						context: 'CONTEXTLESS',
						key: 'applicationName',
						value: 'Mistral',
						stringRepresentation: 'applicationName:Mistral'
					},
					{
						context: 'CONTEXTLESS',
						key: 'typelocation',
						value: 'Ship',
						stringRepresentation: 'typelocation:Ship'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS',
						value: 'Windows Server 2022 Standard 21H2 2009, ver. 10.0.20348',
						stringRepresentation: 'OS:Windows Server 2022 Standard 21H2 2009, ver. 10.0.20348'
					}
				],
				problemFilters: [
					{
						id: '82efa973-8371-36b7-b833-894ae0436650',
						name: 'Memory Problems over 30 min'
					},
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					},
					{
						id: 'c21f969b-5f03-333d-83e0-4f8f136e7682',
						name: 'Default'
					},
					{
						id: 'b20b6255-8234-3a6b-b092-f84b5983aefb',
						name: 'Critical_Infra_CPUandMemory'
					},
					{
						id: 'acf874a7-10ee-3030-bb51-91894d5f18e3',
						name: 'Arvia MSTeams '
					},
					{
						id: '4c0854d8-2f0c-37aa-9004-12a9e68d1a66',
						name: 'Over 30min'
					}
				],
				startTime: 1732161750034,
				endTime: 1732166083657
			},
			{
				problemId: '4100487100420816376_1732161570311V2',
				displayId: 'P-24111187',
				title: 'CPU saturation',
				impactLevel: 'INFRASTRUCTURE',
				severityLevel: 'RESOURCE_CONTENTION',
				status: 'CLOSED',
				affectedEntities: [
					{
						entityId: {
							id: 'HOST-4D7E3CD4EBB0399C',
							type: 'HOST'
						},
						name: 'CUK-ARV-MST1.Arvia.CarnivalUK.com'
					}
				],
				impactedEntities: [
					{
						entityId: {
							id: 'HOST-4D7E3CD4EBB0399C',
							type: 'HOST'
						},
						name: 'CUK-ARV-MST1.Arvia.CarnivalUK.com'
					}
				],
				rootCauseEntity: {
					entityId: {
						id: 'PROCESS_GROUP-BA3ECC9FD325B947',
						type: 'PROCESS_GROUP'
					},
					name: ' - MSSQL16.MSSQLSERVER'
				},
				managementZones: [
					{
						id: '-5814850603722788802',
						name: 'Func:MST'
					}
				],
				entityTags: [
					{
						context: 'CONTEXTLESS',
						key: 'Function',
						value: 'MST',
						stringRepresentation: 'Function:MST'
					},
					{
						context: 'CONTEXTLESS',
						key: 'status',
						value: 'Operational',
						stringRepresentation: 'status:Operational'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Database',
						stringRepresentation: 'Database'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Ship',
						value: 'ARV',
						stringRepresentation: 'Ship:ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'sys_id',
						value: '8a4d85ec1b57f150e963ea88b04bcbfa',
						stringRepresentation: 'sys_id:8a4d85ec1b57f150e963ea88b04bcbfa'
					},
					{
						context: 'ENVIRONMENT',
						key: 'ARV',
						stringRepresentation: '[Environment]ARV'
					},
					{
						context: 'CONTEXTLESS',
						key: 'location',
						value: 'Arvia',
						stringRepresentation: 'location:Arvia'
					},
					{
						context: 'ENVIRONMENT',
						key: 'PROD',
						stringRepresentation: '[Environment]PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'fqdn',
						value: 'CUK-ARV-MST1.Arvia.CarnivalUK.com',
						stringRepresentation: 'fqdn:CUK-ARV-MST1.Arvia.CarnivalUK.com'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Group',
						value: 'MST',
						stringRepresentation: 'Group:MST'
					},
					{
						context: 'CONTEXTLESS',
						key: 'environment',
						value: 'Production',
						stringRepresentation: 'environment:Production'
					},
					{
						context: 'CONTEXTLESS',
						key: 'HostGroup',
						value: 'ARV_PROD',
						stringRepresentation: 'HostGroup:ARV_PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS Type',
						value: 'Windows',
						stringRepresentation: 'OS Type:Windows'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS Version',
						value: 'Windows Server 2022 Standard 21H2 2009, ver. 10.0.20348',
						stringRepresentation: 'OS Version:Windows Server 2022 Standard 21H2 2009, ver. 10.0.20348'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Environment',
						value: 'PROD',
						stringRepresentation: 'Environment:PROD'
					},
					{
						context: 'CONTEXTLESS',
						key: 'Brand',
						value: 'CUK',
						stringRepresentation: 'Brand:CUK'
					},
					{
						context: 'CONTEXTLESS',
						key: 'applicationName',
						value: 'Mistral',
						stringRepresentation: 'applicationName:Mistral'
					},
					{
						context: 'CONTEXTLESS',
						key: 'typelocation',
						value: 'Ship',
						stringRepresentation: 'typelocation:Ship'
					},
					{
						context: 'CONTEXTLESS',
						key: 'OS',
						value: 'Windows Server 2022 Standard 21H2 2009, ver. 10.0.20348',
						stringRepresentation: 'OS:Windows Server 2022 Standard 21H2 2009, ver. 10.0.20348'
					}
				],
				problemFilters: [
					{
						id: '3c2fcffb-cffa-30db-9b12-2dccb4b5c8b7',
						name: 'ServiceNow Default Problem Notification - carnivaluk Profile'
					}
				],
				startTime: 1732161570311,
				endTime: 1732162332021
			}
		],
		warnings: []
	}
}
