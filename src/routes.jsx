import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import "./index.css";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
// import Community from "./Pages/Community/Community";
// import ProfilePage from "./Pages/ProfilePage/ProfilePage";
// import Profile from "./Pages/Profile/Profile";
// import EditProfile from "./Pages/Profile/EditProfile";
// import SignUp from "./Components/SignUp/SignUp";
import customTheme from "./Theme/CustomTheme";
import { ThemeProvider } from "flowbite-react";

function MainRoutes() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true); // Sanwar Hosen

	// Use useEffect to persist user state across sessions
	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false); // Set loading to false after checking localStorage
	}, []);

	// Update localStorage when user state changes
	useEffect(() => {
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			localStorage.removeItem("user");
		}
	}, [user]);

	const PrivateRoute = ({ children }) => {
		return user ? children : <Navigate to="/" />;
	};

	if (loading) {
		// You can render a loading spinner or a blank screen here
		return (
			<div className="w-full h-screen flex justify-center center items-center">
				<div className="loader"></div>;
			</div>
		);
	}

	return (
		<BrowserRouter>
		<ThemeProvider theme={customTheme}>
				<Routes>
					<Route
						path="/"
						element={<App user={user} setUser={setUser} />}
					>
						{/* <Route
						index
						element={user ? <Home /> : <Navigate to="/" replace />}
					/>
					<Route
						path="About"
						element={
							<PrivateRoute>
								<About />
							</PrivateRoute>
						}
					/>
					<Route
						path="Community"
						element={
							<PrivateRoute>
								<Community />
							</PrivateRoute>
						}
					/> */}
					</Route>

					{/* Profile Route */}
					{/* <Route
					path="my-profile"
					element={<ProfilePage user={user} setUser={setUser} />}
				>
					<Route
						index
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					/> */}

					{/* Edit Profile Route */}
					{/* <Route
						path="edit"
						element={
							<PrivateRoute>
								<EditProfile />
							</PrivateRoute>
						}
					/>
				</Route> */}

					{/* SignUp Route */}
					{/* <Route
					path="signup"
					element={!user ? <SignUp /> : <Navigate to="/" replace />}
				/> */}
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainRoutes />);
