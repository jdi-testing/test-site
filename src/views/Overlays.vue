<template>
    <v-container>
        <v-col>
            <h1>Overlays</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Absolute overlay
            </p>
            <AbsoluteOverlay id="AbsoluteOverlay" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Opacity overlay
            </p>
            <OpacityOverlay id="OpacityOverlay" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Z Index overlay
            </p>
            <ZIndexOverlay id="ZIndexOverlay" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Advanced overlay
            </p>
            <AdvancedOverlay id="AdvancedOverlay" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Loader overlay
            </p>
            <LoaderOverlay id="LoaderOverlay" />
        </v-col>

    </v-container>
</template>

<script>
import AbsoluteOverlay from '@/components/overlays/AbsoluteOverlay.vue';
import OpacityOverlay from '@/components/overlays/OpacityOverlay.vue';
import ZIndexOverlay from '@/components/overlays/ZIndexOverlay.vue';
import AdvancedOverlay from '@/components/overlays/AdvancedOverlay.vue';
import LoaderOverlay from '@/components/overlays/LoaderOverlay.vue';

export default {
  name: 'Overlays',
  components: {
    AbsoluteOverlay,
    OpacityOverlay,
    ZIndexOverlay,
    AdvancedOverlay,
    LoaderOverlay,
  },
};
</script>
