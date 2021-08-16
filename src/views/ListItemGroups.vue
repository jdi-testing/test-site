<template>
    <v-container>
        <v-col>
            <h1>List item groups</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Active class list item group
            </p>
            <ActiveClassListItemGroup id="ActiveClassListItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Mandatory list item group
            </p>
            <MandatoryListItemGroup id="MandatoryListItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple list item group
            </p>
            <MultipleListItemGroup id="MultipleListItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Flat list list item group
            </p>
            <FlatListListItemGroup id="FlatListListItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Selection controls list item group
            </p>
            <SelectionControlsListItemGroup id="SelectionControlsListItemGroup" />
        </v-col>

    </v-container>
</template>

<script>
import ActiveClassListItemGroup from '@/components/list_item_groups/ActiveClassListItemGroup.vue';
import MandatoryListItemGroup from '@/components/list_item_groups/MandatoryListItemGroup.vue';
import MultipleListItemGroup from '@/components/list_item_groups/MultipleListItemGroup.vue';
import FlatListListItemGroup from '@/components/list_item_groups/FlatListListItemGroup.vue';
import SelectionControlsListItemGroup from '@/components/list_item_groups/SelectionControlsListItemGroup.vue';

export default {
  name: 'List item groups',
  components: {
    ActiveClassListItemGroup,
    MandatoryListItemGroup,
    MultipleListItemGroup,
    FlatListListItemGroup,
    SelectionControlsListItemGroup,
  },
};
</script>
