
/**
 * @description function managing date sorting, as 
 * it's, at first, a french format date string
 */
export const sortDateByDayMonthYear = (rowA, rowB, columnId) => {
	const dateA = new Date(rowA.values[columnId].split("/").reverse().join("/"));
	const dateB = new Date(rowB.values[columnId].split("/").reverse().join("/"));
  
	if (dateA < dateB) {
		return -1;
	}
	if (dateA > dateB) {
		return 1;
	}
	return 0;
};