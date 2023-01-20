<template>
    <v-container>
        <v-col>
            <h1>Data iterators</h1>
            <p class="body-1 mt-2">
             The <code>v-data-iterator</code> component is used for displaying data, and shares a majority of its 
             functionality with the <code>v-data-table</code> component. Features include sorting, searching, pagination, and selection.
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Default
            </p>
            <DefaultTable id="DefaultTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Header and footer
            </p>
            <HeaderFooterTable id="HeaderFooterTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Filter
            </p>
            <FilterTable id="FilterTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Single Select Table Iterator
            </p>
            <SingleSelectTableIterator id="SingleSelectTableIterator" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Group Table Iterator
            </p>
            <GroupTableIterator id="GroupTableIterator" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Loading text
            </p>
            <LoadingText id="LoadingText" />
        </v-col>
        <v-col>
            <p class="text-h5">
                No Data text
            </p>
            <NoDataText id="NoDataText" />
        </v-col>
        <v-col>
            <p class="text-h5">
                No Results Text
            </p>
            <NoResultsText id="NoResultsText" />
        </v-col>

    </v-container>
</template>
<script>
import DefaultTable from '@/components/tables/data_iterators/DefaultTable.vue';
import HeaderFooterTable from '@/components/tables/data_iterators/HeaderFooterTable.vue';
import FilterTable from '@/components/tables/data_iterators/FilterTable.vue';
import SingleSelectTableIterator from '@/components/tables/data_iterators/SingleSelectTableIterator.vue';
import GroupTableIterator from '@/components/tables/data_iterators/GroupTableIterator.vue';
import LoadingText from '@/components/tables/data_iterators/LoadingText.vue';
import NoDataText from '@/components/tables/data_iterators/NoDataText.vue';
import NoResultsText from '@/components/tables/data_iterators/NoResultsText.vue';

export default {
  name: 'DataIterators',
  components: {
    DefaultTable,
    HeaderFooterTable,
    FilterTable,
    SingleSelectTableIterator,
    GroupTableIterator,
    LoadingText,
    NoDataText,
    NoResultsText,
  },
};
</script>
