<template>
    <v-container>
        <v-col>
            <h1>Chip groups</h1>
            <p class="body-1 mt-2">
                The <code>v-chip-group</code> supercharges the <code>v-chip</code> component by providing groupable 
                functionality. It is used for creating groups of selections using chips.
            </p>
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
                Mandatory chip group (center active)
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

        <v-col>
            <p class="text-h5">
                Adjustable chip group
            </p>
            <AdjustableChipGroup id="ToothbrushCardChipGroup" />
        </v-col>

    </v-container>
</template>

<script>
import ColumnChipGroup from '@/components/groups/chip_groups/ColumnChipGroup.vue';
import FilterResultsChipGroup from '@/components/groups/chip_groups/FilterResultsChipGroup.vue';
import MandatoryChipGroup from '@/components/groups/chip_groups/MandatoryChipGroup.vue';
import MultipleChipGroup from '@/components/groups/chip_groups/MultipleChipGroup.vue';
import ProductCardChipGroup from '@/components/groups/chip_groups/ProductCardChipGroup.vue';
import ToothbrushCardChipGroup from '@/components/groups/chip_groups/ToothbrushCardChipGroup.vue';
import AdjustableChipGroup from '@/components/groups/chip_groups/AdjustableChipGroup.vue';

export default {
  name: 'ChipGroups',
  components: {
    ColumnChipGroup,
    FilterResultsChipGroup,
    MandatoryChipGroup,
    MultipleChipGroup,
    ProductCardChipGroup,
    ToothbrushCardChipGroup,
    AdjustableChipGroup,
  },
};
</script>
