export const Icons = {
	logo: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='70.363' height='65.904' viewBox='0 0 70.363 65.904' {...props}>
				<defs>
					<clipPath id='clip-path'>
						<rect id='Rectangle_1' data-name='Rectangle 1' width='70.363' height='65.904' transform='translate(0 0)' fill='none' />
					</clipPath>
				</defs>
				<g id='Group_2' data-name='Group 2' transform='translate(0 0)'>
					<g id='Group_1' data-name='Group 1' clipPath='url(#clip-path)'>
						<path
							id='Path_1'
							data-name='Path 1'
							d='M5.453,13.632,23.708,9.5c2.209,1.661.869,3.682,2.084,5.488a100.706,100.706,0,0,1,36.457-2.513A71.689,71.689,0,0,0,70.363,49.16c-3.949.805-7.162,1.917-10.586,2.23a73.745,73.745,0,0,0-11.266,1.97c-5.092,1.279-10.236.333-15.312-.657-1.785-.348-2.588-1.924-3.817-3.039-4.736-.323-8.907,2.466-13.563,2.413-.75-.66-.618-1.527-.559-2.378.33-12.023-2.907-23.1-8.906-33.435q-.617-1.3-1.236-2.591ZM54.028,33.2a16.9,16.9,0,0,0-3.672-11.262c-5.524-6.978-15.077-7.032-20.606-.069a16.713,16.713,0,0,0-3.291,14.567c1.607,7.306,7.4,12.325,13.785,12.207,6.285-.115,12.1-5.51,13.521-12.624a20.546,20.546,0,0,0,.263-2.819'
							fill='#ec1f42'
						/>
						<path
							id='Path_2'
							data-name='Path 2'
							d='M15.82,52.077c-.75-.66-.619-1.527-.559-2.378C11.93,38.651,8.991,27.5,6.355,16.264q-.618-1.3-1.238-2.592l.337-.04c.136-1.23,2.117-2.644-.3-3.621l.105,1.995C4.449,12.011,3.65,12,3.4,10.975c.088-1.129.946-1.031,1.7-1.094q.139-1.089.278-2.178c.215-1.087.109-2.025-1.172-2.462a3.325,3.325,0,0,0,.3,2.409L3.584,8.839c-2.549-1.964-.777-3.683.042-5.574C2.543,2.407,2.645.533.631,0-.175,4.349-.632,8.813,1.972,12.3a20.673,20.673,0,0,1,3.307,7.486Q11.152,41.627,17,63.479c.242.9.036,2.086,2.158,2.425C18,61.117,16.911,56.6,15.82,52.077'
							fill='#363334'
						/>
						<path id='Path_3' data-name='Path 3' d='M5.153,10.011c0-.044-.005-.088-.007-.132l-.041,0c0,.034-.01.068-.013.1.023.009.039.018.061.027' fill='#363334' />
						<path id='Path_4' data-name='Path 4' d='M49.37,32.14c.073,4.09-.712,7.752-3.24,10.87-3.351,4.134-8.509,4.268-12,.335-4.813-5.424-4.695-16.81.23-22.1a7.46,7.46,0,0,1,11.683.4,15.57,15.57,0,0,1,3.326,10.5' fill='#126ba8' />
					</g>
				</g>
			</svg>
		)
	},
	folder: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width={11} height='9.5' viewBox='0 0 11 9.5' {...props}>
				<path
					id='Path_198'
					data-name='Path 198'
					d='M11,11.5a1,1,0,0,0,1-1v-5a1,1,0,0,0-1-1H7.05A1,1,0,0,1,6.2,4.05l-.4-.6A1,1,0,0,0,4.965,3H3A1,1,0,0,0,2,4v6.5a1,1,0,0,0,1,1Z'
					transform='translate(-1.5 -2.5)'
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={1}
				/>
			</svg>
		)
	},
	fullscreen: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-maximize' {...props}>
				<path d='M8 3H5a2 2 0 0 0-2 2v3' />
				<path d='M21 8V5a2 2 0 0 0-2-2h-3' />
				<path d='M3 16v3a2 2 0 0 0 2 2h3' />
				<path d='M16 21h3a2 2 0 0 0 2-2v-3' />
			</svg>
		)
	},
	hamburger: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-menu' {...props}>
				<line x1={4} x2={20} y1={12} y2={12} />
				<line x1={4} x2={20} y1={6} y2={6} />
				<line x1={4} x2={20} y1={18} y2={18} />
			</svg>
		)
	},
	search: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-search' {...props}>
				<circle cx={11} cy={11} r={8} />
				<path d='m21 21-4.3-4.3' />
			</svg>
		)
	},
	info: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-info' {...props}>
				<circle cx={12} cy={12} r={10} />
				<path d='M12 16v-4' />
				<path d='M12 8h.01' />
			</svg>
		)
	},

	layers: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width='17.05' height='16.658' viewBox='0 0 17.05 16.658' {...props}>
				<g id='Group_17' data-name='Group 17' transform='translate(-1.173 -1.365)'>
					<path
						id='Path_156'
						data-name='Path 156'
						d='M10.337,2.138a1.54,1.54,0,0,0-1.278,0l-6.6,3a.77.77,0,0,0,0,1.409l6.6,3.01a1.54,1.54,0,0,0,1.278,0l6.6-3a.77.77,0,0,0,0-1.409Z'
						transform='translate(-0.001)'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.25'
					/>
					<path id='Path_157' data-name='Path 157' d='M17.4,17.65l-7.059,3.2a1.54,1.54,0,0,1-1.278,0L2,17.65' transform='translate(0 -3.603)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
					<path id='Path_158' data-name='Path 158' d='M17.4,12.65l-7.059,3.2a1.54,1.54,0,0,1-1.278,0L2,12.65' transform='translate(0 -2.452)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
				</g>
			</svg>
		)
	},
	chart: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width='16.319' height='16.319' viewBox='0 0 16.319 16.319' {...props}>
				<g id='Group_35' data-name='Group 35' transform='translate(-2.375 -2.375)'>
					<path id='Path_163' data-name='Path 163' d='M9,5V8.349' transform='translate(-0.977 -0.326)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
					<rect id='Rectangle_34' data-name='Rectangle 34' width={3} height={6} rx={1} transform='translate(6.534 7.534)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
					<path id='Path_164' data-name='Path 164' d='M9,15v1.674' transform='translate(-0.977 -1.954)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
					<path id='Path_165' data-name='Path 165' d='M17,3V4.674' transform='translate(-2.28)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
					<rect id='Rectangle_35' data-name='Rectangle 35' width={3} height={7} rx={1} transform='translate(13.534 4.534)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
					<path id='Path_166' data-name='Path 166' d='M17,13v2.511' transform='translate(-2.28 -1.629)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
					<path id='Path_167' data-name='Path 167' d='M3,3V18.069H18.069' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
				</g>
			</svg>
		)
	},
	heartbeat: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width='16.25' height='14.75' viewBox='0 0 16.25 14.75' {...props}>
				<path id='Path_169' data-name='Path 169' d='M17,9.75H14L11.75,16.5,7.25,3,5,9.75H2' transform='translate(-1.375 -2.375)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
			</svg>
		)
	},
	fingerprint: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width='16.556' height='16.891' viewBox='0 0 16.556 16.891' {...props}>
				<g id='Group_73' data-name='Group 73' transform='translate(-1.25 -1.14)'>
					<path id='Path_170' data-name='Path 170' d='M11.441,10a1.506,1.506,0,0,0-1.506,1.506c0,.768-.075,1.89-.2,3.011' transform='translate(-1.913 -1.978)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					<path id='Path_171' data-name='Path 171' d='M13.753,13.12c0,1.792,0,4.8-.753,6.685' transform='translate(-2.719 -2.749)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					<path id='Path_172' data-name='Path 172' d='M17.29,20.273c.09-.452.324-1.731.376-2.273' transform='translate(-3.779 -3.955)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					<path id='Path_173' data-name='Path 173' d='M2,9.528A7.528,7.528,0,0,1,15.551,5.011' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					<path id='Path_174' data-name='Path 174' d='M2,16h.008' transform='translate(0 -3.461)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					<path id='Path_175' data-name='Path 175' d='M21.8,14.517A26.56,26.56,0,0,0,21.8,10' transform='translate(-4.894 -1.978)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					<path id='Path_176' data-name='Path 176' d='M5,17.152a20.4,20.4,0,0,0,.753-5.646A4.517,4.517,0,0,1,6.009,10' transform='translate(-0.742 -1.978)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					<path id='Path_177' data-name='Path 177' d='M8.65,21.506A11.8,11.8,0,0,0,9.079,20' transform='translate(-1.644 -4.45)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
					<path id='Path_178' data-name='Path 178' d='M9,6.6a4.517,4.517,0,0,1,6.775,3.915v1.506' transform='translate(-1.73 -0.988)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
				</g>
			</svg>
		)
	},
	history: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-history' {...props}>
				<path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
				<path d='M3 3v5h5' />
				<path d='M12 7v5l4 2' />
			</svg>
		)
	}
}

// waves: props => {
// 	return (
// 		<svg xmlns='http://www.w3.org/2000/svg' width='11.135' height='16.7' viewBox='0 0 11.135 16.7' {...props}>
// 			<g id='Group_77' data-name='Group 77' transform='translate(-5.147 -1.15)'>
// 				<path id='Path_582' data-name='Path 582' d='M6,8.32a5.422,5.422,0,0,1,0,5.371' transform='translate(0 -1.505)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
// 				<path id='Path_583' data-name='Path 583' d='M9.46,6.21a9.37,9.37,0,0,1,0,8.856' transform='translate(-0.935 -1.138)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
// 				<path id='Path_584' data-name='Path 584' d='M12.91,4.1a12.386,12.386,0,0,1,.007,11.935' transform='translate(-1.867 -0.568)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
// 				<path id='Path_585' data-name='Path 585' d='M16.37,2a15.485,15.485,0,0,1,0,15' transform='translate(-2.803 0)' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25' />
// 			</g>
// 		</svg>
// 	)
// }
