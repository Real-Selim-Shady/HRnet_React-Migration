
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

export const selectBackgroundColorValue = (state => state?.customMoal?.backgroundColorValue);
export const selectBorderRadius = (state => state?.customMoal?.borderRadius);
export const selectBorderColor = (state => state?.customMoal?.borderColor);
export const selectClosingIconBackgroundColor = (state => state?.customMoal?.closingIconBackgroundColor);
export const selectWidth = (state => state?.customMoal?.width);
export const selectHeight = (state => state?.customMoal?.height);
export const selectIcon = (state => state?.customMoal?.icon);
export const selectTitleFontSize = (state => state?.customMoal?.titleFontSize);
export const selectTextFontSize = (state => state?.customMoal?.textFontSize);
export const selectTitlePolice = (state => state?.customMoal?.titlePolice);
export const selectTextPolice = (state => state?.customMoal?.textPolice);
export const selectTextLineHeight = (state => state?.customMoal?.textLineHeight);
export const selectTitlePosition = (state => state?.customMoal?.titlePosition);
export const selectTextPosition = (state => state?.customMoal?.textPosition);
export const selectModalPosition = (state => state?.customMoal?.modalPosition);
export const selectOverlay = (state => state?.customMoal?.overlay);
export const selectBackgroundScrollable = (state => state?.customMoal?.backgroundScrollable);
