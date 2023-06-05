
/**
 * @description selectors in order to call states in components
 */
export const selectEmployeeReferenceCreation = (state => state?.employeeReference);
export const selectFirstNameCreation = (state => state?.firstName);
export const selectLastNameCreation = (state => state?.lastName);
export const selectDateOfBirthCreationC = (state => state?.dateOfBirthToCalculate);
export const selectDateOfBirthCreationS = (state => state?.dateOfBirthToShow);
export const selectStartDateCreationC = (state => state?.startDateToCalculate);
export const selectStartDateCreationS = (state => state?.startDateToShow);
export const selectStreetCreation = (state => state?.street);
export const selectCityCreation = (state => state?.city);
export const selectStateCreation = (state => state?.state);
export const selectZipCodeCreation = (state => state?.zipCode);
export const selectDepartmentCreation = (state => state?.department);
export const selectStockedEmployees = (state => state?.stockedEmployees);
export const selectErrorSubmitSave = (state => state?.errorSubmitSaveNew);
export const selectIsModalOpened = (state => state?.isModalOpened);
export const selectIsToggleSVisible = (state => state?.isToggleSVisible);
export const selectIsToggleDVisible = (state => state?.isToggleDVisible);
