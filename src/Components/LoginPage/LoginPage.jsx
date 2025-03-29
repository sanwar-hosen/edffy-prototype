import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const LoginPage = ({ handleGoogleLogin }) => {
	const [passwordShown, setPasswordShown] = useState(false);
	const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);
	return (
		<>
			<section className="flex text-center w-screen justify-center items-center h-screen  ">
				<div className="min-w-[24rem]">
					<h3 className="text-2xl font-bold mt-4">
						Sign In
					</h3>
					{/* <p className="font-bold text-primary">
						Please only use GOOGLE for now!
					</p> */}
					<p className="mb-4 mt-4 text-gray-600 text-lg">
						Enter your email and password to sign in
					</p>
					<form className=" max-w-[24rem] text-left">
						<div className="py-4">
							<div className="mb-2 block">
								<Label
								color=""
									htmlFor="email"
									className=""
								>Your Email</Label>
							</div>
							<TextInput
								color="gray"
								id="email"
								type="email"
								placeholder="Email Address"
								required
								autoComplete="username"
								className="bg-white border-gray-300 focus:border-gray-900"
							/>
						</div>

						<div>
							<div className="mb-2 block">
								<Label color=""
									htmlFor="password"
								>Password</Label>
							</div>
							<div className="relative">
								<TextInput
									id="password"
									type={passwordShown ? "text" : "password"}
									placeholder="Password"
									required
									autoComplete="current-password"
									className="bg-white border-gray-300 focus:border-gray-900"
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 flex items-center pr-3"
									onClick={togglePasswordVisibility}
								>
									{passwordShown ? (
										<EyeIcon className="h-5 w-5 text-gray-500" />
									) : (
										<EyeSlashIcon className="h-5 w-5 text-gray-500" />
									)}
								</button>
							</div>
						</div>

						<div className="mt-4 flex justify-end">
							<a
								href="#"
								className="font-medium text-gray hover:underline"
							>
								Forgot password
							</a>
						</div>

						<Button className="mt-4 w-full" color="primary">
							Sign In
						</Button>
						
						{/* Google login button */}
						<Button
							color="outline"
						
							className="mt-4 w-full "
							onClick={() => handleGoogleLogin()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="20"
								height="20"
								viewBox="0 0 50 50"
							>
								<path
									fill="#FFC107"
									d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
								></path>
								<path
									fill="#FF3D00"
									d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
								></path>
								<path
									fill="#4CAF50"
									d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
								></path>
								<path
									fill="#1976D2"
									d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
								></path>
							</svg>
							Continue with google
						</Button>

						<p className="mt-4 text-center font-normal text-gray">
							Not registered?{" "}
							<a
								href="signup"
								className="font-medium text-primary hover:underline"
							>
								Create account
							</a>
						</p>
					</form>
				</div>
			</section>
		</>
	);
};

export default LoginPage;
