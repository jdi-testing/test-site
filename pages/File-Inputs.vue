<template>
    <v-container>
        <v-col>
            <h1>File inputs</h1>
            <p class="body-1 mt-2">
                The <code>v-file-input</code> component is a specialized input that provides a clean interface 
                for selecting files, showing detailed selection information and upload progress. 
                It is meant to be a direct replacement for a standard file input.
            </p>
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
                Flat Counter file input
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
                Append prepend icon file input
            </p>
            <AppendPrependIconFileInput id="AppendPrependIconFileInput" />
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

        <v-col>
            <p class="text-h5">
                Background-color clearable autofocus file input
            </p>
            <BackgroundColorFileInput id="BackgroundColorFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Loading reversed file input
            </p>
            <LoadingFileInput id="LoadingFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                With an error file input
            </p>
            <ErrorFileInput id="ErrorFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Successful file input
            </p>
            <SuccessFileInput id="SuccessFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide details and input full-width file input
            </p>
            <FullWidthFileInput id="FullWidthFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Solo-inverted file input with truncated file name
            </p>
            <SoloFileInput id="SoloFileInput" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled file input
            </p>
            <DisabledFileInput id="DisabledFileInput" />
        </v-col>
    </v-container>
</template>

<script>
import AcceptFileInput from '@/components/form_inputs/file_inputs/AcceptFileInput.vue';
import ChipsFileInput from '@/components/form_inputs/file_inputs/ChipsFileInput.vue';
import CounterFileInput from '@/components/form_inputs/file_inputs/CounterFileInput.vue';
import DenseFileInput from '@/components/form_inputs/file_inputs/DenseFileInput.vue';
import MultipleFileInput from '@/components/form_inputs/file_inputs/MultipleFileInput.vue';
import AppendPrependIconFileInput from '@/components/form_inputs/file_inputs/AppendPrependIconFileInput.vue';
import ShowSizeFileInput from '@/components/form_inputs/file_inputs/ShowSizeFileInput.vue';
import ValidationFileInput from '@/components/form_inputs/file_inputs/ValidationFileInput.vue';
import SelectionFileInput from '@/components/form_inputs/file_inputs/SelectionFileInput.vue';
import ComplexSelectionSlotFileInput from '@/components/form_inputs/file_inputs/ComplexSelectionSlotFileInput.vue';
import BackgroundColorFileInput from '@/components/form_inputs/file_inputs/BackgroundColorFileInput.vue';
import LoadingFileInput from '@/components/form_inputs/file_inputs/LoadingFileInput.vue';
import ErrorFileInput from '@/components/form_inputs/file_inputs/ErrorFileInput.vue';
import SuccessFileInput from '@/components/form_inputs/file_inputs/SuccessFileInput.vue';
import FullWidthFileInput from '@/components/form_inputs/file_inputs/FullWidthFileInput.vue';
import SoloFileInput from '@/components/form_inputs/file_inputs/SoloFileInput.vue';
import DisabledFileInput from '@/components/form_inputs/file_inputs/DisabledFileInput.vue';

export default {
  name: 'FileInputs',
  components: {
    AcceptFileInput,
    ChipsFileInput,
    CounterFileInput,
    DenseFileInput,
    MultipleFileInput,
    AppendPrependIconFileInput,
    ShowSizeFileInput,
    ValidationFileInput,
    SelectionFileInput,
    ComplexSelectionSlotFileInput,
    BackgroundColorFileInput,
    LoadingFileInput,
    ErrorFileInput,
    SuccessFileInput,
    FullWidthFileInput,
    SoloFileInput,
    DisabledFileInput
  },
};
</script>
