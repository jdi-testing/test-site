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
                Label ranger slider
            </p>
            <LabelRangerSlider id="LabelRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Color ranger slider
            </p>
            <ColorRangerSlider id="ColorRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Loading ranger slider
            </p>
            <LoadingRangerSlider id="LoadingRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hint ranger slider
            </p>
            <HintRangerSlider id="HintRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rule ranger slider
            </p>
            <RuleRangerSlider id="RuleRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Success ranger slider
            </p>
            <SuccessRangerSlider id="SuccessRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Errors ranger sliders
            </p>
            <ErrorsRangerSlider id="ErrorsRangerSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Adjustable ranger slider
            </p>
            <AdjustableRangerSlider id="AdjustableRangerSlider" />
        </v-col>
    </v-container>
</template>

<script>
import MinAndMaxRangeSlider from '@/components/form_inputs/range_sliders/MinAndMaxRangeSlider.vue';
import StepRangeSlider from '@/components/form_inputs/range_sliders/StepRangeSlider.vue';
import VerticalSlidersRangeSlider from '@/components/form_inputs/range_sliders/VerticalSlidersRangeSlider.vue';
import ThumbLabelRangeSlider from '@/components/form_inputs/range_sliders/ThumbLabelRangeSlider.vue';
import AppendAndPrependIconsWithRangeSlider from '@/components/form_inputs/range_sliders/AppendAndPrependIconsWithRangeSlider.vue';
import LabelRangerSlider from '@/components/form_inputs/range_sliders/LabelRangerSlider.vue';
import ColorRangerSlider from '@/components/form_inputs/range_sliders/ColorRangerSlider.vue';
import LoadingRangerSlider from '@/components/form_inputs/range_sliders/LoadingRangerSlider.vue';
import HintRangerSlider from '@/components/form_inputs/range_sliders/HintRangerSlider.vue';
import RuleRangerSlider from '@/components/form_inputs/range_sliders/RuleRangerSlider.vue';
import SuccessRangerSlider from '@/components/form_inputs/range_sliders/SuccessRangerSlider.vue';
import ErrorsRangerSlider from '@/components/form_inputs/range_sliders/ErrorsRangerSlider.vue';
import AdjustableRangerSlider from '@/components/form_inputs/range_sliders/AdjustableRangerSlider.vue';

export default {
  name: 'RangeSliders',
  components: {
    MinAndMaxRangeSlider,
    StepRangeSlider,
    VerticalSlidersRangeSlider,
    ThumbLabelRangeSlider,
    AppendAndPrependIconsWithRangeSlider,
    LabelRangerSlider,
    ColorRangerSlider,
    LoadingRangerSlider,
    HintRangerSlider,
    RuleRangerSlider,
    SuccessRangerSlider,
    ErrorsRangerSlider,
    AdjustableRangerSlider,
  },
};
</script>
