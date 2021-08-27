<template>
    <v-container>
        <v-col>
            <h1>Dialogs</h1>
            <p class="body-1 mt-2">
                The <code>v-dialog</code> component inform users about a specific task and may contain critical information, 
                require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">Fullscreen</p>
            <FullscreenDialog id="fullscreenDialog" />
        </v-col>

        <v-col>
            <p class="text-h5">Transitions</p>
            <TransitionsDialog id="transitionsDialog" />
        </v-col>

        <v-col>
            <p class="text-h5">Persistent</p>
            <PersistentDialog id="persistentDialog" />
        </v-col>

        <v-col>
            <p class="text-h5">Scrollable</p>
            <ScrollableDialog id="scrollableDialog" />
        </v-col>

        <v-col>
            <p class="text-h5">Form</p>
            <FormDialog id="formDialog" />
        </v-col>

        <v-col>
            <p class="text-h5">Loader</p>
            <LoaderDialog id="loaderDialog" />
        </v-col>

        <v-col>
            <p class="text-h5">Nesting</p>
            <NestingDialog id="nestingDialog" />
        </v-col>

        <v-col>
            <p class="text-h5">Overflowed</p>
            <OverflowedDialog id="overflowedDialog" />
        </v-col>

        <v-col>
            <p class="text-h5">Without activator</p>
            <WithoutActivatorDialog id="withoutActivatorDialog" />
        </v-col>
    </v-container>
</template>

<script>
import FormDialog from '@/components/dialogs/FormDialog.vue';
import FullscreenDialog from '@/components/dialogs/FullscreenDialog.vue';
import LoaderDialog from '@/components/dialogs/LoaderDialog.vue';
import NestingDialog from '@/components/dialogs/NestingDialog.vue';
import OverflowedDialog from '@/components/dialogs/OverflowedDialog.vue';
import PersistentDialog from '@/components/dialogs/PersistentDialog.vue';
import ScrollableDialog from '@/components/dialogs/ScrollableDialog.vue';
import TransitionsDialog from '@/components/dialogs/TransitionsDialog.vue';
import WithoutActivatorDialog from '@/components/dialogs/WithoutActivatorDialog.vue';

export default {
  name: 'Dialogs',
  components: {
    FormDialog,
    FullscreenDialog,
    LoaderDialog,
    NestingDialog,
    OverflowedDialog,
    PersistentDialog,
    ScrollableDialog,
    TransitionsDialog,
    WithoutActivatorDialog,
  },
};
</script>
