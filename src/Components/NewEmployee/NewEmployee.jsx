import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewEmployee.css";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployeeCreation } from "../../Utils/selectors";
import { selectFirstNameCreation } from "../../Utils/selectors";
import { selectLastNameCreation } from "../../Utils/selectors";
import { selectDateOfBirthCreationC } from "../../Utils/selectors";
import { selectStartDateCreationC } from "../../Utils/selectors";
import { selectStreetCreation } from "../../Utils/selectors";
import { selectCityCreation } from "../../Utils/selectors";
import { selectStateCreation } from "../../Utils/selectors";
import { selectZipCodeCreation } from "../../Utils/selectors";
import { selectDepartmentCreation } from "../../Utils/selectors";
import { errorSubmitSaveNewAction } from "./Actions";
import { goodSubmitSaveNewAction } from "./Actions";
import { selectErrorSubmitSave } from "../../Utils/selectors";
import { onSaveEmployeeRef } from "./Actions";
import { onChangeFirstName } from "./Actions";
import { onChangeLastName } from "./Actions";
import { onChangeDateOfBirthToCalculate } from "./Actions";
import { onChangeDateOfBirthToShow } from "./Actions";
import { onChangeStartDateToCalculate } from "./Actions";
import { onChangeStartDateToShow } from "./Actions";
import { onChangeStreet } from "./Actions";
import { onChangeCity } from "./Actions";
//import { onChangeState } from "./Actions";
import { onChangeZipCode } from "./Actions";
//import { onChangeDepartment } from "./Actions";
import { updateStockedEmployees } from "./Actions";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { modalIsTrueAction } from "../Modal/Action";
import SelectMenuState from "../SelectMenuState/SelectMenuState";
import SelectMenuDepartment from "../SelectMenuDepartment/SelectMenuDepartment";

