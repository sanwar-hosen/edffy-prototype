// src/App.jsx
import "./App.css";
import { ComplexNavbar } from "./Components/ComplexNavbar/ComplexNavbar";
import LoginPage from "./Components/LoginPage/LoginPage"; // Default import
import { Outlet } from "react-router";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.init";

function App({ user, setUser }) {
	console.log(user);

	function handleGoogleLogin() {
		const auth = getAuth(app);
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider)
			.then((result) => {
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
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
					<ComplexNavbar user={user} handleLogout={handleLogout} />
					<Outlet context={user} />
				</>
			) : (
				<LoginPage handleGoogleLogin={handleGoogleLogin} />
			)}
		</>
	);
}

export default App;
