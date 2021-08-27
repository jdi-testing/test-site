<template>
    <v-container>
        <v-col>
            <h1>Item groups</h1>
            <p class="body-1 mt-2">
                The <code>v-item-group</code> provides the ability to create a group of selectable items out of any component. 
                This is the baseline functionality for components such as <code>v-tabs</code> and <code>v-carousel</code>.
            </p>
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
import ActiveClassItemGroup from '@/components/groups/item_groups/ActiveClassItemGroup.vue';
import MandatoryItemGroup from '@/components/groups/item_groups/MandatoryItemGroup.vue';
import MultipleItemGroup from '@/components/groups/item_groups/MultipleItemGroup.vue';
import ChipsItemGroup from '@/components/groups/item_groups/ChipsItemGroup.vue';
import SelectionItemGroup from '@/components/groups/item_groups/SelectionItemGroup.vue';

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
