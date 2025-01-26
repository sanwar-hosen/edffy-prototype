import "./App.css";
import { ComplexNavbar } from "./Components/ComplexNavbar/ComplexNavbar";
import { Outlet } from "react-router";
import { UserProvider } from "./Context/UserContext";
import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.init";

function App({user, setUser}) {

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
	return (
		<>
			<UserProvider>
				<ComplexNavbar
					handleGoogleLogin={handleGoogleLogin} user={user}
				></ComplexNavbar>
				<Outlet context={user} />
			</UserProvider>
		</>
	);
}

export default App;
