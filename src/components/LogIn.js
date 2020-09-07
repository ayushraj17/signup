import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./formik/FormikControl";
import { useHistory } from "react-router-dom";

function LogIn() {
	const history = useHistory();
	const [formData, setFormData] = React.useState({});
	React.useEffect(() => {
		let documentData = JSON.parse(localStorage.getItem("document"));
		if (documentData) {
			setFormData(documentData);
		}
		// return null;
	}, []);

	const validationSchema = Yup.object({
		name: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
	});
	const initialValues = {
		name: "",
		password: "",
	};

	const onSubmit = (values) => {
		// console.log("Form data", values);
		if (!(values.name === formData.name)) {
			alert("invalid credentials");
		} else if (!(values.password === formData.password)) {
			alert("invalid credentials");
		} else {
			history.push("/movies");
		}
	};

	return (
		<div>
			<h1>Log in</h1>
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
							type="password"
							label="Password"
							name="password"
						/>
						<button type="submit" disabled={!formik.isValid}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default LogIn;
