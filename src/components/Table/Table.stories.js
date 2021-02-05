import Table from './SimpleTable';
import Pagination from './PaginationTable';
import Sorting from './SortingTable';
import Spanning from './SpanningTable';

export default {
  title: 'Material Ui/Data Display/Table',
  component: Table,
};

export const Simple = Table.bind({});

export const Dense = Table.bind({});
Dense.args = {
  size: 'small',
};

export const StickyHeader = Table.bind({});
StickyHeader.args = {
  stickyHeader: true,
  containerStyle: { maxHeight: 440 },
};

export const TableWithPagination = Pagination.bind({});

export const SortingTable = Sorting.bind({});

export const SpanningTable = Spanning.bind({});
