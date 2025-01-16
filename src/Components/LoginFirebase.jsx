import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

function Login() {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	function handleGoogleLogin() {
		// const [userInfo, setuserInfo] = useState(null);
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				// console.log(user);
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
	handleGoogleLogin();
	// return userInfo;
};

export default Login;
