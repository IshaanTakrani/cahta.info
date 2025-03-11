import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ButtonTest from './Button.jsx';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Navbar from './Button.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CssVarsProvider>
			<ButtonTest></ButtonTest>
		</CssVarsProvider>
	</StrictMode>
);
