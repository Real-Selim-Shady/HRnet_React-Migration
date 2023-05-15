
let createDataStorage = () => {
	if(localStorage.getItem("dataStorage") == null){
		localStorage.setItem("dataStorage", []);}else{null;}
};

let saveNewAccount = (employeeCreation) => {
	const employee = JSON.stringify(employeeCreation);
	let dataStorage = localStorage.getItem("dataStorage");
	if (dataStorage === null || dataStorage === "") {
		dataStorage = [];
	} else {
		try {
			dataStorage = JSON.parse(dataStorage);
			if (!Array.isArray(dataStorage)) {
				dataStorage = [];
			}
		} catch (error) {
			console.error("Error parsing dataStorage from localStorage:", error);
			dataStorage = [];
		}
	}
	dataStorage.push(employee);
	localStorage.setItem("dataStorage", JSON.stringify(dataStorage));
};

export const saveSystem = {
	createDataStorage, saveNewAccount, 
};