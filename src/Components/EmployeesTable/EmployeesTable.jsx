import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { COLUMNS } from "./Columns";
import { selectStockedEmployees } from "../../Utils/selectors";
import { useSelector } from "react-redux";

function EmployeesTable() {

	const stockedEmployees = useSelector(selectStockedEmployees);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => stockedEmployees, [stockedEmployees]);

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
		prepareRow
	} = useTable(
		{
			columns,
			data
		},
		useGlobalFilter,
		usePagination
	);

	const { globalFilter, pageIndex, pageSize } = state;

	return (
		<>
			<input
				value={globalFilter || ""}
				onChange={e => setGlobalFilter(e.target.value)}
				placeholder='Search'
			/>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()} key={column.id}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} key={row.id}>
								{row.cells.map(cell => {
									return (
										<td {...cell.getCellProps()} key={cell.column.id}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div>
				<span>
          Page{" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{" "}
				</span>
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
				<select
					value={pageSize}
					onChange={e => setPageSize(Number(e.target.value))}
				>
					{[10, 25, 50].map(pageSize => (
						<option key={pageSize} value={pageSize}>
              Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</>);
}

export default EmployeesTable;