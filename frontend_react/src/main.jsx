import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ButtonTest from './Button.jsx';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Navbar from './Button.jsx';
import Homepage from './Homepage.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CssVarsProvider>
			{/* <ButtonTest></ButtonTest> */}
			<Homepage></Homepage>
		</CssVarsProvider>
	</StrictMode>
);
