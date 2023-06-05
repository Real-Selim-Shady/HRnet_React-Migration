import { sortDateByDayMonthYear } from "./SortDate";


/**
 * @description const managing columns title name (header),
 * columns content (accessor), and special sorting for dates
 */
export const COLUMNS = [
	{
		Header: "First Name",
		accessor: "firstName",
	},
	{
		Header: "Last Name",
		accessor: "lastName",
	},
	{
		Header: "Start Date",
		accessor: "startDateToShow",
		sortType: (a, b) => sortDateByDayMonthYear(a, b, "startDateToShow"),
	},
	{
		Header: "Department",
		accessor: "department",
	},
	{
		Header: "Date of Birth",
		accessor: "dateOfBirthToShow",
		sortType: (a, b) => sortDateByDayMonthYear(a, b, "dateOfBirthToShow"),
	},
	{
		Header: "Street",
		accessor: "street",
	},
	{
		Header: "City",
		accessor: "city",
	},
	{
		Header: "State",
		accessor: "state",
	},
	{
		Header: "Zip Code",
		accessor: "zipCode",
	},
];

