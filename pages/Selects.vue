<template>
    <v-container>
        <v-col>
            <h1>Selects</h1>
            <p class="body-1 mt-2">
                Select fields components are used for collecting user provided information from a list of options.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom text and value select
            </p>
            <CustomTextAndValueSelect id="CustomTextAndValueSelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense select
            </p>
            <DenseSelect id="DenseSelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled select
            </p>
            <DisabledSelect id="DisabledSelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icons select
            </p>
            <IconsSelect id="IconsSelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Light select
            </p>
            <LightSelect id="LightSelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Menu props select
            </p>
            <MenuPropsSelect id="MenuPropsSelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple select
            </p>
            <MultipleSelect id="MultipleSelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Readonly select
            </p>
            <ReadonlySelect id="ReadonlySelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Append and prepend item select
            </p>
            <AppendAndPrependItemSelect id="AppendAndPrependItemSelect" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Selection select
            </p>
            <SelectionSelect id="SelectionSelect" />
        </v-col>

    </v-container>
</template>

<script>
import CustomTextAndValueSelect from '@/components/form_inputs/selects/CustomTextAndValueSelect.vue';
import DenseSelect from '@/components/form_inputs/selects/DenseSelect.vue';
import DisabledSelect from '@/components/form_inputs/selects/DisabledSelect.vue';
import IconsSelect from '@/components/form_inputs/selects/IconsSelect.vue';
import LightSelect from '@/components/form_inputs/selects/LightSelect.vue';
import MenuPropsSelect from '@/components/form_inputs/selects/MenuPropsSelect.vue';
import MultipleSelect from '@/components/form_inputs/selects/MultipleSelect.vue';
import ReadonlySelect from '@/components/form_inputs/selects/ReadonlySelect.vue';
import AppendAndPrependItemSelect from '@/components/form_inputs/selects/AppendAndPrependItemSelect.vue';
import SelectionSelect from '@/components/form_inputs/selects/SelectionSelect.vue';

export default {
  name: 'Selects',
  components: {
    CustomTextAndValueSelect,
    DenseSelect,
    DisabledSelect,
    IconsSelect,
    LightSelect,
    MenuPropsSelect,
    MultipleSelect,
    ReadonlySelect,
    AppendAndPrependItemSelect,
    SelectionSelect,
  },
};
</script>
