export const Icons = {
	logo: props => {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width={50} height={50} viewBox='0 0 50 50' {...props}>
				<defs>
					<linearGradient id='linear-gradient' x1='0.5' x2='0.5' y2={1} gradientUnits='objectBoundingBox'>
						<stop offset={0} stopColor='#2c6ba8' />
						<stop offset={1} stopColor='#164672' />
					</linearGradient>
					<clipPath id='clip-path'>
						<rect id='Rectangle_1' data-name='Rectangle 1' width={30} height='28.099' transform='translate(0 0)' fill='none' />
					</clipPath>
				</defs>
				<g id='Group_60' data-name='Group 60' transform='translate(-23 -26)'>
					<rect id='Rectangle_57' data-name='Rectangle 57' width={50} height={50} rx={10} transform='translate(23 26)' fill='url(#linear-gradient)' />
					<g id='Group_14' data-name='Group 14' transform='translate(897.072 -8.9)'>
						<g id='Group_1' data-name='Group 1' transform='translate(-864 46)' clipPath='url(#clip-path)'>
							<path
								id='Path_1'
								data-name='Path 1'
								d='M5.261,11.262,13.044,9.5c.942.708.371,1.57.889,2.34a42.937,42.937,0,0,1,15.544-1.071,30.565,30.565,0,0,0,3.459,15.641,44.516,44.516,0,0,1-4.513.951,31.442,31.442,0,0,0-4.8.84,14.9,14.9,0,0,1-6.528-.28c-.761-.148-1.1-.82-1.627-1.3-2.019-.138-3.8,1.051-5.783,1.029-.32-.281-.263-.651-.238-1.014a26.5,26.5,0,0,0-3.8-14.255q-.263-.553-.527-1.1l.143-.017M25.971,19.6a7.2,7.2,0,0,0-1.566-4.8,5.443,5.443,0,0,0-8.786-.029,7.126,7.126,0,0,0-1.4,6.211c.685,3.115,3.154,5.255,5.877,5.2,2.68-.049,5.157-2.349,5.765-5.382a8.76,8.76,0,0,0,.112-1.2'
								transform='translate(-2.936 -5.45)'
								fill='#fff'
							/>
							<path
								id='Path_2'
								data-name='Path 2'
								d='M6.745,22.2c-.32-.281-.264-.651-.238-1.014-1.42-4.71-2.673-9.466-3.8-14.255L2.182,5.829l.144-.017c.058-.524.9-1.127-.128-1.544l.045.851c-.345,0-.686,0-.791-.44.038-.481.4-.44.726-.466q.059-.464.119-.929c.092-.463.046-.863-.5-1.05a1.418,1.418,0,0,0,.13,1.027l-.4.507C.442,2.931,1.2,2.2,1.546,1.392,1.085,1.026,1.128.227.269,0-.074,1.854-.269,3.758.841,5.242a8.814,8.814,0,0,1,1.41,3.192q2.5,9.314,5,18.631c.1.385.015.889.92,1.034L6.745,22.2'
								transform='translate(0 0)'
								fill='#fff'
							/>
							<path id='Path_3' data-name='Path 3' d='M5.118,9.935c0-.019,0-.038,0-.056H5.1c0,.014,0,.029-.006.043l.026.012' transform='translate(-2.921 -5.667)' fill='#fff' />
							<path id='Path_4' data-name='Path 4' d='M38.6,24.382a6.821,6.821,0,0,1-1.381,4.635,3.183,3.183,0,0,1-5.116.143c-2.052-2.313-2-7.167.1-9.424a3.181,3.181,0,0,1,4.981.172A6.638,6.638,0,0,1,38.6,24.382' transform='translate(-17.549 -10.679)' fill='#fff' />
						</g>
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
	}
}

export const NavIcons = {
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
	fingerpring: props => {
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
}
