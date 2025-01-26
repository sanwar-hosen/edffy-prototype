import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Community from "./Pages/Community/Community";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile";

function MainRoutes() {
	const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <App user={ user } setUser={ setUser } />}>
					<Route index element={<Home />} />
					<Route path="About" element={<About />} />
					<Route path="Community" element={<Community />} />
				</Route>
				
				{/* Profile Route */ }
				<Route path="my-profile" element={ <ProfilePage user={ user } /> }>
					<Route index element={ <Profile /> } />
				</Route>

				{/* Edit Profile Route */ }
				<Route path="edit-profile" element={ <ProfilePage user={ user } /> }>
					<Route index element={ <EditProfile /> } />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainRoutes />);