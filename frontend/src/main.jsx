import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
// import store from "./store";

import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
	RouterProvider,
} from "react-router-dom";

import { action as contactAction } from "./components/contact.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route index element={<App />} action={contactAction} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
