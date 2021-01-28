import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function TableTemplate(props) {
  const { headerNames, rowData, containerStyle, children, ...args } = props;

  return (
    <TableContainer style={containerStyle}>
      <Table {...args}>
        <TableHead>
          <TableRow>
            {headerNames.map((headerName) => (
              <TableCell>{headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.col1}</TableCell>
              <TableCell>{row.col2}</TableCell>
              <TableCell>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {children}
      </Table>
    </TableContainer>
  );
}
