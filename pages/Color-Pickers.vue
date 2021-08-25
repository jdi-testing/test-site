<template>
    <v-container>
        <v-col>
            <h1>Color pickers</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Canvas color picker
            </p>
            <CanvasColorPicker id="CanvasColorPicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Elevation color picker
            </p>
            <ElevationColorPicker id="ElevationColorPicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Inputs color picker
            </p>
            <InputsColorPicker id="InputsColorPicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Model color picker
            </p>
            <ModelColorPicker id="ModelColorPicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Swatches color picker
            </p>
            <SwatchesColorPicker id="SwatchesColorPicker" />
        </v-col>

    </v-container>
</template>

<script>
import CanvasColorPicker from '@/components/pickers/color_pickers/CanvasColorPicker.vue';
import ElevationColorPicker from '@/components/pickers/color_pickers/ElevationColorPicker.vue';
import InputsColorPicker from '@/components/pickers/color_pickers/InputsColorPicker.vue';
import ModelColorPicker from '@/components/pickers/color_pickers/ModelColorPicker.vue';
import SwatchesColorPicker from '@/components/pickers/color_pickers/SwatchesColorPicker.vue';

export default {
  name: 'ColorPickers',
  components: {
    CanvasColorPicker,
    ElevationColorPicker,
    InputsColorPicker,
    ModelColorPicker,
    SwatchesColorPicker,
  },
};
</script>
