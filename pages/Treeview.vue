<template>
    <v-container>
        <v-col>
            <h1>Treeview</h1>
            <p class="body-1 mt-2">
             The <code>v-treeview</code> component is useful for displaying large amounts of nested data.
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Activatable
            </p>
            <ActivatableTreeview id="ActivatableTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Color
            </p>
            <ColorTreeview id="ColorTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Dense
            </p>
            <DenseModeTreeview id="DenseModeTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Hoverable
            </p>
            <HoverableTreeview id="HoverableTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Item disabled
            </p>
            <ItemDisabledTreeview id="ItemDisabledTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Load children
            </p>
            <LoadChildrenTreeview id="LoadChildrenTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Open all
            </p>
            <OpenAllTreeview id="OpenAllTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Rounded
            </p>
            <RoundedTreeview id="RoundedTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Selectable
            </p>
            <SelectableTreeview id="SelectableTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Selected color
            </p>
            <SelectedColorTreeview id="SelectedColorTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Selection type
            </p>
            <SelectionTypeTreeview id="SelectionTypeTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Shaped
            </p>
            <ShapedTreeview id="ShapedTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Append lable
            </p>
            <AppendLableTreeview id="AppendLableTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Search and filter
            </p>
            <SearchFilterTreeview id="SearchFilterTreeview" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Selectable icons
            </p>
            <SelectableIconsTreeview id="SelectableIconsTreeview" />
        </v-col>

    </v-container>
</template>
<script>
import ActivatableTreeview from '@/components/treeview/ActivatableTreeview.vue';
import ColorTreeview from '@/components/treeview/ColorTreeview.vue';
import DenseModeTreeview from '@/components/treeview/DenseModeTreeview.vue';
import HoverableTreeview from '@/components/treeview/HoverableTreeview.vue';
import ItemDisabledTreeview from '@/components/treeview/ItemDisabledTreeview.vue';
import LoadChildrenTreeview from '@/components/treeview/LoadChildrenTreeview.vue';
import OpenAllTreeview from '@/components/treeview/OpenAllTreeview.vue';
import RoundedTreeview from '@/components/treeview/RoundedTreeview.vue';
import SelectableTreeview from '@/components/treeview/SelectableTreeview.vue';
import SelectedColorTreeview from '@/components/treeview/SelectedColorTreeview.vue';
import SelectionTypeTreeview from '@/components/treeview/SelectionTypeTreeview.vue';
import ShapedTreeview from '@/components/treeview/ShapedTreeview.vue';
import AppendLableTreeview from '@/components/treeview/AppendLableTreeview.vue';
import SearchFilterTreeview from '@/components/treeview/SearchFilterTreeview.vue';
import SelectableIconsTreeview from '@/components/treeview/SelectableIconsTreeview.vue';

export default {
  name: 'Treeview',
  components: {
    ActivatableTreeview,
    ColorTreeview,
    DenseModeTreeview,
    HoverableTreeview,
    ItemDisabledTreeview,
    LoadChildrenTreeview,
    OpenAllTreeview,
    RoundedTreeview,
    SelectableTreeview,
    SelectedColorTreeview,
    SelectionTypeTreeview,
    ShapedTreeview,
    AppendLableTreeview,
    SearchFilterTreeview,
    SelectableIconsTreeview
  },
};
</script>
