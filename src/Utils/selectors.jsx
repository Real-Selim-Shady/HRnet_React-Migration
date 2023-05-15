
export const selectEmployeeCreation = (state => state?.employee);
export const selectEmployeeReferenceCreation = (state => state?.employee?.employeeReference);
export const selectFirstNameCreation = (state => state?.employee?.firstName);
export const selectLastNameCreation = (state => state?.employee?.lastName);
export const selectDateOfBirthCreationC = (state => state?.employee?.dateOfBirthToCalculate);
export const selectDateOfBirthCreationS = (state => state?.employee?.dateOfBirthTo);
export const selectStartDateCreationC = (state => state?.employee?.startDateToCalculate);
export const selectStartDateCreationS = (state => state?.employee?.startDateToShow);
export const selectStreetCreation = (state => state?.employee?.street);
export const selectCityCreation = (state => state?.employee?.city);
export const selectStateCreation = (state => state?.employee?.state);
export const selectZipCodeCreation = (state => state?.employee?.zipCode);
export const selectDepartmentCreation = (state => state?.employee?.department);
export const selectStockedEmployees = (state => state?.stockedEmployees);

export const selectErrorSubmitSave = (state => state?.errorSubmitSaveNew);
export const selectIsModalOpened = (state => state?.isModalOpened);

export const selectIsToggleSVisible = (state => state?.isToggleSVisible);
export const selectIsToggleDVisible = (state => state?.isToggleDVisible);


/*
export const selectAGLoader = (state) => state?.authGuardLoading;
export const selectPLoader = (state) => state?.profileLoading;
*/