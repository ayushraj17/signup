import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./formik/FormikControl";
import { useHistory } from "react-router-dom";
function SignUp() {
	const history = useHistory();

	const validationSchema = Yup.object({
		name: Yup.string().required("Required"),
		email: Yup.string().required("Required"),
		selectOption: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
		phone: Yup.string().required("Required"),
	});

	const initialValues = {
		name: "",
		email: "",
		password: "",
		selectOption: "",
		phone: "",
	};

	const dropdownOptions = [
		{ key: "Select your profession", value: "" },
		{ key: "Doctor", value: "Doctor" },
		{ key: "Engineer", value: "Engineer" },
		{ key: "Banker", value: "Banker" },
	];

	const onSubmit = (values) => {
		console.log("Form data", values);
		localStorage.setItem("document", JSON.stringify(values));
		history.push("/login");
	};

	return (
		<div className="signup">
			<h1>Sign Up</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<FormikControl
							control="input"
							type="text"
							label="name"
							name="name"
						/>
						<FormikControl
							control="input"
							type="email"
							label="Email"
							name="email"
						/>

						<FormikControl
							control="input"
							type="password"
							label="Password"
							name="password"
						/>
						<FormikControl
							control="input"
							type="text"
							label="Phone number"
							name="phone"
						/>
						<FormikControl
							control="select"
							label="Profession"
							name="selectOption"
							options={dropdownOptions}
						/>
						{/* <Link to="/login"> */}
						<button type="submit" disabled={!formik.isValid}>
							Submit
						</button>
						{/* </Link> */}
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default SignUp;
