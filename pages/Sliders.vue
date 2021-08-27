<template>
    <v-container>
        <v-col>
            <h1>Sliders</h1>
            <p class="body-1 mt-2">
                The <code>v-slider</code> component is a better visualization of the number input. 
                It is used for gathering numerical user data.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Colors slider
            </p>
            <ColorsSlider id="ColorsSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled slider
            </p>
            <DisabledSlider id="DisabledSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Discrete slider
            </p>
            <DiscreteSlider id="DiscreteSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icons slider
            </p>
            <IconsSlider id="IconsSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Inverse label slider
            </p>
            <InverseLabelSlider id="InverseLabelSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Min and max slider
            </p>
            <MinAndMaxSlider id="MinAndMaxSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Readonly slider
            </p>
            <ReadonlySlider id="ReadonlySlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Step slider
            </p>
            <StepSlider id="StepSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Thumb slider
            </p>
            <ThumbSlider id="ThumbSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Ticks slider
            </p>
            <TicksSlider id="TicksSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Validation slider
            </p>
            <ValidationSlider id="ValidationSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Vertical sliders slider
            </p>
            <VerticalSlidersSlider id="VerticalSlidersSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Append and prepend slider
            </p>
            <AppendAndPrependSlider id="AppendAndPrependSlider" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Append text field slider
            </p>
            <AppendTextFieldSlider id="AppendTextFieldSlider" />
        </v-col>

    </v-container>
</template>

<script>
import ColorsSlider from '@/components/form_inputs/sliders/ColorsSlider.vue';
import DisabledSlider from '@/components/form_inputs/sliders/DisabledSlider.vue';
import DiscreteSlider from '@/components/form_inputs/sliders/DiscreteSlider.vue';
import IconsSlider from '@/components/form_inputs/sliders/IconsSlider.vue';
import InverseLabelSlider from '@/components/form_inputs/sliders/InverseLabelSlider.vue';
import MinAndMaxSlider from '@/components/form_inputs/sliders/MinAndMaxSlider.vue';
import ReadonlySlider from '@/components/form_inputs/sliders/ReadonlySlider.vue';
import StepSlider from '@/components/form_inputs/sliders/StepSlider.vue';
import ThumbSlider from '@/components/form_inputs/sliders/ThumbSlider.vue';
import TicksSlider from '@/components/form_inputs/sliders/TicksSlider.vue';
import ValidationSlider from '@/components/form_inputs/sliders/ValidationSlider.vue';
import VerticalSlidersSlider from '@/components/form_inputs/sliders/VerticalSlidersSlider.vue';
import AppendAndPrependSlider from '@/components/form_inputs/sliders/AppendAndPrependSlider.vue';
import AppendTextFieldSlider from '@/components/form_inputs/sliders/AppendTextFieldSlider.vue';

export default {
  name: 'Sliders',
  components: {
    ColorsSlider,
    DisabledSlider,
    DiscreteSlider,
    IconsSlider,
    InverseLabelSlider,
    MinAndMaxSlider,
    ReadonlySlider,
    StepSlider,
    ThumbSlider,
    TicksSlider,
    ValidationSlider,
    VerticalSlidersSlider,
    AppendAndPrependSlider,
    AppendTextFieldSlider,
  },
};
</script>
