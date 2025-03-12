import React from 'react';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

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
			</Sheet>
		</div>
	);
}

export default Homepage;
