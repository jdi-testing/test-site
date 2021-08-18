<template>
    <v-container>
        <v-col>
            <h1>App bars</h1>
        </v-col>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                    Collapsible bar
                </p>
                <CollapsibleBar id="collapsibleBar"/>    
            </v-col>
            <v-col>
                <p class="text-h5">
                    Dense
                </p>
                <DenseBar id="denseBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Elevate to scroll bar
                </p>
                <ElevateScrollBar id="elevateScrollBar"/>
            </v-col>
            <v-col>
                <p class="text-h5">
                    Image bar
                </p>
                <ImageBar id="imageBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Hiding on scroll
                </p>
                <HidingScrollBar id="hidingScrollBar"/>
            </v-col>
            <v-col>
                <p class="text-h5">
                    Fade image on scroll
                </p>
                <FadeImageBar id="fadeImageBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Scroll threshold
                </p>
                <ScrollThresholdBar id="scrollThresholdBar"/>
            </v-col>
            <v-col>
                <p class="text-h5">
                    Toggle navigation drawers
                </p>
                <ToggleNavigationDrawersBar id="toggleNavigationDrawersBar"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import CollapsibleBar from '@/components/appbars/CollapsibleBar.vue';
import DenseBar from '@/components/appbars/DenseBar.vue';
import ElevateScrollBar from '@/components/appbars/ElevateScrollBar.vue';
import FadeImageBar from '@/components/appbars/FadeImageBar.vue';
import HidingScrollBar from '@/components/appbars/HidingScrollBar.vue';
import ImageBar from '@/components/appbars/ImageBar.vue';
import ScrollThresholdBar from '@/components/appbars/ScrollThresholdBar.vue';
import ToggleNavigationDrawersBar from '@/components/appbars/ToggleNavigationDrawersBar.vue';

export default {
  name: 'AppBars',
  components: {
    CollapsibleBar,
    DenseBar,
    ElevateScrollBar,
    FadeImageBar,
    HidingScrollBar,
    ImageBar,
    ScrollThresholdBar,
    ToggleNavigationDrawersBar,
  },
};
</script>
