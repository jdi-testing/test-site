<template>
    <v-container>
        <v-col>
            <h1>Range Sliders</h1>
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

    </v-container>
</template>

<script>
import DisabledRangeSlider from '@/components/range_sliders/DisabledRangeSlider.vue';
import MinAndMaxRangeSlider from '@/components/range_sliders/MinAndMaxRangeSlider.vue';
import StepRangeSlider from '@/components/range_sliders/StepRangeSlider.vue';
import VerticalSlidersRangeSlider from '@/components/range_sliders/VerticalSlidersRangeSlider.vue';
import ThumbLabelRangeSlider from '@/components/range_sliders/ThumbLabelRangeSlider.vue';

export default {
  name: 'RangeSliders',
  components: {
    DisabledRangeSlider,
    MinAndMaxRangeSlider,
    StepRangeSlider,
    VerticalSlidersRangeSlider,
    ThumbLabelRangeSlider,
  },
};
</script>
