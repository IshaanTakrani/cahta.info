<<<<<<< HEAD:frontend_react/src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Navbar from "./Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar></Navbar>
  </StrictMode>
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Counter from './Counter.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Counter></Counter>
	</StrictMode>
>>>>>>> refs/remotes/origin/main:frontend/src/main.jsx
);
