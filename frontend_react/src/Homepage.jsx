import React from 'react';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';

function Homepage() {
	return (
		<div>
			<Sheet
				variant="outlined"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					m: 1,
					p: 5,
					py: 15,
					borderRadius: 20,
					bgcolor: 'background.body',
					color: 'text.primary',
				}}
			>
				<Typography
					level="h1"
					sx={{
						fontFamily: 'SixtyFour',
						m: 1,
					}}
				>
					We are Project CAHTA
				</Typography>
				<Typography
					level="h3"
					sx={{
						fontFamily: 'Lora',
						m: 1,
					}}
				>
					Catch Smarter. Tread Lighter. Sustain Our Oceans.
				</Typography>
				<Sheet
					variant="outlined"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						p: 2,
						borderRadius: 5,
						my: 5,
						bgcolor: 'background.body',
						color: 'text.primary',
						minWidth: '40%',
						maxWidth: '50%',
					}}
				>
					<Box>
						<Typography
							sx={{
								fontFamily: 'Lora',
								fontSize: '1em',
							}}
						>
							CAHTA introduces a groundbreaking bottom trawling net that uses
							sound technology to attract groundfish while minimizing
							environmental impact and reducing fuel costs.
						</Typography>
						<img
							style={{ width: '100%', padding: '10px' }}
							src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
							alt="Empty placeholder image, no content"
						/>
					</Box>
				</Sheet>
			</Sheet>
		</div>
	);
}

export default Homepage;
