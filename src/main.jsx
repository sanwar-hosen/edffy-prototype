import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Community from "./Pages/Community/Community";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="/About" element={<About />} />
        <Route path="/Community" element={<Community />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
