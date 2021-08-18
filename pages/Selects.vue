<template>
    <v-container>
        <v-col>
            <h1>Selects</h1>
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
import CustomTextAndValueSelect from '@/components/selects/CustomTextAndValueSelect.vue';
import DenseSelect from '@/components/selects/DenseSelect.vue';
import DisabledSelect from '@/components/selects/DisabledSelect.vue';
import IconsSelect from '@/components/selects/IconsSelect.vue';
import LightSelect from '@/components/selects/LightSelect.vue';
import MenuPropsSelect from '@/components/selects/MenuPropsSelect.vue';
import MultipleSelect from '@/components/selects/MultipleSelect.vue';
import ReadonlySelect from '@/components/selects/ReadonlySelect.vue';
import AppendAndPrependItemSelect from '@/components/selects/AppendAndPrependItemSelect.vue';
import SelectionSelect from '@/components/selects/SelectionSelect.vue';

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
