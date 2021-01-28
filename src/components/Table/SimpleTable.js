import React from 'react';

import Table from './Table';

const headerNames = ['Sample Table', 'Column 1', 'Column 2', 'Column 3'];

function createRows(name, col1, col2, col3) {
  return { name, col1, col2, col3 };
}
const rows = (() => {
  const result = [];
  let i = 0;
  while (i < 10) {
    i += 1;
    const rand = Math.floor(Math.random() * 100);
    result.push(createRows(`Row ${i}`, rand, `value ${i}`, `value ${rand}`));
  }
  return result;
})();

export default function SimpleTable(args) {
  return <Table headerNames={headerNames} rowData={rows} {...args} />;
}
