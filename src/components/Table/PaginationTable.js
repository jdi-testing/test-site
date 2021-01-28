import React from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import Table from './Table';

const headerNames = ['Sample Table', 'Column 1', 'Column 2', 'Column 3'];

function createRows(name, col1, col2, col3) {
  return { name, col1, col2, col3 };
}

const rows = (() => {
  const result = [];
  let i = 0;
  while (i < 50) {
    i += 1;
    const rand = Math.floor(Math.random() * 100);
    result.push(createRows(`Row ${i}`, rand, `value ${i}`, `value ${rand}`));
  }
  return result;
})();

export default function SimpleTable(args) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const footer = (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: rows.length }]}
          colSpan={3}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableRow>
    </TableFooter>
  );

  const slicedRows =
    rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows;

  return (
    <Table headerNames={headerNames} rowData={slicedRows} {...args}>
      {footer}
    </Table>
  );
}
