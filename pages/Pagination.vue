<template>
    <v-container>
        <v-col>
            <h1>Pagination</h1>
            <p class="body-1 mt-2">
            The <code>v-pagination</code> component is used to separate long sets of data so that it is easier for a user 
            to consume information. Depending on the length provided, the pagination component will automatically scale. 
            To maintain the current page, simply supply a v-model attribute.            
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Circle
            </p>
            <CirclePagination id="CirclePagination" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Disabled
            </p>
            <DisabledPagination id="DisabledPagination" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Icons
            </p>
            <IconsPagination id="IconsPagination" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Length
            </p>
            <LengthPagination id="LengthPagination" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Total visible
            </p>
            <TotalVisiblePagination id="TotalVisiblePagination" />
        </v-col>

    </v-container>
</template>
<script>
import CirclePagination from '@/components/pagination/CirclePagination.vue';
import DisabledPagination from '@/components/pagination/DisabledPagination.vue';
import IconsPagination from '@/components/pagination/IconsPagination.vue';
import LengthPagination from '@/components/pagination/LengthPagination.vue';
import TotalVisiblePagination from '@/components/pagination/TotalVisiblePagination.vue';

export default {
  name: 'Pagination',
  components: {
    CirclePagination,
    DisabledPagination,
    IconsPagination,
    LengthPagination,
    TotalVisiblePagination
  },
};
</script>
