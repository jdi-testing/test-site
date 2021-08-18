<template>
    <v-container>
        <v-col>
            <h1>Item groups</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Active class item group
            </p>
            <ActiveClassItemGroup id="ActiveClassItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Mandatory item group
            </p>
            <MandatoryItemGroup id="MandatoryItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple item group
            </p>
            <MultipleItemGroup id="MultipleItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Chips item group
            </p>
            <ChipsItemGroup id="ChipsItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Selection item group
            </p>
            <SelectionItemGroup id="SelectionItemGroup" />
        </v-col>

    </v-container>
</template>

<script>
import ActiveClassItemGroup from '@/components/item_groups/ActiveClassItemGroup.vue';
import MandatoryItemGroup from '@/components/item_groups/MandatoryItemGroup.vue';
import MultipleItemGroup from '@/components/item_groups/MultipleItemGroup.vue';
import ChipsItemGroup from '@/components/item_groups/ChipsItemGroup.vue';
import SelectionItemGroup from '@/components/item_groups/SelectionItemGroup.vue';

export default {
  name: 'ItemGroups',
  components: {
    ActiveClassItemGroup,
    MandatoryItemGroup,
    MultipleItemGroup,
    ChipsItemGroup,
    SelectionItemGroup,
  },
};
</script>
