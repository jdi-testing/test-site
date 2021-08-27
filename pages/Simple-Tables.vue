<template>
    <v-container>
        <v-col>
            <h1>Simple tables</h1>
            <p class="body-1 mt-2">
             The <code>v-simple-table</code> component is a simple wrapper component around the table element. 
             </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Dark
            </p>
            <DarkTable id="DarkTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Dense
            </p>
            <DenseTable id="DenseTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Fixed header
            </p>
            <FixedHeaderTable id="FixedHeaderTable" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Height
            </p>
            <HeightTable id="HeightTable" />
        </v-col>

    </v-container>
</template>
<script>
import DarkTable from '@/components/tables/simple_tables/DarkTable.vue';
import DenseTable from '@/components/tables/simple_tables/DenseTable.vue';
import FixedHeaderTable from '@/components/tables/simple_tables/FixedHeaderTable.vue';
import HeightTable from '@/components/tables/simple_tables/HeightTable.vue';

export default {
  name: 'SimpleTables',
  components: {
    DarkTable,
    DenseTable,
    FixedHeaderTable,
    HeightTable
  },
};
</script>
