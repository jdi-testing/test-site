<template>
    <v-container>
        <v-col>
            <h1>Steppers</h1>
            <p class="body-1 mt-2">
                The <code>v-stepper</code> component displays progress through numbered steps.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Alternate label stepper
            </p>
            <AlternateLabelStepper id="AlternateLabelStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Non linear stepper
            </p>
            <NonLinearStepper id="NonLinearStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Vertical stepper
            </p>
            <VerticalStepper id="VerticalStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Alternative label with errors stepper
            </p>
            <AlternativeLabelWithErrorsStepper id="AlternativeLabelWithErrorsStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dynamic steps stepper
            </p>
            <DynamicStepsStepper id="DynamicStepsStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Editable steps stepper
            </p>
            <EditableStepsStepper id="EditableStepsStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Errors stepper
            </p>
            <ErrorsStepper id="ErrorsStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Horizontal steps stepper
            </p>
            <HorizontalStepsStepper id="HorizontalStepsStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Linear steppers stepper
            </p>
            <LinearSteppersStepper id="LinearSteppersStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Non editable steps stepper
            </p>
            <NonEditableStepsStepper id="NonEditableStepsStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Optional steps stepper
            </p>
            <OptionalStepsStepper id="OptionalStepsStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Vertical errors stepper
            </p>
            <VerticalErrorsStepper id="VerticalErrorsStepper" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Various attribute stepper
            </p>
            <VariousAttributeStepper id="VariousAttributeStepper" />
        </v-col>

    </v-container>
</template>

<script>
import AlternateLabelStepper from '@/components/steppers/AlternateLabelStepper.vue';
import NonLinearStepper from '@/components/steppers/NonLinearStepper.vue';
import VerticalStepper from '@/components/steppers/VerticalStepper.vue';
import AlternativeLabelWithErrorsStepper from '@/components/steppers/AlternativeLabelWithErrorsStepper.vue';
import DynamicStepsStepper from '@/components/steppers/DynamicStepsStepper.vue';
import EditableStepsStepper from '@/components/steppers/EditableStepsStepper.vue';
import ErrorsStepper from '@/components/steppers/ErrorsStepper.vue';
import HorizontalStepsStepper from '@/components/steppers/HorizontalStepsStepper.vue';
import LinearSteppersStepper from '@/components/steppers/LinearSteppersStepper.vue';
import NonEditableStepsStepper from '@/components/steppers/NonEditableStepsStepper.vue';
import OptionalStepsStepper from '@/components/steppers/OptionalStepsStepper.vue';
import VerticalErrorsStepper from '@/components/steppers/VerticalErrorsStepper.vue';
import VariousAttributeStepper from '@/components/steppers/VariousAttributeStepper.vue';

export default {
  name: 'Steppers',
  components: {
    AlternateLabelStepper,
    NonLinearStepper,
    VerticalStepper,
    AlternativeLabelWithErrorsStepper,
    DynamicStepsStepper,
    EditableStepsStepper,
    ErrorsStepper,
    HorizontalStepsStepper,
    LinearSteppersStepper,
    NonEditableStepsStepper,
    OptionalStepsStepper,
    VerticalErrorsStepper,
    VariousAttributeStepper,
  },
};
</script>
