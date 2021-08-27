<template>
    <v-container>
        <v-col>
            <h1>Inputs</h1>
            <p class="body-1 mt-2">
                The <code>v-input</code> component gives you a baseline to create your own custom inputs. 
                It consists of a prepend/append slot, messages, and a default slot. 
                It is recommended that you extend this component, but it can be used as a standalone.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Error count input
            </p>
            <p class="text-h6">
                Few errors
            </p>
            <ErrorCountInput2 id="ErrorCountInput2" /><br />
            <p class="text-h6">
                One error
            </p>
            <ErrorCountInput1 id="ErrorCountInput1" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide details input
            </p>
            <HideDetailsInput id="HideDetailsInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hint input
            </p>
            <HintInput id="HintInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Loading input
            </p>
            <LoadingInput id="LoadingInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rules input
            </p>
            <RulesInput id="RulesInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Success input
            </p>
            <SuccessInput id="SuccessInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Slot clicks input
            </p>
            <SlotClicksInput id="SlotClicksInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Append and prepend input
            </p>
            <AppendAndPrependInput id="AppendAndPrependInput" />
        </v-col>

    </v-container>
</template>

<script>
import ErrorCountInput1 from '@/components/form_inputs/inputs/ErrorCountInput1.vue';
import ErrorCountInput2 from '@/components/form_inputs/inputs/ErrorCountInput2.vue';
import HideDetailsInput from '@/components/form_inputs/inputs/HideDetailsInput.vue';
import HintInput from '@/components/form_inputs/inputs/HintInput.vue';
import LoadingInput from '@/components/form_inputs/inputs/LoadingInput.vue';
import RulesInput from '@/components/form_inputs/inputs/RulesInput.vue';
import SuccessInput from '@/components/form_inputs/inputs/SuccessInput.vue';
import SlotClicksInput from '@/components/form_inputs/inputs/SlotClicksInput.vue';
import AppendAndPrependInput from '@/components/form_inputs/inputs/AppendAndPrependInput.vue';

export default {
  name: 'Inputs',
  components: {
    ErrorCountInput1,
    ErrorCountInput2,
    HideDetailsInput,
    HintInput,
    LoadingInput,
    RulesInput,
    SuccessInput,
    SlotClicksInput,
    AppendAndPrependInput,
  },
};
</script>
