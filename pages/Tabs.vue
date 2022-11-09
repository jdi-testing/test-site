<template>
    <v-container>
        <v-col>
            <h1>Tabs</h1>
            <p class="body-1 mt-2">
             The <code>v-tabs</code> component is used for hiding content behind a selectable item. 
             This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Align with title
            </p>
            <AlignTitleTabs id="AlignTitleTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Center active
            </p>
            <CenterActiveTabs id="CenterActiveTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Custom icons
            </p>
            <CustomIconsTabs id="CustomIconsTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Fixed
            </p>
            <FixedTabs id="FixedTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Grow
            </p>
            <GrowTabs id="GrowTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Icons and text
            </p>
            <IconsTextTabs id="IconsTextTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Pagination
            </p>
            <PaginationTabs id="PaginationTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Right
            </p>
            <RightTabs id="RightTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Vertical
            </p>
            <VerticalTabs id="VerticalTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Content
            </p>
            <ContentTabs id="ContentTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Desktop
            </p>
            <DesktopTabs id="DesktopTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Dynamic height
            </p>
            <DynamicHeightTabs id="DynamicHeightTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Dynamic
            </p>
            <DynamicTabs id="DynamicTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Overflow to menu
            </p>
            <OverflowMenuTabs id="OverflowMenuTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Tab Items
            </p>
            <TabItemsTabs id="TabItemsTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Hide slider tabs
            </p>
            <HideSliderTabs id="HideSliderTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Optional tabs
            </p>
            <OptionalTabs id="OptionalTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Disabled tabs
            </p>
            <DisabledTabs id="DisabledTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Tabs with href's
            </p>
            <HrefTabs id="HrefTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Show arrows on hover tabs
            </p>
            <ArrowsOnHoverTabs id="ArrowsOnHoverTabs" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Disabled item tabs
            </p>
            <DisabledItemTabs id="DisabledItemTabs" />
        </v-col>

    </v-container>
</template>
<script>
import AlignTitleTabs from '@/components/tabs/AlignTitleTabs.vue';
import CenterActiveTabs from '@/components/tabs/CenterActiveTabs.vue';
import CustomIconsTabs from '@/components/tabs/CustomIconsTabs.vue';
import FixedTabs from '@/components/tabs/FixedTabs.vue';
import GrowTabs from '@/components/tabs/GrowTabs.vue';
import IconsTextTabs from '@/components/tabs/IconsTextTabs.vue';
import PaginationTabs from '@/components/tabs/PaginationTabs.vue';
import RightTabs from '@/components/tabs/RightTabs.vue';
import VerticalTabs from '@/components/tabs/VerticalTabs.vue';
import ContentTabs from '@/components/tabs/ContentTabs.vue';
import DesktopTabs from '@/components/tabs/DesktopTabs.vue';
import DynamicHeightTabs from '@/components/tabs/DynamicHeightTabs.vue';
import DynamicTabs from '@/components/tabs/DynamicTabs.vue';
import OverflowMenuTabs from '@/components/tabs/OverflowMenuTabs.vue';
import TabItemsTabs from '@/components/tabs/TabItemsTabs.vue';
import HideSliderTabs from '@/components/tabs/HideSliderTabs.vue';
import OptionalTabs from '@/components/tabs/OptionalTabs.vue';
import DisabledTabs from '@/components/tabs/DisabledTabs.vue';
import HrefTabs from '@/components/tabs/HrefTabs.vue';
import ArrowsOnHoverTabs from '@/components/tabs/ArrowsOnHoverTabs.vue';
import DisabledItemTabs from '@/components/tabs/DisabledItemTabs.vue';

export default {
  name: 'Tabs',
  components: {
    AlignTitleTabs,
    CenterActiveTabs,
    CustomIconsTabs,
    FixedTabs,
    GrowTabs,
    IconsTextTabs,
    PaginationTabs,
    RightTabs,
    VerticalTabs,
    ContentTabs,
    DesktopTabs,
    DynamicHeightTabs,
    DynamicTabs,
    OverflowMenuTabs,
    TabItemsTabs,
    HideSliderTabs,
    OptionalTabs,
    DisabledTabs,
    HrefTabs,
    ArrowsOnHoverTabs,
    DisabledItemTabs,
  },
};
</script>
