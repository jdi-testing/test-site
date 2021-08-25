<template>
    <v-container>
        <v-col>
            <h1>Overflow buttons</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Counter overflow button
            </p>
            <CounterOverflowButton id="CounterOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense overflow button
            </p>
            <DenseOverflowButton id="DenseOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled overflow button
            </p>
            <DisabledOverflowButton id="DisabledOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Editable overflow button
            </p>
            <EditableOverflowButton id="EditableOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Filled overflow button
            </p>
            <FilledOverflowButton id="FilledOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hint overflow button
            </p>
            <HintOverflowButton id="HintOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Loading overflow button
            </p>
            <LoadingOverflowButton id="LoadingOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Menu props overflow button
            </p>
            <MenuPropsOverflowButton id="MenuPropsOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Readonly overflow button
            </p>
            <ReadonlyOverflowButton id="ReadonlyOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Segmented overflow button
            </p>
            <SegmentedOverflowButton id="SegmentedOverflowButton" />
        </v-col>

    </v-container>
</template>

<script>
import CounterOverflowButton from '@/components/form_inputs/overflow_buttons/CounterOverflowButton.vue';
import DenseOverflowButton from '@/components/form_inputs/overflow_buttons/DenseOverflowButton.vue';
import DisabledOverflowButton from '@/components/form_inputs/overflow_buttons/DisabledOverflowButton.vue';
import EditableOverflowButton from '@/components/form_inputs/overflow_buttons/EditableOverflowButton.vue';
import FilledOverflowButton from '@/components/form_inputs/overflow_buttons/FilledOverflowButton.vue';
import HintOverflowButton from '@/components/form_inputs/overflow_buttons/HintOverflowButton.vue';
import LoadingOverflowButton from '@/components/form_inputs/overflow_buttons/LoadingOverflowButton.vue';
import MenuPropsOverflowButton from '@/components/form_inputs/overflow_buttons/MenuPropsOverflowButton.vue';
import ReadonlyOverflowButton from '@/components/form_inputs/overflow_buttons/ReadonlyOverflowButton.vue';
import SegmentedOverflowButton from '@/components/form_inputs/overflow_buttons/SegmentedOverflowButton.vue';

export default {
  name: 'OverflowButtons',
  components: {
    CounterOverflowButton,
    DenseOverflowButton,
    DisabledOverflowButton,
    EditableOverflowButton,
    FilledOverflowButton,
    HintOverflowButton,
    LoadingOverflowButton,
    MenuPropsOverflowButton,
    ReadonlyOverflowButton,
    SegmentedOverflowButton,
  },
};
</script>
