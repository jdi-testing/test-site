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

    </v-container>
</template>
<script>
import DefaultTable from '@/components/tables/data_iterators/DefaultTable.vue';
import HeaderFooterTable from '@/components/tables/data_iterators/HeaderFooterTable.vue';
import FilterTable from '@/components/tables/data_iterators/FilterTable.vue';

export default {
  name: 'DataIterators',
  components: {
    DefaultTable,
    HeaderFooterTable,
    FilterTable
  },
};
</script>
