<template>
    <v-container>
        <v-col>
            <h1>Data tables</h1>
            <p class="body-1 mt-2">
             The <code>v-data-table</code> component is used for displaying tabular data. 
             Features include sorting, searching, pagination, content-editing, and row selection.
             </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Custom filter
            </p>
            <CustomFilterTable id="CustomFilterTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Dense
            </p>
            <DenseTable id="DenseTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Filterable
            </p>
            <FilterableTable id="FilterableTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Footer props
            </p>
            <FooterPropsTable id="FooterPropsTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Grouping
            </p>
            <GroupingTable id="GroupingTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Hide default header and footer
            </p>
            <HideHeaderFooterTable id="HideHeaderFooterTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Loading
            </p>
            <LoadingTable id="LoadingTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Multi sort
            </p>
            <MultiSortTable id="MultiSortTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Row selection
            </p>
            <RowSelectionTable id="RowSelectionTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Search
            </p>
            <SearchTable id="SearchTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Slots
            </p>
            <SlotsTable id="SlotsTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Header
            </p>
            <HeaderTable id="HeaderTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Item
            </p>
            <ItemTable id="ItemTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Simple checkbox
            </p>
            <SimpleCheckboxTable id="SimpleCheckboxTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                CRUD Actions
            </p>
            <CRUDActionsTable id="CRUDActionsTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Edit dialog
            </p>
            <EditDialogTable id="EditDialogTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Expandable rows
            </p>
            <ExpandableRowsTable id="ExpandableRowsTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                External pagination
            </p>
            <ExternalPaginationTable id="ExternalPaginationTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                External sorting
            </p>
            <ExternalSortingTable id="ExternalSortingTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Server-side paginate and sort
            </p>
            <ServerSideTable id="ServerSideTable" />
        </v-col>

    </v-container>
</template>
<script>
import CustomFilterTable from '@/components/tables/data_tables/CustomFilterTable.vue';
import DenseTable from '@/components/tables/data_tables/DenseTable.vue';
import FilterableTable from '@/components/tables/data_tables/FilterableTable.vue';
import FooterPropsTable from '@/components/tables/data_tables/FooterPropsTable.vue';
import GroupingTable from '@/components/tables/data_tables/GroupingTable.vue';
import HideHeaderFooterTable from '@/components/tables/data_tables/HideHeaderFooterTable.vue';
import LoadingTable from '@/components/tables/data_tables/LoadingTable.vue';
import MultiSortTable from '@/components/tables/data_tables/MultiSortTable.vue';
import RowSelectionTable from '@/components/tables/data_tables/RowSelectionTable.vue';
import SearchTable from '@/components/tables/data_tables/SearchTable.vue';
import SlotsTable from '@/components/tables/data_tables/SlotsTable.vue';
import HeaderTable from '@/components/tables/data_tables/HeaderTable.vue';
import ItemTable from '@/components/tables/data_tables/ItemTable.vue';
import SimpleCheckboxTable from '@/components/tables/data_tables/SimpleCheckboxTable.vue';
import CRUDActionsTable from '@/components/tables/data_tables/CRUDActionsTable.vue';
import EditDialogTable from '@/components/tables/data_tables/EditDialogTable.vue';
import ExpandableRowsTable from '@/components/tables/data_tables/ExpandableRowsTable.vue';
import ExternalPaginationTable from '@/components/tables/data_tables/ExternalPaginationTable.vue';
import ExternalSortingTable from '@/components/tables/data_tables/ExternalSortingTable.vue';
import ServerSideTable from '@/components/tables/data_tables/ServerSideTable.vue';

export default {
  name: 'DataTables',
  components: {
    CustomFilterTable,
    DenseTable,
    FilterableTable,
    FooterPropsTable,
    GroupingTable,
    HideHeaderFooterTable,
    LoadingTable,
    MultiSortTable,
    RowSelectionTable,
    SearchTable,
    SlotsTable,
    HeaderTable,
    ItemTable,
    SimpleCheckboxTable,
    CRUDActionsTable,
    EditDialogTable,
    ExpandableRowsTable,
    ExternalPaginationTable,
    ExternalSortingTable,
    ServerSideTable
  },
};
</script>
