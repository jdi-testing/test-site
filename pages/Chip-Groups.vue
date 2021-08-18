<template>
    <v-container>
        <v-col>
            <h1>Chip groups</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Column chip group
            </p>
            <ColumnChipGroup id="ColumnChipGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Filter results chip group
            </p>
            <FilterResultsChipGroup id="FilterResultsChipGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Mandatory chip group
            </p>
            <MandatoryChipGroup id="MandatoryChipGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple chip group
            </p>
            <MultipleChipGroup id="MultipleChipGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Product card chip group
            </p>
            <ProductCardChipGroup id="ProductCardChipGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Toothbrush card chip group
            </p>
            <ToothbrushCardChipGroup id="ToothbrushCardChipGroup" />
        </v-col>

    </v-container>
</template>

<script>
import ColumnChipGroup from '@/components/chip_groups/ColumnChipGroup.vue';
import FilterResultsChipGroup from '@/components/chip_groups/FilterResultsChipGroup.vue';
import MandatoryChipGroup from '@/components/chip_groups/MandatoryChipGroup.vue';
import MultipleChipGroup from '@/components/chip_groups/MultipleChipGroup.vue';
import ProductCardChipGroup from '@/components/chip_groups/ProductCardChipGroup.vue';
import ToothbrushCardChipGroup from '@/components/chip_groups/ToothbrushCardChipGroup.vue';

export default {
  name: 'ChipGroups',
  components: {
    ColumnChipGroup,
    FilterResultsChipGroup,
    MandatoryChipGroup,
    MultipleChipGroup,
    ProductCardChipGroup,
    ToothbrushCardChipGroup,
  },
};
</script>
