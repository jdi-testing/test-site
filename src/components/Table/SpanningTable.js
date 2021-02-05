import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Table from './Table';

const headerNames = ['Sample Table', 'Column 1', 'Column 2', 'Column 3'];

function createRows(name, col1, col2, col3) {
  return { name, col1, col2, col3 };
}
const rows = (() => {
  const result = [];
  let i = 0;
  while (i < 5) {
    i += 1;
    const rand = Math.floor(Math.random() * 100);
    result.push(createRows(`Row ${i}`, rand, `value ${i}`, `value ${rand}`));
  }
  return result;
})();

const invoiceSubtotal = ((items) => {
  return items.map(({ col1 }) => col1).reduce((sum, i) => sum + i, 0);
})(rows);

const total = (
  <TableRow>
    <TableCell>Subtotal</TableCell>
    <TableCell>{invoiceSubtotal}</TableCell>
  </TableRow>
);

export default function SpanningTable() {
  return (
    <Table headerNames={headerNames} rowData={rows}>
      <TableBody>{total}</TableBody>
    </Table>
  );
}
