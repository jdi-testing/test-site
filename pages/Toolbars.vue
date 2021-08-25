<template>
    <v-container>
        <v-col>
            <h1>Toolbars</h1>
        </v-col>
        <v-row class="mx-1">
            <v-col>
                <p class="text-h5">
                    Background
                </p>
                <BackgroundToolbar id="backgroundToolbar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Collapse
                </p>
                <CollapseToolbar id="collapseToolbar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Dense
                </p>
                <DenseToolbar id="denseToolbar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Extended toolbar
                </p>
                <ExtendedToolbar id="extendedToolbar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Floating with search toolbar
                </p>
                <FloatingWithSearchToolbar id="floatingWithSearchToolbar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Context Action toolbar
                </p>
                <ContextActionToolbar id="contextActionToolbar"/>
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Flexible and card toolbar
                </p>
                <FlexibleAndCardToolbar id="flexibleAndCardToolbar"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import BackgroundToolbar from '@/components/bars/toolbars/BackgroundToolbar.vue';
import CollapseToolbar from '@/components/bars/toolbars/CollapseToolbar.vue';
import DenseToolbar from '@/components/bars/toolbars/DenseToolbar.vue';
import ExtendedToolbar from '@/components/bars/toolbars/ExtendedToolbar.vue';
import FloatingWithSearchToolbar from '@/components/bars/toolbars/FloatingWithSearchToolbar.vue';
import ContextActionToolbar from '@/components/bars/toolbars/ContextualActionToolbar.vue';
import FlexibleAndCardToolbar from '@/components/bars/toolbars/FlexibleAndCardToolbar.vue';

export default {
  name: 'Toolbars',
  components: {
    BackgroundToolbar,
    CollapseToolbar,
    DenseToolbar,
    ExtendedToolbar,
    FloatingWithSearchToolbar,
    ContextActionToolbar,
    FlexibleAndCardToolbar,
  },
};
</script>
