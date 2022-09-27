<template>
    <v-container>
        <v-col>
            <h1>Sheets</h1>
            <p class="body-1 mt-2">
                The <code>v-sheet</code> component is the baseline for numerous components such as v-card, v-toolbar, and more. 
                The available properties form the foundation of Material Design—the concept of paper and elevation (shadows).
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Elevation sheet
            </p>
            <ElevationSheet id="ElevationSheet" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rounded sheet
            </p>
            <RoundedSheet id="RoundedSheet" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Color sheet
            </p>
            <ColorSheet id="ColorSheet" />
        </v-col>

        <v-row justify="space-around">
            <v-col cols="3" md="4">
                <p class="text-h5">
                    Outlined sheet
                </p>
                <OutlinedSheet id="OutlinedSheet" />
            </v-col>

            <v-col>
                <p class="text-h5">
                    Shaped sheet
                </p>
                <ShapedSheet id="ShapedSheet" />
            </v-col>

            <v-col>
                <p class="text-h5">
                    Tile sheet
                </p>
                <TileSheet id="TileSheet" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ElevationSheet from '@/components/sheets/ElevationSheet.vue';
import RoundedSheet from '@/components/sheets/RoundedSheet.vue';
import ColorSheet from '@/components/sheets/ColorSheet.vue';
import OutlinedSheet from '@/components/sheets/OutlinedSheet.vue';
import ShapedSheet from '@/components/sheets/ShapedSheet.vue';
import TileSheet from '@/components/sheets/TileSheet.vue';

export default {
  name: 'Sheets',
  components: {
    ElevationSheet,
    RoundedSheet,
    ColorSheet,
    OutlinedSheet,
    ShapedSheet,
    TileSheet,
  },
};
</script>
