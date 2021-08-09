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
                <BackgroundToolbar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Collapse
                </p>
                <CollapseToolbar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Dense
                </p>
                <DenseToolbar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Extended toolbar
                </p>
                <ExtendedToolbar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Floating with search toolbar
                </p>
                <FloatingWithSearchToolbar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Context Action toolbar
                </p>
                <ContextActionToolbar />
            </v-col>
        </v-row>
        <v-row class="mx-1 mt-3">
            <v-col>
                <p class="text-h5">
                    Flexible and card toolbar
                </p>
                <FlexibleAndCardToolbar />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import BackgroundToolbar from '@/components/toolbars/BackgroundToolbar.vue';
import CollapseToolbar from '@/components/toolbars/CollapseToolbar.vue';
import DenseToolbar from '@/components/toolbars/DenseToolbar.vue';
import ExtendedToolbar from '@/components/toolbars/ExtendedToolbar.vue';
import FloatingWithSearchToolbar from '@/components/toolbars/FloatingWithSearchToolbar.vue';
import ContextActionToolbar from '@/components/toolbars/ContextualActionToolbar.vue';
import FlexibleAndCardToolbar from '@/components/toolbars/FlexibleAndCardToolbar.vue';

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
