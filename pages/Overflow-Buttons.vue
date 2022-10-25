<template>
    <v-container>
        <v-col>
            <h1>Overflow buttons</h1>
            <p class="body-1 mt-2">
                <code>v-overflow-btn</code> is used to give the user the ability to select items from the list. 
                It has 3 variations: editable, overflow and segmented
            </p>
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

        <v-col>
            <p class="text-h5">
                Reversed overflow button
            </p>
            <ReversedOverflowButton id="ReversedOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Flat overflow button with small deletable chips
            </p>
            <WithChipsOverflowButton id="WithChipsOverflowButton" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Outlined shaped full-width overflow button with success messages
            </p>
            <OutlinedOverflowButton id="OutlinedOverflowButton" />
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
import ReversedOverflowButton from '@/components/form_inputs/overflow_buttons/ReversedOverflowButton.vue';
import WithChipsOverflowButton from '@/components/form_inputs/overflow_buttons/WithChipsOverflowButton.vue';
import OutlinedOverflowButton from '@/components/form_inputs/overflow_buttons/OutlinedOverflowButton.vue';

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
    ReversedOverflowButton,
    WithChipsOverflowButton,
    OutlinedOverflowButton
  },
};
</script>
