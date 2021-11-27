import useTheme from '../../Hooks/useTheme.js';

function CamcorderIcon() {
	const [theme] = useTheme();

	return (
		<>
			<svg
				width={27}
				height={20}
				viewBox='0 0 27 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					opacity='0.24'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M22.2082 2.86766L18.4091 5.68182V2.50266C18.4091 1.11814 17.3104 0 15.955 0H2.4541C1.09644 0 0 1.12048 0 2.50266V17.4973C0 18.8819 1.09874 20 2.4541 20H15.955C17.3126 20 18.4091 18.8795 18.4091 17.4973V14.3182L22.2082 17.1323C22.48 17.3336 22.9801 17.5 23.32 17.5H25.7691C26.456 17.5 27 16.939 27 16.2469V3.75309C27 3.06064 26.4489 2.5 25.7691 2.5H23.32C22.9732 2.5 22.4823 2.66461 22.2082 2.86766ZM2.45455 17.5V2.5H15.9545V17.5H2.45455ZM4.90909 13.75C4.90909 13.0596 5.45956 12.5 6.13996 12.5H12.2691C12.9489 12.5 13.5 13.0548 13.5 13.75C13.5 14.4404 12.9495 15 12.2691 15H6.13996C5.46017 15 4.90909 14.4452 4.90909 13.75ZM23.5108 14.9998L18.424 11.238L18.4243 8.76179L23.5073 4.9966L24.5455 4.99818V14.9988L23.5108 14.9998Z'
					fill={theme === 'dark' ? '#898989' : 'black'}
				/>
			</svg>
		</>
	);
}

export default CamcorderIcon;
