import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function App() {
	return (
		<CssVarsProvider>
			<Sheet
				variant="outlined"
				sx={{
					display: 'flex',
					justifyContent: 'center',
					m: 5,
					p: 5,
					flexDirection: 'column',
					borderRadius: 5,
					bgcolor: 'background.body',
					color: 'text.primary',
				}}
			>
				<div>
					<Typography level="h4" component="h1">
						Welcome!
					</Typography>
					<Typography level="body-sm">Sign in to continue.</Typography>
				</div>

				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input name="email" type="email" placeholder="johndoe@email.com" />
				</FormControl>
				<FormControl>
					<FormLabel>Password</FormLabel>
					<Input name="password" type="password" placeholder="password" />
				</FormControl>
			</Sheet>
		</CssVarsProvider>
	);
}
