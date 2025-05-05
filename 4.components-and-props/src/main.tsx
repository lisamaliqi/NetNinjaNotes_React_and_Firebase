import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'

createRoot(document.getElementById("root")!).render( //get the root id in html and access it 
	<StrictMode>
		<App />
	</StrictMode>
);