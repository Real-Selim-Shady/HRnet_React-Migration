import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
import { COLUMNS } from "./Columns";
import { selectStockedEmployees } from "../../Utils/selectors";
import { useSelector } from "react-redux";
import "./EmployeesTable.css";


/**
 * @description function rendering Employees Table component
 */
function EmployeesTable() {

	/**
	 * @description const getting stockedEmployees state (with employees data)
	 */
	const stockedEmployees = useSelector(selectStockedEmployees);

	/**
	 * @description const using useMemo to memorize data and columns when they are changing
	 */
	const data = useMemo(() => stockedEmployees, [stockedEmployees]);
	const columns = useMemo(() => COLUMNS, [COLUMNS]);


	/**
	 * @description useTable hook is used to create table instance with 
	 * pagination, sorting and filtering features
	 */
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		state,
		setGlobalFilter,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const { globalFilter, pageIndex, pageSize } = state;


	return (
		<section>
			<input
				value={globalFilter || ""}
				onChange={e => setGlobalFilter(e.target.value)}
				placeholder='Search'
				className="search"
			/>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.getHeaderGroupProps().key}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									key={`${column.index}-${column.id}`}
									className="column-title"
								>
									{column.render("Header")}
									<span>
										{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} className={row.index % 2 === 0 ? "table-row-odd" : ""} 
								key={`${row.index}-${row.id}`}>
								{row.cells.map(cell => {
									return (
										<td {...cell.getCellProps()} key={`${row.index}-${cell.column.id}-${cell.getCellProps().key}`}>{cell.render("Cell")}</td>
									);
								})}
								

							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="pagination-and-show-setting">
				<span className="pagination-block">
					<p>Page{" "}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{" "}
					</p>
				</span>
				<span className="buttons-block">
					<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
						{"<<"}
					</button>{" "}
					<button onClick={() => previousPage()} disabled={!canPreviousPage}>
						{"<"}
					</button>{" "}
					<button onClick={() => nextPage()} disabled={!canNextPage}>
						{">"}
					</button>{" "}
					<button
						onClick={() => gotoPage(pageCount - 1)}
						disabled={!canNextPage}
					>
						{">>"}
					</button>{" "}
				</span>
				<select
					value={pageSize}
					onChange={e => setPageSize(Number(e.target.value))}
				>
					{[10, 25, 50, 100].map(pageSize => (
						<option key={pageSize} value={pageSize}>
				Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</section>
	);
}

export default EmployeesTable;