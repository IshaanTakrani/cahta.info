import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
// import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	return (
		<Select
			value={mode}
			onChange={(event, newMode) => {
				setMode(newMode);
			}}
			sx={{ width: 'max-content' }}
		>
			<Option value="system">System</Option>
			<Option value="light">Light</Option>
			<Option value="dark">Dark</Option>
		</Select>
	);
}

export default function App() {
	return (
		<CssVarsProvider>
			<ModeToggle />
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

				<Button sx={{ my: 3 }}>Log in</Button>
				<Typography
					endDecorator={<Link href="/sign-up">Sign up</Link>}
					fontSize="sm"
					sx={{ alignSelf: 'center' }}
				>
					Don't have an account?
				</Typography>
			</Sheet>
		</CssVarsProvider>
	);
}
