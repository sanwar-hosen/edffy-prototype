import { useState } from "react";
import {
	Button,
	Typography,
	Input,
} from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import SearchBar from "../Searchbar/Searchbar";

const LoginPage = ({ handleGoogleLogin }) => {

	const [passwordShown, setPasswordShown] = useState(false);
	const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

	return (
		<>
			<section className="grid text-center items-center p-4">
				<div>
					<Typography
						variant="h3"
						color="blue-gray"
						className="mt-4 "
					>
						Sign In 
					</Typography>
					<p className="font-bold text-orange-600">Please only use GOOGLE for now!</p>
					<Typography className="mb-8 mt-4 text-gray-600  text-[18px]">
						Enter your email and password to sign in
					</Typography>
					
					<form
						action="#"
						className="mx-auto max-w-[24rem] text-left"
					>
						<div className="py-4 ">
							<label htmlFor="email">
								<Typography
									variant="small"
									className=" font-semibold text-gray-900"
								>
									Your Email
								</Typography>
							</label>
							<Input
								type="email"
								placeholder="Email Address"
								autoComplete="username"
								required
								className="border! border-gray-300! bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:border-gray-900! focus:border-t-gray-900! "
								labelProps={{
									className: "hidden",
								}}
								containerProps={{
									className: "min-w-[100px]",
								}}
							/>
						</div>
						<div className="">
							<label htmlFor="password">
								<Typography
									variant="small"
									className=" font-semibold text-gray-900"
								>
									Password
								</Typography>
							</label>
							<Input
								placeholder="Password"
								type={passwordShown ? "text" : "password"}
								autoComplete="current-password"
								required
								className="border! border-gray-300! bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:border-gray-900! focus:border-t-gray-900! "
								labelProps={{
									className: "hidden",
								}}
								containerProps={{
									className: "min-w-[100px]",
								}}
								icon={
									<i onClick={togglePasswordVisiblity}>
										{passwordShown ? (
											<EyeIcon className="h-5 w-5" />
										) : (
											<EyeSlashIcon className="h-5 w-5" />
										)}
									</i>
								}
							/>
						</div>
						<div className="mt-4! flex justify-end">
							<Typography
								as="a"
								href="#"
								color="blue-gray"
								variant="small"
								className="font-medium"
							>
								Forgot password
							</Typography>
						</div>
						<Button
							color="gray"
							size="lg"
							className="mt-6"
							fullWidth
						>
							sign in
						</Button>
						{/* Google login button */}
						<Button
							variant="outlined"
							size="lg"
							className="mt-6 flex h-12 items-center justify-center gap-2"
							fullWidth
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
						<Typography
							variant="small"
							color="gray"
							className="mt-4! text-center font-normal"
						>
							Not registered?{" "}
							<a href="signup" className="font-medium text-gray-900">
								Create account
							</a>
						</Typography>
					</form>
				</div>
			</section>
		</>
	);
};

export default LoginPage;
