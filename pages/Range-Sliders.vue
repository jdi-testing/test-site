<template>
    <v-container>
        <v-col>
            <h1>Range Sliders</h1>
            <p class="body-1 mt-2">
                The <code>v-slider</code> component is a better visualization of the number input. 
                It is used for gathering numerical user data.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled range slider
            </p>
            <DisabledRangeSlider id="DisabledRangeSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Min and max range slider
            </p>
            <MinAndMaxRangeSlider id="MinAndMaxRangeSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Step range slider
            </p>
            <StepRangeSlider id="StepRangeSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Vertical sliders range slider
            </p>
            <VerticalSlidersRangeSlider id="VerticalSlidersRangeSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Thumb label range slider
            </p>
            <ThumbLabelRangeSlider id="ThumbLabelRangeSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Append And Prepend Icons With RangeSlider
            </p>
            <AppendAndPrependIconsWithRangeSlider id="AppendAndPrependIconsWithRangeSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Color RangerSlider
            </p>
            <ColorRangerSlider id="ColorRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                RangerSlider with dark theme
            </p>
            <DarkRangerSlider id="DarkRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense Ranger Slider
            </p>
            <DenseRangerSlider id="DenseRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Errors Ranger Slider
            </p>
            <ErrorsRangerSlider id="ErrorsRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Height Ranger Slider
            </p>
            <HeightRangerSlider id="HeightRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide Details Ranger Slider
            </p>
            <HideDetailsRangerSlider id="HideDetailsRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hint Ranger Slider
            </p>
            <HintRangerSlider id="HintRangerSlider" />
        </v-col>
    </v-container>
</template>

<script>
import DisabledRangeSlider from '@/components/form_inputs/range_sliders/DisabledRangeSlider.vue';
import MinAndMaxRangeSlider from '@/components/form_inputs/range_sliders/MinAndMaxRangeSlider.vue';
import StepRangeSlider from '@/components/form_inputs/range_sliders/StepRangeSlider.vue';
import VerticalSlidersRangeSlider from '@/components/form_inputs/range_sliders/VerticalSlidersRangeSlider.vue';
import ThumbLabelRangeSlider from '@/components/form_inputs/range_sliders/ThumbLabelRangeSlider.vue';
import AppendAndPrependIconsWithRangeSlider from '@/components/form_inputs/range_sliders/AppendAndPrependIconsWithRangeSlider.vue';
import ColorRangerSlider from '@/components/form_inputs/range_sliders/ColorRangerSlider.vue';
import DarkRangerSlider from '@/components/form_inputs/range_sliders/DarkRangerSlider.vue';
import DenseRangerSlider from '@/components/form_inputs/range_sliders/DenseRangerSlider.vue';
import ErrorsRangerSlider from '@/components/form_inputs/range_sliders/ErrorsRangerSlider.vue';
import HeightRangerSlider from '@/components/form_inputs/range_sliders/HeightRangerSlider.vue';
import HideDetailsRangerSlider from '@/components/form_inputs/range_sliders/HideDetailsRangerSlider.vue';
import HintRangerSlider from '@/components/form_inputs/range_sliders/HintRangerSlider.vue';

export default {
  name: 'RangeSliders',
  components: {
    DisabledRangeSlider,
    MinAndMaxRangeSlider,
    StepRangeSlider,
    VerticalSlidersRangeSlider,
    ThumbLabelRangeSlider,
    AppendAndPrependIconsWithRangeSlider,
    ColorRangerSlider,
    DarkRangerSlider,
    DenseRangerSlider,
    ErrorsRangerSlider,
    HeightRangerSlider,
    HideDetailsRangerSlider,
    HintRangerSlider,
  },
};
</script>
