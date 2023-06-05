
export const onChangeEmail = (event) => ({type: "onChangeEmail", payload: event.target.value.toString()});
export const onChangePassword = (event) => ({type: "onChangePassword", payload: event.target.value.toString()});


export const setData = (data) => ({
	type: "SET_DATA",
	payload: data,
});

export const setRemember = () => ({type: "changeRememberStatus"});

export const errorSubmitSaveNewAction = () => ({type: "errorSubmitSaveNewAction", payload : true});
export const goodSubmitSaveNewAction = () => ({type: "goodSubmitSaveNewAction", payload : false});

export const onSaveEmployeeRef = (event) => ({type: "onSaveEmployeeRef", payload: event});
export const onChangeFirstName = (event) => ({type: "onChangeFirstName", payload: event.target.value.toString()});
export const onChangeLastName = (event) => ({type: "onChangeLastName", payload: event.target.value.toString()});
export const onChangeDateOfBirthToCalculate = (date) => ({type: "onChangeDateOfBirthToCalculate", payload: date});
export const onChangeDateOfBirthToShow = (formattedDate) => ({type: "onChangeDateOfBirthToShow", payload: formattedDate});
export const onChangeStartDateToCalculate = (date) => ({type: "onChangeStartDateToCalculate", payload: date});
export const onChangeStartDateToShow = (formattedDate) => ({type: "onChangeStartDateToShow", payload: formattedDate});
export const onChangeStreet = (event) => ({type: "onChangeStreet", payload: event.target.value.toString()});
export const onChangeCity = (event) => ({type: "onChangeCity", payload: event.target.value.toString()});
export const onChangeState = (event) => ({type: "onChangeState", payload: event.target.value.toString()});
export const onChangeZipCode = (event) => ({type: "onChangeZipCode", payload: event.target.value.toString()});
export const onChangeDepartment = (event) => ({type: "onChangeDepartment", payload: event.target.value.toString()});

export const updateStockedEmployees = (
	firstName,
	lastName,
	dateOfBirthToShow,
	startDateToShow,
	street,
	city,
	state,
	zipCode,
	department 
) => ({ type: "updateStockedEmployees", payload: {
	firstName,
	lastName,
	dateOfBirthToShow,
	startDateToShow,
	street,
	city,
	state,
	zipCode,
	department }});

