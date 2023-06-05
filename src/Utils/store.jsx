
import {createStore} from "redux";
import { produce } from "immer";

/**
 * @description Application states
 */
const initialState = {
	employeeReference: "",
	firstName: "",
	lastName:"",
	dateOfBirthToCalculate: "",
	dateOfBirthToShow: "",
	startDateToCalculate: "",
	startDateToShow: "",
	street: "",
	city: "",
	state: "",
	zipCode: "",
	department: "",
	stockedEmployees: [],
	errorSubmitSaveNew: false,
	isModalOpened: false,
	isToggleSVisible: false,
	isToggleDVisible: false,
	column: [],
	records: [],
};

/**
 * @description reducer in order to apply states changes when actions are called
 */
function reducer( state = initialState, action){
	switch(action.type){
	case "updateStockedEmployees":
		return produce(state, (draft) => {
			draft.stockedEmployees = [... state.stockedEmployees, action.payload];
		});
	case "onSaveEmployeeRef":
		return produce(state, (draft) => {
			draft.employeeReference = action.payload;
		});
	case "onChangeFirstName":
		return produce(state, (draft) => {
			draft.firstName = action.payload;
		});
	case "onChangeLastName":
		return produce(state, (draft) => {
			draft.lastName = action.payload;
		});
	case "onChangeDateOfBirthToCalculate":
		return produce(state, (draft) => {
			draft.dateOfBirthToCalculate = action.payload;
		});
	case "onChangeDateOfBirthToShow":
		return produce(state, (draft) => {
			draft.dateOfBirthToShow = action.payload;
		});
	case "onChangeStartDateToCalculate":
		return produce(state, (draft) => {
			draft.startDateToCalculate = action.payload;
		});
	case "onChangeStartDateToShow":
		return produce(state, (draft) => {
			draft.startDateToShow = action.payload;
		});
	case "onChangeStreet":
		return produce(state, (draft) => {
			draft.street = action.payload;
		});
	case "onChangeCity":
		return produce(state, (draft) => {
			draft.city = action.payload;
		});
	case "onChangeState":
		return produce(state, (draft) => {
			draft.state = action.payload;
		});
	case "onChangeZipCode":
		return produce(state, (draft) => {
			draft.zipCode = action.payload;
		});
	case "onChangeDepartment":
		return produce(state, (draft) => {
			draft.department = action.payload;
		});
	case "onChangeStockedEmployees":
		return produce(state, (draft) => {
			draft.stockedEmployees = action.payload;
		});
	case "errorSubmitSaveNewAction":
		return produce(state, (draft) => {
			draft.errorSubmitSaveNew = action.payload;
		});
	case "goodSubmitSaveNewAction":
		return produce(state, (draft) => {
			draft.errorSubmitSaveNew = action.payload;
		});
	case "modalIsTrueAction":
		return produce(state, (draft) => {
			draft.isModalOpened = action.payload;
		});
	case "modalIsFalseAction":
		return produce(state, (draft) => {
			draft.isModalOpened = action.payload;
		});
	case "onToggleSActionToTrue":
		return produce(state, (draft) => {
			draft.isToggleSVisible = action.payload;
		});
	case "onToggleSActionToFalse":
		return produce(state, (draft) => {
			draft.isToggleSVisible = action.payload;
		});
	case "onToggleDActionToTrue":
		return produce(state, (draft) => {
			draft.isToggleDVisible = action.payload;
		});
	case "onToggleDActionToFalse":
		return produce(state, (draft) => {
			draft.isToggleDVisible = action.payload;
		});
	default:
		return state;
	}
}

export const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

