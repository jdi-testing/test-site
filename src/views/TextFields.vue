<template>
    <v-container>
        <v-col>
            <h1>Text fields</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Counter text field
            </p>
            <CounterTextField id="CounterTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Clearable text field
            </p>
            <ClearableTextField id="ClearableTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom colors text field
            </p>
            <CustomColorsTextField id="CustomColorsTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense text field
            </p>
            <DenseTextField id="DenseTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled and readonly text field
            </p>
            <DisabledAndReadonlyTextField id="DisabledAndReadonlyTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Filled text field
            </p>
            <FilledTextField id="FilledTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide details text field
            </p>
            <HideDetailsTextField id="HideDetailsTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hint text field
            </p>
            <HintTextField id="HintTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icons text field
            </p>
            <IconsTextField id="IconsTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Outlined text field
            </p>
            <OutlinedTextField id="OutlinedTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Prefixes and suffixes text field
            </p>
            <PrefixesAndSuffixesTextField id="PrefixesAndSuffixesTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Shaped text field
            </p>
            <ShapedTextField id="ShapedTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Single line text field
            </p>
            <SingleLineTextField id="SingleLineTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Solo text field
            </p>
            <SoloTextField id="SoloTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Validation text field
            </p>
            <ValidationTextField id="ValidationTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icon events text field
            </p>
            <IconEventsTextField id="IconEventsTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icon slots text field
            </p>
            <IconSlotsTextField id="IconSlotsTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Label text field
            </p>
            <LabelTextField id="LabelTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Progress text field
            </p>
            <ProgressTextField id="ProgressTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom validation text field
            </p>
            <CustomValidationTextField id="CustomValidationTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Full width with counter text field
            </p>
            <FullWidthWithCounterTextField id="FullWidthWithCounterTextField" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Password input text field
            </p>
            <PasswordInputTextField id="PasswordInputTextField" />
        </v-col>

    </v-container>
</template>

<script>
import CounterTextField from '@/components/text_fields/CounterTextField.vue';
import ClearableTextField from '@/components/text_fields/ClearableTextField.vue';
import CustomColorsTextField from '@/components/text_fields/CustomColorsTextField.vue';
import DenseTextField from '@/components/text_fields/DenseTextField.vue';
import DisabledAndReadonlyTextField from '@/components/text_fields/DisabledAndReadonlyTextField.vue';
import FilledTextField from '@/components/text_fields/FilledTextField.vue';
import HideDetailsTextField from '@/components/text_fields/HideDetailsTextField.vue';
import HintTextField from '@/components/text_fields/HintTextField.vue';
import IconsTextField from '@/components/text_fields/IconsTextField.vue';
import OutlinedTextField from '@/components/text_fields/OutlinedTextField.vue';
import PrefixesAndSuffixesTextField from '@/components/text_fields/PrefixesAndSuffixesTextField.vue';
import ShapedTextField from '@/components/text_fields/ShapedTextField.vue';
import SingleLineTextField from '@/components/text_fields/SingleLineTextField.vue';
import SoloTextField from '@/components/text_fields/SoloTextField.vue';
import ValidationTextField from '@/components/text_fields/ValidationTextField.vue';
import IconEventsTextField from '@/components/text_fields/IconEventsTextField.vue';
import IconSlotsTextField from '@/components/text_fields/IconSlotsTextField.vue';
import LabelTextField from '@/components/text_fields/LabelTextField.vue';
import ProgressTextField from '@/components/text_fields/ProgressTextField.vue';
import CustomValidationTextField from '@/components/text_fields/CustomValidationTextField.vue';
import FullWidthWithCounterTextField from '@/components/text_fields/FullWidthWithCounterTextField.vue';
import PasswordInputTextField from '@/components/text_fields/PasswordInputTextField.vue';

export default {
  name: 'Text fields',
  components: {
    CounterTextField,
    ClearableTextField,
    CustomColorsTextField,
    DenseTextField,
    DisabledAndReadonlyTextField,
    FilledTextField,
    HideDetailsTextField,
    HintTextField,
    IconsTextField,
    OutlinedTextField,
    PrefixesAndSuffixesTextField,
    ShapedTextField,
    SingleLineTextField,
    SoloTextField,
    ValidationTextField,
    IconEventsTextField,
    IconSlotsTextField,
    LabelTextField,
    ProgressTextField,
    CustomValidationTextField,
    FullWidthWithCounterTextField,
    PasswordInputTextField,
  },
};
</script>
