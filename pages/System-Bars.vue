<template>
    <v-container>
        <v-col>
            <h1>System bars</h1>
            <p class="body-1 mt-2">
                The <code>v-system-bar</code> component can be used for displaying statuses to the user. 
                It looks like the Android system bar and can contain icons, spacers, and some text.
            </p>
        </v-col>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                    Colored system bar
                </p>
                <ColoredSystemBar id="ColoredSystemBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                    Lights out system bar
                </p>
                <LightsOutSystemBar id="LightsOutSystemBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Window system bar
                </p>
                <WindowSystemBar id="WindowSystemBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Absolute position system bar
                </p>
                <AbsolutePositionSystemBar id="AbsolutePositionSystemBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    App system bar
                </p>
                <AppSystemBar id="AppSystemBar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    High system bar
                </p>
                <HighSystemBar id="HighSystemBar"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ColoredSystemBar from '@/components/bars/system_bars/ColoredSystemBar.vue';
import LightsOutSystemBar from '@/components/bars/system_bars/LightsOutSystemBar.vue';
import AbsolutePositionSystemBar from '@/components/bars/system_bars/AbsolutePositionSystemBar.vue';
import HighSystemBar from '@/components/bars/system_bars/HighSystemBar.vue';
import AppSystemBar from '@/components/bars/system_bars/AppSystemBar.vue';
import WindowSystemBar from '@/components/bars/system_bars/WindowSystemBar.vue';

export default {
  name: 'SystemBars',
  components: {
    ColoredSystemBar,
    LightsOutSystemBar,
    AbsolutePositionSystemBar,
    HighSystemBar,
    AppSystemBar,
    WindowSystemBar,
  },
};
</script>
