<template>
    <v-container>
        <v-col>
            <h1>Combobox</h1>
            <p class="body-1 mt-2">
                The <code>v-combobox</code> component is a v-autocomplete that allows the user to enter values 
                that do not exist within the provided items. Created items will be returned as strings.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Autofocus combobox
            </p>
            <AutofocusCombobox id="AutofocusCombobox" />
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

        <v-col>
            <p class="text-h5">
                Loading combobox
            </p>
            <LoadingCombobox id="loadingCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Solo/Solo inverted combobox
            </p>
            <SoloInvertedCombobox id="SoloInvertedCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide selected combobox
            </p>
            <HideSelectedCombobox id="HideSelectedCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hint combobox
            </p>
            <HintCombobox id="HintCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Placeholder combobox
            </p>
            <PlaceholderCombobox id="PlaceholderCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled combobox
            </p>
            <DisabledCombobox id="DisabledCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Flat combobox
            </p>
            <FlatCombobox id="FlatCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Error/Success combobox
            </p>
            <ErrorSuccessCombobox id="ErrorSuccessCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Hide details combobox
            </p>
            <HideDetailsCombobox id="HideDetailsCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Counter combobox
            </p>
            <CounterCombobox id="CounterCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Overflow combobox
            </p>
            <OverflowCombobox id="OverflowCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Full width combobox
            </p>
            <FullWidthCombobox id="FullWidthCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Open on clear combobox
            </p>
            <OpenOnClearCombobox id="OpenOnClearCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                No filter combobox
            </p>
            <NoFilterCombobox id="NoFilterCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Auto select first combobox
            </p>
            <AutoSelectFirstCombobox id="AutoSelectFirstCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom item combobox
            </p>
            <CustomItemCombobox id="CustomItemCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom height combobox
            </p>
            <CustomHeightCombobox id="CustomHeightCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rounded combobox
            </p>
            <RoundedCombobox id="RoundedCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Shaped combobox (for filled and outlined only)
            </p>
            <ShapedCombobox id="ShapedCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom style combobox
            </p>
            <CustomStyleCombobox id="CustomStyleCombobox" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Prefix/Suffix combobox
            </p>
            <PrefixSuffixCombobox id="PrefixSuffixCombobox" />
        </v-col>
    </v-container>
</template>

<script>
import AutofocusCombobox from '@/components/form_inputs/combobox/AutofocusCombobox.vue';
import DenseCombobox from '@/components/form_inputs/combobox/DenseCombobox.vue';
import MultipleCombobox from '@/components/form_inputs/combobox/MultipleCombobox.vue';
import NoDataWithChipsCombobox from '@/components/form_inputs/combobox/NoDataWithChipsCombobox.vue';
import AdvancedCustomOptionsCombobox from '@/components/form_inputs/combobox/AdvancedCustomOptionsCombobox.vue';
import LoadingCombobox from '@/components/form_inputs/combobox/LoadingCombobox.vue';
import SoloInvertedCombobox from '@/components/form_inputs/combobox/SoloInvertedCombobox.vue';
import HideSelectedCombobox from '@/components/form_inputs/combobox/HideSelectedCombobox.vue';
import HintCombobox from '@/components/form_inputs/combobox/HintCombobox.vue';
import PlaceholderCombobox from '@/components/form_inputs/combobox/PlaceholderCombobox.vue';
import DisabledCombobox from '@/components/form_inputs/combobox/DisabledCombobox.vue';
import FlatCombobox from '@/components/form_inputs/combobox/FlatCombobox.vue';
import ErrorSuccessCombobox from '@/components/form_inputs/combobox/ErrorSuccessCombobox.vue';
import HideDetailsCombobox from '@/components/form_inputs/combobox/HideDetailsCombobox.vue';
import CounterCombobox from '@/components/form_inputs/combobox/CounterCombobox.vue';
import OverflowCombobox from '@/components/form_inputs/combobox/OverflowCombobox.vue';
import FullWidthCombobox from '@/components/form_inputs/combobox/FullWidthCombobox.vue';
import OpenOnClearCombobox from '@/components/form_inputs/combobox/OpenOnClearCombobox.vue';
import NoFilterCombobox from '@/components/form_inputs/combobox/NoFilterCombobox.vue';
import AutoSelectFirstCombobox from '@/components/form_inputs/combobox/AutoSelectFirstCombobox.vue';
import CustomItemCombobox from '@/components/form_inputs/combobox/CustomItemCombobox.vue';
import CustomHeightCombobox from '@/components/form_inputs/combobox/CustomHeightCombobox.vue';
import RoundedCombobox from '@/components/form_inputs/combobox/RoundedCombobox.vue';
import ShapedCombobox from '@/components/form_inputs/combobox/ShapedCombobox.vue';
import CustomStyleCombobox from '@/components/form_inputs/combobox/CustomStyleCombobox.vue';
import PrefixSuffixCombobox from '@/components/form_inputs/combobox/PrefixSuffixCombobox.vue';


export default {
  name: 'Combobox',
  components: {
    AutofocusCombobox,
    DenseCombobox,
    MultipleCombobox,
    NoDataWithChipsCombobox,
    AdvancedCustomOptionsCombobox,
    LoadingCombobox,
    SoloInvertedCombobox,
    HideSelectedCombobox,
    HintCombobox,
    PlaceholderCombobox,
    DisabledCombobox,
    FlatCombobox,
    ErrorSuccessCombobox,
    HideDetailsCombobox,
    CounterCombobox,
    OverflowCombobox,
    FullWidthCombobox,
    OpenOnClearCombobox,
    NoFilterCombobox,
    AutoSelectFirstCombobox,
    CustomItemCombobox,
    CustomHeightCombobox,
    RoundedCombobox,
    ShapedCombobox,
    CustomStyleCombobox,
    PrefixSuffixCombobox,
  },
};
</script>
