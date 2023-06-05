import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewEmployee.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDateOfBirthCreationS, selectFirstNameCreation, selectStartDateCreationS } from "../../Utils/selectors";
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
import { onChangeZipCode } from "./Actions";
import { updateStockedEmployees } from "./Actions";
import { useNavigate } from "react-router-dom";
import SelectMenuState from "../SelectMenuState/SelectMenuState";
import SelectMenuDepartment from "../SelectMenuDepartment/SelectMenuDepartment";
import { useState } from "react";
//import Modal from "../Modal/index";
import Modal from "custom-modal_opc_sb_v1";


/**
 * @description function rendering New-Employee component
 */
function NewEmployee(){

	/**
	 * @description const for using hooks
	 */
	const dispatch = useDispatch();
	const navigate = useNavigate();

	/**
	 * @description useEffet in order to add an employee reference at the load of the page
	 */
	useEffect(()=>{
		const sendEmployeeRef = async () => {
			const id = Math.random().toString(36).substr(2, 9);
			dispatch(onSaveEmployeeRef(id));
		};
		sendEmployeeRef();
	}, []);
	
	/**
	 * @description const in order to get states
	 */
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
	const startDateToShow = useSelector(selectStartDateCreationS);
	const dateOfBirthToShow = useSelector(selectDateOfBirthCreationS); 

	/**
	 * @description actions in order to change states values
	 */
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
	const onZipCodeChangeField = (event) => {
		dispatch(onChangeZipCode(event));
	};
	const sendEmployeeRef = async () => {
		const id = Math.random().toString(36).substr(2, 9);
		dispatch(onSaveEmployeeRef(id));
	};

	/**
	 * @description set the modal closing
	 */
	/*add these state and setter, 
	then, add the setter condition turning to "true" as string when you want to activate the modal*/
	const [openedModal, setOpenedModal] = useState("false");
	const closeModal = () => {
		setOpenedModal("false");
	};


	/**
	 * @description function which saves data in stockedEmployees
	 * and check if data are savable. The function also open the modal.
	 */
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
			sendEmployeeRef();
			dispatch(goodSubmitSaveNewAction());
			dispatch(updateStockedEmployees(
				firstName,
				lastName,
				dateOfBirthToShow,
				startDateToShow,
				street,
				city,
				state,
				zipCode,
				department 
			));
			setOpenedModal("true");
		}
	};

	return (
		<div className="new-employee-page">
			<section className="new-employee-content">
				<div className="header">
					<h1 className="title">
						HRnet
					</h1>
					<button onClick= {()=> navigate("/EmployeesList")}>
						View Current Employees
					</button>
					<h2 className="title">
						Create Employee
					</h2>
				</div>
				<form onSubmit={onSubmit} className="form">
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
							scrollableMonthYearDropdown
							name="dateOfBirth"
							id="dateOfBirth"
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
							scrollableMonthYearDropdown
							name="startDate"
							id="startDate"
						/>
						{(startDate === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Start Date field</div>}
					</div>
					<span className="address">
						<p>Address</p>
						<div className="input-wrapper address-type">
							<label htmlFor="street">Street</label>
							<input type="text" name="street" id="street" value={street} onChange={onStreetChangeField} />
							{(street === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Street field</div>}
						</div>
						<div className="input-wrapper address-type">
							<label htmlFor="city">City</label>
							<input type="text" name="city" id="city" value={city} onChange={onCityChangeField} />
							{(city === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the City field</div>}
						</div>
						<div className="input-wrapper address-type">
							<label htmlFor="state">State</label>
							<SelectMenuState />
							{(state === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the State field</div>}
						</div>
						<div className="input-wrapper address-type">
							<label htmlFor="zipCode">Zip Code</label>
							<input type="number" name="zipCode" id="zipCode" value={zipCode} onChange={onZipCodeChangeField} />
							{(zipCode === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Zip Code field</div>}
						</div>
					</span>
					<div className="input-wrapper department">
						<label htmlFor="department">Department</label>
						<SelectMenuDepartment />
						{(department === "" && errorSubmitSaveNew === true) && <div className="empty-field-message">Please fill the Department field</div>}
					</div>
					<button className="save-button">Save</button>
				</form>
				{//add this content to add the modal
					(openedModal === "true") && <Modal 
						backgroundColor="" borderRadius="" borderColor="" closingIconBackgroundColor="" 
						width="" height=""
						fontAwesomeIconClass=""  fontAwesomeClosingIconClass="fa-solid fa-xmark"
						customImgSrc="" customImgClass="" customImgAlt="" 
						titleFontSize="" textFontSize="" 
						titleFont="" textFont="" 
						textLineHeight=""
						titleContent="titre"
						textContent="blabla"
						titlePosition="" textPosition="" 
						overlay="" 
						modalHorizontalPosition=""
						topSpace = "40%"
						timer = ""
						addBoxShadow = "yes"
						openedModalProp = {openedModal}
						onCloseModal= {closeModal}
					/>}
			</section>
		</div>
	);

}

export default NewEmployee;
