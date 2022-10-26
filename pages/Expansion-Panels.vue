<template>
    <v-container>
        <v-col>
            <h1>Expansion panels</h1>
            <p class="body-1 mt-2">
                The <code>v-expansion-panel</code> component is useful for reducing vertical space with large amounts of information. 
                The default functionality of the component is to only display one expansion-panel body at a time; 
                however, with the multiple property, the expansion-panel can remain open until explicitly closed.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Accordion expansion panel
            </p>
            <AccordionExpansionPanel id="AccordionExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled expansion panel
            </p>
            <DisabledExpansionPanel id="DisabledExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Focusable expansion panel
            </p>
            <FocusableExpansionPanel id="FocusableExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Inset expansion panel
            </p>
            <InsetExpansionPanel id="InsetExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Model expansion panel
            </p>
            <ModelExpansionPanel id="ModelExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Popout expansion panel
            </p>
            <PopoutExpansionPanel id="PopoutExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Readonly expansion panel
            </p>
            <ReadonlyExpansionPanel id="ReadonlyExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Advanced expansion panel
            </p>
            <AdvancedExpansionPanel id="AdvancedExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom icon expansion panel
            </p>
            <CustomIconExpansionPanel id="CustomIconExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Flat expansion panel
            </p>
            <FlatExpansionPanel id="FlatExpansionPanel" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Tile expansion panel
            </p>
            <TileExpansionPanel id="TileExpansionPanel" />
        </v-col>
    </v-container>
</template>

<script>
import AccordionExpansionPanel from '@/components/expansion_panels/AccordionExpansionPanel.vue';
import DisabledExpansionPanel from '@/components/expansion_panels/DisabledExpansionPanel.vue';
import FocusableExpansionPanel from '@/components/expansion_panels/FocusableExpansionPanel.vue';
import InsetExpansionPanel from '@/components/expansion_panels/InsetExpansionPanel.vue';
import ModelExpansionPanel from '@/components/expansion_panels/ModelExpansionPanel.vue';
import PopoutExpansionPanel from '@/components/expansion_panels/PopoutExpansionPanel.vue';
import ReadonlyExpansionPanel from '@/components/expansion_panels/ReadonlyExpansionPanel.vue';
import AdvancedExpansionPanel from '@/components/expansion_panels/AdvancedExpansionPanel.vue';
import CustomIconExpansionPanel from '@/components/expansion_panels/CustomIconExpansionPanel.vue';
import FlatExpansionPanel from '@/components/expansion_panels/FlatExpansionPanel.vue';
import TileExpansionPanel from '@/components/expansion_panels/TileExpansionPanel.vue';

export default {
  name: 'ExpansionPanels',
  components: {
    AccordionExpansionPanel,
    DisabledExpansionPanel,
    FocusableExpansionPanel,
    InsetExpansionPanel,
    ModelExpansionPanel,
    PopoutExpansionPanel,
    ReadonlyExpansionPanel,
    AdvancedExpansionPanel,
    CustomIconExpansionPanel,
    FlatExpansionPanel,
    TileExpansionPanel
  },
};
</script>
