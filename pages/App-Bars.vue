<template>
    <v-container>
        <v-col>
            <h1>App bars</h1>
            <p class="body-1 mt-2">
                The <code>v-app-bar</code> component is pivotal to any graphical user interface (GUI),
                as it generally is the primary source of site navigation.
            </p>
        </v-col>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                  Simple bar
                </p>
                <SimpleBar id="simpleBar"/>
            </v-col>
            <v-col>
                <p class="text-h5">
                  Outlined bar
                </p>
                <OutlinedBar id="outlineBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                  Flat bar
                </p>
                <FlatBar id="flatBar"/>
            </v-col>
            <v-col>
                <p class="text-h5">
                  Rounded bar
                </p>
                <RoundedBar id="roundedBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                  Shaped bar
                </p>
                <ShapedBar id="shapedBar"/>
            </v-col>
            <v-col>
                <p class="text-h5">
                  Short bar
                </p>
                <ShortBar id="shortBar"/>
            </v-col>
        </v-row>
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
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                  Inverted Scrolling
                </p>
                <InvertedScrollingBar id="invertedScrollingBar"/>
            </v-col>
            <v-col>
                <p class="text-h5">
                  Elevated
                </p>
                <ElevatedBar id="elevatedBar"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import SimpleBar from '@/components/bars/appbars/SimpleBar.vue';
import OutlinedBar from '@/components/bars/appbars/OutlinedBar.vue';
import FlatBar from '@/components/bars/appbars/FlatBar.vue';
import RoundedBar from '@/components/bars/appbars/RoundedBar.vue';
import ShapedBar from '@/components/bars/appbars/ShapedBar.vue';
import ShortBar from '@/components/bars/appbars/ShortBar.vue';
import CollapsibleBar from '@/components/bars/appbars/CollapsibleBar.vue';
import DenseBar from '@/components/bars/appbars/DenseBar.vue';
import ElevateScrollBar from '@/components/bars/appbars/ElevateScrollBar.vue';
import FadeImageBar from '@/components/bars/appbars/FadeImageBar.vue';
import HidingScrollBar from '@/components/bars/appbars/HidingScrollBar.vue';
import ImageBar from '@/components/bars/appbars/ImageBar.vue';
import ScrollThresholdBar from '@/components/bars/appbars/ScrollThresholdBar.vue';
import ToggleNavigationDrawersBar from '@/components/bars/appbars/ToggleNavigationDrawersBar.vue';
import InvertedScrollingBar from '@/components/bars/appbars/InvertedScrollingBar.vue';
import ElevatedBar from '@/components/bars/appbars/ElevatedBar.vue';

export default {
  name: 'AppBars',
  components: {
    SimpleBar,
    OutlinedBar,
    FlatBar,
    RoundedBar,
    ShapedBar,
    ShortBar,
    CollapsibleBar,
    DenseBar,
    ElevateScrollBar,
    FadeImageBar,
    HidingScrollBar,
    ImageBar,
    ScrollThresholdBar,
    ToggleNavigationDrawersBar,
    InvertedScrollingBar,
    ElevatedBar
  },
};
</script>
