<template>
    <v-container>
        <v-col>
            <h1>File inputs</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Accept file input
            </p>
            <AcceptFileInput id="AcceptFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Chips file input
            </p>
            <ChipsFileInput id="ChipsFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Counter file input
            </p>
            <CounterFileInput id="CounterFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense file input
            </p>
            <DenseFileInput id="DenseFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple file input
            </p>
            <MultipleFileInput id="MultipleFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Prepend icon file input
            </p>
            <PrependIconFileInput id="PrependIconFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Show size file input
            </p>
            <ShowSizeFileInput id="ShowSizeFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Validation file input
            </p>
            <ValidationFileInput id="ValidationFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Selection file input
            </p>
            <SelectionFileInput id="SelectionFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Complex selection slot file input
            </p>
            <ComplexSelectionSlotFileInput id="ComplexSelectionSlotFileInput" />
        </v-col>

    </v-container>
</template>

<script>
import AcceptFileInput from '@/components/form_inputs/file_inputs/AcceptFileInput.vue';
import ChipsFileInput from '@/components/form_inputs/file_inputs/ChipsFileInput.vue';
import CounterFileInput from '@/components/form_inputs/file_inputs/CounterFileInput.vue';
import DenseFileInput from '@/components/form_inputs/file_inputs/DenseFileInput.vue';
import MultipleFileInput from '@/components/form_inputs/file_inputs/MultipleFileInput.vue';
import PrependIconFileInput from '@/components/form_inputs/file_inputs/PrependIconFileInput.vue';
import ShowSizeFileInput from '@/components/form_inputs/file_inputs/ShowSizeFileInput.vue';
import ValidationFileInput from '@/components/form_inputs/file_inputs/ValidationFileInput.vue';
import SelectionFileInput from '@/components/form_inputs/file_inputs/SelectionFileInput.vue';
import ComplexSelectionSlotFileInput from '@/components/form_inputs/file_inputs/ComplexSelectionSlotFileInput.vue';

export default {
  name: 'FileInputs',
  components: {
    AcceptFileInput,
    ChipsFileInput,
    CounterFileInput,
    DenseFileInput,
    MultipleFileInput,
    PrependIconFileInput,
    ShowSizeFileInput,
    ValidationFileInput,
    SelectionFileInput,
    ComplexSelectionSlotFileInput,
  },
};
</script>
