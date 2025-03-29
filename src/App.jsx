import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import { Outlet } from "react-router";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect
} from "firebase/auth";
//the sano
import app from "./firebase/firebase.init";
import Navbar from "./Components/Navbar/Navbar";

function App({ user, setUser }) {
	function handleGoogleLogin() {
		const auth = getAuth(app);
		const provider = new GoogleAuthProvider();

		// // Check if device is mobile
		// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

			// Use redirect method for mobile
			signInWithPopup(auth, provider)
				.then((result) => {
					const credential =
						GoogleAuthProvider.credentialFromResult(result);
					const token = credential.accessToken;
					const user = result.user;
					setUser(user);
				})
				.catch((error) => {
					// Handle errors 
					const errorCode = error.code;
					const errorMessage = error.message;
					const email = error.customData?.email;
					const credential =
						GoogleAuthProvider.credentialFromError(error);
					console.log("error message: ", errorMessage);
					console.log(email, errorCode);
				});
		
	}

	// Function to handle logout
	const handleLogout = () => {
		setUser(null);
	};

	return (
		<>
			{user ? (
				<>
					<Navbar user={user} handleLogout={handleLogout} />
					<Outlet context={user} />
				</>
			) : (
				<LoginPage handleGoogleLogin={handleGoogleLogin} />
			)}
		</>
	);
}

export default App;