function NewEmployee(){
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(()=>{
		const sendEmployeeRef = async () => {
			const id = Math.random().toString(36).substr(2, 9);
			dispatch(onSaveEmployeeRef(id));
		};
		sendEmployeeRef();
	}, []);
	

	const employeeCreation = useSelector(selectEmployeeCreation);
	const firstName = useSelector(selectFirstNameCreation);
	const lastName = useSelector(selectLastNameCreation);
	const dateOfBirth = useSelector(selectDateOfBirthCreationC);
	const startDate = useSelector(selectStartDateCreationC);
	const street = useSelector(selectStreetCreation);
	const city = useSelector(selectCityCreation);
	const state = useSelector(selectStateCreation);
	const zipCode = useSelector(selectZipCodeCreation);
	const department = useSelector(selectDepartmentCreation);
	const errorSubmitSaveNew = useSelector(selectErrorSubmitSave);

	const onFirstNameChangeField = (event) => {
		dispatch(onChangeFirstName(event));
	};
	const onLastNameChangeField = (event) => {
		dispatch(onChangeLastName(event));
	};
	const onDateOfBirthChangeField = (date) => {
		dispatch(onChangeDateOfBirthToCalculate(date));
		const parsedDate = new Date(date);
		const formattedDate2 = parsedDate.toLocaleDateString("fr-FR", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		});
		const formattedDate = formattedDate2.toString();
		dispatch(onChangeDateOfBirthToShow(formattedDate));
	};
	const onStartDateChangeField = (date) => {
		dispatch(onChangeStartDateToCalculate(date));
		const parsedDate = new Date(date);
		const formattedDate2 = parsedDate.toLocaleDateString("fr-FR", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		});
		const formattedDate = formattedDate2.toString();
		dispatch(onChangeStartDateToShow(formattedDate));
	};
	
	const onStreetChangeField = (event) => {
		dispatch(onChangeStreet(event));
	};
	const onCityChangeField = (event) => {
		dispatch(onChangeCity(event));
	};
	/*const onStateChangeField = (event) => {
		dispatch(onChangeState(event));
	};*/
	const onZipCodeChangeField = (event) => {
		dispatch(onChangeZipCode(event));
	};
	/*const onDepartmentChangeField = (event) => {
		dispatch(onChangeDepartment(event));
	};*/

	const onSubmit = async (e) => {
		e.preventDefault();
		if (firstName == "" || 
        lastName == "" || 
        dateOfBirth == "" || 
        startDate == "" ||
        street == "" || 
        city == "" || 
        state == "" ||
        zipCode == "" || 
        department == "" 
		){
			dispatch(errorSubmitSaveNewAction());
			return false;
		}else{
			dispatch(goodSubmitSaveNewAction());
			dispatch(updateStockedEmployees(employeeCreation));
			dispatch(modalIsTrueAction());
		}
	};

	return (
		<section className="new-employee-content">
			<h1>
                HRnet
			</h1>
			<button onClick= {()=> navigate("/EmployeesList")}>
				View Current Employees
			</button>
			<h2>
                Create Employee
			</h2>
			<form onSubmit={onSubmit}>
				<div className="input-wrapper">
					<label htmlFor="firstName">First Name</label>
					<input type="text" name="firstName" id="firstName" value={firstName} onChange={onFirstNameChangeField} />
					{(firstName === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the First Name field</div>}
				</div>
				<div className="input-wrapper">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" name="lastName" id="lastName" value={lastName} onChange={onLastNameChangeField} />
					{(lastName === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Last Name field</div>}
				</div>
				<div className="input-wrapper">
					<label htmlFor="dateOfBirth">Date of Birth</label>
					<DatePicker 
						selected={dateOfBirth} 
						onChange={date => onDateOfBirthChangeField(date)}
						dateFormat="dd/MM/yyyy"
						maxDate={new Date()}
						filterDate={date => date.getDay() != 6 && date.getDay() != 0}
						showYearDropdown
						showMonthDropdown
						scrollableMonthYearDropdown
					/>
					{(dateOfBirth === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Date of Birth field</div>}
				</div>
				<div className="input-wrapper">
					<label htmlFor="startDate">Start Date</label>
					<DatePicker 
						selected={startDate} 
						onChange={date => onStartDateChangeField(date)}
						dateFormat="dd/MM/yyyy"
						maxDate={new Date()}
						filterDate={date => date.getDay() != 6 && date.getDay() != 0}
						showYearDropdown
						showMonthDropdown
						scrollableMonthYearDropdown
					/>
					{(startDate === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Start Date field</div>}
				</div>
				<div className="input-wrapper">
					<label htmlFor="street">Street</label>
					<input type="text" name="street" id="street" value={street} onChange={onStreetChangeField} />
					{(street === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Street field</div>}
				</div>
				<div className="input-wrapper">
					<label htmlFor="city">City</label>
					<input type="text" name="city" id="city" value={city} onChange={onCityChangeField} />
					{(city === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the City field</div>}
				</div>
				{/*<div className="input-wrapper">
					<label htmlFor="state">State1</label>
					<input type="text" name="state" id="state" value={state} onChange={onStateChangeField} />
					{(state === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the State field</div>}
				</div>*/}
				<div className="input-wrapper">
					<label htmlFor="state">State</label>
					<SelectMenuState />
					{(state === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the State field</div>}
				</div>
				<div className="input-wrapper">
					<label htmlFor="zipCode">Zip Code</label>
					<input type="number" name="zipCode" id="zipCode" value={zipCode} onChange={onZipCodeChangeField} />
					{(zipCode === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Zip Code field</div>}
				</div>
				{/*<div className="input-wrapper">
					<label htmlFor="department">Department</label>
					<input type="text" name="department" id="department" value={department} onChange={onDepartmentChangeField} />
					{(department === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Department field</div>}
				</div>*/}
				<div className="input-wrapper">
					<label htmlFor="department">Department</label>
					<SelectMenuDepartment />
					{(department === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Department field</div>}
				</div>
				<button>Save</button>
			</form>
			<Modal />
		</section>
	);

}

export default NewEmployee;

//faire deux save d'affilés va donner deux mêmes employeeReference,
//il faut donc sortir du component. donc je vais faire une redirection ou laisser ici en
//acceptant le défaut cité ici. mais je peux aussi tout simplement supprimer la référence
//de l'employé.