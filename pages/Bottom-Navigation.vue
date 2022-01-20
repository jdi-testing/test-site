<template>
    <v-container>
        <v-col>
            <h1>Bottom navigation</h1>
            <p class="body-1 mt-2">
                The <code>v-bottom-navigation</code> component is an alternative to the sidebar. 
                It is primarily used for mobile applications and comes in three variants, icons and text, and shift.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Color
            </p>
            <ColorBottomNavigation id="colorBottomNavigation" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Grow
            </p>
            <GrowBottomNavigation id="growBottomNavigation" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide on scroll
            </p>
            <HideOnScrollBottomNavigation id="hideOnScrollBottomNavigation" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Horizontal
            </p>
            <HorizontalBottomNavigation id="horizontalBottomNavigation" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Scroll threshold
            </p>
            <ScrollThresholdBottomNavigation id="scrollThresholdBottomNavigation" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Shift
            </p>
            <ShiftBottomNavigation id="shiftBottomNavigation" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Toggle
            </p>
            <ToggleBottomNavigation id="toggleBottomNavigation" />
        </v-col>                
    </v-container>
</template>

<script>
import ColorBottomNavigation from '@/components/bottom_navigation/ColorBottomNavigation.vue';
import GrowBottomNavigation from '@/components/bottom_navigation/GrowBottomNavigation.vue';
import HideOnScrollBottomNavigation from '@/components/bottom_navigation/HideOnScrollBottomNavigation.vue';
import HorizontalBottomNavigation from '@/components/bottom_navigation/HorizontalBottomNavigation.vue';
import ScrollThresholdBottomNavigation from '@/components/bottom_navigation/ScrollThresholdBottomNavigation.vue';
import ShiftBottomNavigation from '@/components/bottom_navigation/ShiftBottomNavigation.vue';
import ToggleBottomNavigation from '@/components/bottom_navigation/ToggleBottomNavigation.vue';

export default {
  name: 'BottomNavigation',
  components: {
    ColorBottomNavigation,
    GrowBottomNavigation,
    HideOnScrollBottomNavigation,
    HorizontalBottomNavigation,
    ScrollThresholdBottomNavigation,
    ShiftBottomNavigation,
    ToggleBottomNavigation,
  },       
};
</script>
<style>
.v-item-group.v-bottom-navigation .v-btn.v-size--default {
    height: inherit;
    background: transparent;
}
</style>
