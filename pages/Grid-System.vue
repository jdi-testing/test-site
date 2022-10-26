<template>
    <v-container>
        <v-col>
            <h1>Grid system</h1>
            <p class="body-1 mt-2">
                The Vuetify grid is heavily inspired by the Bootstrap grid. It is integrated by using a series 
                of containers, rows, and columns to layout and align content.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Align grid system
            </p>
            <AlignGridSystem id="AlignGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Breakpoint sizing grid system
            </p>
            <BreakpointSizingGridSystem id="BreakpointSizingGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Justify grid system
            </p>
            <JustifyGridSystem id="JustifyGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                No gutters grid system
            </p>
            <NoGuttersGridSystem id="NoGuttersGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Offset grid system
            </p>
            <OffsetGridSystem id="OffsetGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Offset breakpoint grid system
            </p>
            <OffsetBreakpointGridSystem id="OffsetBreakpointGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Order grid system
            </p>
            <OrderGridSystem id="OrderGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Order first and last grid system
            </p>
            <OrderFirstAndLastGridSystem id="OrderFirstAndLastGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Column wrapping grid system
            </p>
            <ColumnWrappingGridSystem id="ColumnWrappingGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Equal width columns grid system
            </p>
            <EqualWidthColumnsGridSystem id="EqualWidthColumnsGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Grow and Shrink grid system
            </p>
            <GrowAndShrinkGridSystem id="GrowAndShrinkGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Margin helpers grid system
            </p>
            <MarginHelpersGridSystem id="MarginHelpersGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Nested grid grid system
            </p>
            <NestedGridGridSystem id="NestedGridGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                One column width grid system
            </p>
            <OneColumnWidthGridSystem id="OneColumnWidthGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Row and column breakpoints grid system
            </p>
            <RowAndColumnBreakpointsGridSystem id="RowAndColumnBreakpointsGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Spacers grid system
            </p>
            <SpacersGridSystem id="SpacersGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Unique layouts grid system
            </p>
            <UniqueLayoutsGridSystem id="UniqueLayoutsGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Variable content width grid system
            </p>
            <VariableContentWidthGridSystem id="VariableContentWidthGridSystem" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Fluid grid system
            </p>
            <FluidGridSystem id="FluidGridSystem" />
        </v-col>

    </v-container>
</template>

None
<script>
import AlignGridSystem from '@/components/grid_system/AlignGridSystem.vue';
import BreakpointSizingGridSystem from '@/components/grid_system/BreakpointSizingGridSystem.vue';
import JustifyGridSystem from '@/components/grid_system/JustifyGridSystem.vue';
import NoGuttersGridSystem from '@/components/grid_system/NoGuttersGridSystem.vue';
import OffsetGridSystem from '@/components/grid_system/OffsetGridSystem.vue';
import OffsetBreakpointGridSystem from '@/components/grid_system/OffsetBreakpointGridSystem.vue';
import OrderGridSystem from '@/components/grid_system/OrderGridSystem.vue';
import OrderFirstAndLastGridSystem from '@/components/grid_system/OrderFirstAndLastGridSystem.vue';
import ColumnWrappingGridSystem from '@/components/grid_system/ColumnWrappingGridSystem.vue';
import EqualWidthColumnsGridSystem from '@/components/grid_system/EqualWidthColumnsGridSystem.vue';
import GrowAndShrinkGridSystem from '@/components/grid_system/GrowAndShrinkGridSystem.vue';
import MarginHelpersGridSystem from '@/components/grid_system/MarginHelpersGridSystem.vue';
import NestedGridGridSystem from '@/components/grid_system/NestedGridGridSystem.vue';
import OneColumnWidthGridSystem from '@/components/grid_system/OneColumnWidthGridSystem.vue';
import RowAndColumnBreakpointsGridSystem from '@/components/grid_system/RowAndColumnBreakpointsGridSystem.vue';
import SpacersGridSystem from '@/components/grid_system/SpacersGridSystem.vue';
import UniqueLayoutsGridSystem from '@/components/grid_system/UniqueLayoutsGridSystem.vue';
import VariableContentWidthGridSystem from '@/components/grid_system/VariableContentWidthGridSystem.vue';
import FluidGridSystem from '@/components/grid_system/FluidGridSystem.vue';

export default {
  name: 'GridSystem',
  components: {
    AlignGridSystem,
    BreakpointSizingGridSystem,
    JustifyGridSystem,
    NoGuttersGridSystem,
    OffsetGridSystem,
    OffsetBreakpointGridSystem,
    OrderGridSystem,
    OrderFirstAndLastGridSystem,
    ColumnWrappingGridSystem,
    EqualWidthColumnsGridSystem,
    GrowAndShrinkGridSystem,
    MarginHelpersGridSystem,
    NestedGridGridSystem,
    OneColumnWidthGridSystem,
    RowAndColumnBreakpointsGridSystem,
    SpacersGridSystem,
    UniqueLayoutsGridSystem,
    VariableContentWidthGridSystem,
    FluidGridSystem
  },
};
</script>
