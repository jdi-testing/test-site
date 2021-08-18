<template>
    <v-container>
        <v-col>
            <h1>Button groups</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Mandatory button group
            </p>
            <MandatoryButtonGroup id="MandatoryButtonGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple button group
            </p>
            <MultipleButtonGroup id="MultipleButtonGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rounded button group
            </p>
            <RoundedButtonGroup id="RoundedButtonGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Toolbar button group
            </p>
            <ToolbarButtonGroup id="ToolbarButtonGroup" />
        </v-col>

        <v-col>
            <p class="text-h5">
                WYSIWYG button group
            </p>
            <WYSIWYGButtonGroup id="WYSIWYGButtonGroup" />
        </v-col>

    </v-container>
</template>

<script>
import MandatoryButtonGroup from '@/components/button_groups/MandatoryButtonGroup.vue';
import MultipleButtonGroup from '@/components/button_groups/MultipleButtonGroup.vue';
import RoundedButtonGroup from '@/components/button_groups/RoundedButtonGroup.vue';
import ToolbarButtonGroup from '@/components/button_groups/ToolbarButtonGroup.vue';
import WYSIWYGButtonGroup from '@/components/button_groups/WYSIWYGButtonGroup.vue';

export default {
  name: 'ButtonGroups',
  components: {
    MandatoryButtonGroup,
    MultipleButtonGroup,
    RoundedButtonGroup,
    ToolbarButtonGroup,
    WYSIWYGButtonGroup,
  },
};
</script>
