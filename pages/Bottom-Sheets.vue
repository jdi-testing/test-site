<template>
    <v-container>
        <v-col>
            <h1>Bottom sheets</h1>
            <p class="body-1 mt-2">
                The bottom sheet is a modified <code>v-dialog</code> that slides from the bottom of the screen, 
                similar to a <code>v-bottom-navigation</code>. Whereas a bottom navigation component is for buttons 
                and specific application level actions, a bottom sheet can contain anything.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">Inset bottom sheet</p>
            <InsetBottomSheet id="inset-bottom-sheet" />
        </v-col>

        <v-col>
            <p class="text-h5">Model bottom sheet</p>
            <ModelBottomSheet id="model-bottom-sheet" />
        </v-col>

        <v-col>
            <p class="text-h5">Persistent bottom sheet</p>
            <PersistentBottomSheet id="persistent-bottom-sheet" />
        </v-col>

        <v-col>
            <p class="text-h5">Music Player bottom sheet</p>
            <MusicPlayerBottomSheet id="music-player-bottom-sheet" />
        </v-col>

        <v-col>
            <p class="text-h5">Open In List bottom sheet</p>
            <OpenInListBottomSheet id="open-in-list-bottom-sheet" />
        </v-col>
    </v-container>
</template>
<script>
import ModelBottomSheet from '@/components/bottom_sheets/ModelBottomSheet.vue';
import MusicPlayerBottomSheet from '@/components/bottom_sheets/MusicPlayerBottomSheet.vue';
import OpenInListBottomSheet from '@/components/bottom_sheets/OpenInListBottomSheet.vue';
import PersistentBottomSheet from '@/components/bottom_sheets/PersistentBottomSheet.vue';
import InsetBottomSheet from '@/components/bottom_sheets/InsetBottomSheet.vue';

export default {
  name: 'BottomSheets',
  components: {
    ModelBottomSheet,
    MusicPlayerBottomSheet,
    OpenInListBottomSheet,
    PersistentBottomSheet,
    InsetBottomSheet,
  },
};
</script>