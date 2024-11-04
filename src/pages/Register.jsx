import React, { useState } from "react";
import axios from "axios";

export default function Register() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "", // Changed from password1 to password
		password2: "",
		role: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(null);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isLoading) {
			return;
		}

		setIsLoading(true);

		try {
			const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
			console.log("Success!", response.data);
			setSuccessMessage("Registration Successful!");
		} catch (error) {
			console.log("Error during registration!", error.response?.data);
			if (error.response && error.response.data) {
				Object.keys(error.response.data).forEach((field) => {
					const errorMessages = error.response.data[field];
					if (errorMessages && errorMessages.length > 0) {
						setError(errorMessages[0]);
					}
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
			<h2>Register:</h2>
			<form>
				<label>username:</label>
				<br />
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={handleChange}
				></input>
				<br />
				<br />
				<label>email:</label>
				<br />
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				></input>
				<br />
				<br />
				<label>password:</label> {/* Updated field name */}
				<br />
				<input
					type="password"
					name="password"
					value={formData.password} // Changed from password1 to password
					onChange={handleChange}
				></input>
				<br />
				<br />
				<label>confirm password:</label>
				<br />
				<input
					type="password"
					name="password2"
					value={formData.password2}
					onChange={handleChange}
				></input>
				<br />
				<br />
				<select name="role" value={formData.role} onChange={handleChange}>
					<option value="">Select Role</option>
					<option value="admin">Admin</option>
					<option value="user">User</option>
				</select>
				<br />
				<br />
				<button type="submit" disabled={isLoading} onClick={handleSubmit}>
					Register
				</button>
			</form>
		</div>
	);
}
