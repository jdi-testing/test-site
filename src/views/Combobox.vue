<template>
    <v-container>
        <v-col>
            <h1>Combobox</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense combobox
            </p>
            <DenseCombobox id="DenseCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple combobox
            </p>
            <MultipleCombobox id="MultipleCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                No data with chips combobox
            </p>
            <NoDataWithChipsCombobox id="NoDataWithChipsCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Advanced custom options combobox
            </p>
            <AdvancedCustomOptionsCombobox id="AdvancedCustomOptionsCombobox" />
        </v-col>

    </v-container>
</template>

<script>
import DenseCombobox from '@/components/combobox/DenseCombobox.vue';
import MultipleCombobox from '@/components/combobox/MultipleCombobox.vue';
import NoDataWithChipsCombobox from '@/components/combobox/NoDataWithChipsCombobox.vue';
import AdvancedCustomOptionsCombobox from '@/components/combobox/AdvancedCustomOptionsCombobox.vue';

export default {
  name: 'Combobox',
  components: {
    DenseCombobox,
    MultipleCombobox,
    NoDataWithChipsCombobox,
    AdvancedCustomOptionsCombobox,
  },
};
</script>
