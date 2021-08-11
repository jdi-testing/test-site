<template>
    <v-container>
        <v-col>
            <h1>Bottom navigation</h1>
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
