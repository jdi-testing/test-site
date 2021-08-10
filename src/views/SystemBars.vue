<template>
    <v-container>
        <v-col>
            <h1>System bars</h1>
        </v-col>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                    Colored system bar
                </p>
                <ColoredSystemBar />
            </v-col>
        </v-row>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                    Lights out system bar
                </p>
                <LightsOutSystemBar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Window system bar
                </p>
                <WindowSystemBar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Absolute position system bar
                </p>
                <AbsolutePositionSystemBar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    App system bar
                </p>
                <AppSystemBar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    High system bar
                </p>
                <HighSystemBar />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ColoredSystemBar from '@/components/system_bars/ColoredSystemBar.vue';
import LightsOutSystemBar from '@/components/system_bars/LightsOutSystemBar.vue';
import AbsolutePositionSystemBar from '@/components/system_bars/AbsolutePositionSystemBar.vue';
import HighSystemBar from '@/components/system_bars/HighSystemBar.vue';
import AppSystemBar from '@/components/system_bars/AppSystemBar.vue';
import WindowSystemBar from '@/components/system_bars/WindowSystemBar.vue';

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
