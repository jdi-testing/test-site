<template>
    <v-container>
        <v-col>
            <h1>List item groups</h1>
            <p class="body-1 mt-2">
                The <code>v-list-item-group</code> provides the ability to create a group of selectable <code>v-list-items</code>. 
                The <code>v-list-item-group</code> component utilizes v-item-group at its core to provide a clean interface for interactive lists.
            </p>
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

        <v-col>
            <p class="text-h5">
                No-action list item group
            </p>
            <NoActionListItemGroup id="NoActionListItemGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                List item group with sub-group
            </p>
            <WithSubGroupListItemGroup id="WithSubGroupListItemGroup" />
        </v-col>
    </v-container>
</template>

<script>
import ActiveClassListItemGroup from '@/components/groups/list_item_groups/ActiveClassListItemGroup.vue';
import MandatoryListItemGroup from '@/components/groups/list_item_groups/MandatoryListItemGroup.vue';
import MultipleListItemGroup from '@/components/groups/list_item_groups/MultipleListItemGroup.vue';
import FlatListListItemGroup from '@/components/groups/list_item_groups/FlatListListItemGroup.vue';
import SelectionControlsListItemGroup from '@/components/groups/list_item_groups/SelectionControlsListItemGroup.vue';
import NoActionListItemGroup from '@/components/groups/list_item_groups/NoActionListItemGroup.vue';
import WithSubGroupListItemGroup from '@/components/groups/list_item_groups/WithSubGroupListItemGroup.vue';

export default {
  name: 'ListItemGroups',
  components: {
    ActiveClassListItemGroup,
    MandatoryListItemGroup,
    MultipleListItemGroup,
    FlatListListItemGroup,
    SelectionControlsListItemGroup,
    NoActionListItemGroup,
    WithSubGroupListItemGroup
  },
};
</script>
