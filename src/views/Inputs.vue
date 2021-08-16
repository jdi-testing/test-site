<template>
    <v-container>
        <v-col>
            <h1>Inputs</h1>
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
import ErrorCountInput1 from '@/components/inputs/ErrorCountInput1.vue';
import ErrorCountInput2 from '@/components/inputs/ErrorCountInput2.vue';
import HideDetailsInput from '@/components/inputs/HideDetailsInput.vue';
import HintInput from '@/components/inputs/HintInput.vue';
import LoadingInput from '@/components/inputs/LoadingInput.vue';
import RulesInput from '@/components/inputs/RulesInput.vue';
import SuccessInput from '@/components/inputs/SuccessInput.vue';
import SlotClicksInput from '@/components/inputs/SlotClicksInput.vue';
import AppendAndPrependInput from '@/components/inputs/AppendAndPrependInput.vue';

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
