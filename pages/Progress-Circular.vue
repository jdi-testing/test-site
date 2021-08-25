<template>
    <v-container>
        <v-col>
            <h1>Progress circular</h1>
            <p class="body-1 mt-2">
            The <code>v-progress-circular</code> component is used to convey data circularly to users. 
            It also can be put into an indeterminate state to portray loading.            
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Color
            </p>
            <ColorProgress id="ColorProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Indeterminate
            </p>
            <IndeterminateProgress id="IndeterminateProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Rotate
            </p>
            <RotateProgress id="RotateProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Size and width
            </p>
            <SizeWidthProgress id="SizeWidthProgress" />
        </v-col>

    </v-container>
</template>
<script>
import ColorProgress from '@/components/progress/progress_circular/ColorProgress.vue';
import IndeterminateProgress from '@/components/progress/progress_circular/IndeterminateProgress.vue';
import RotateProgress from '@/components/progress/progress_circular/RotateProgress.vue';
import SizeWidthProgress from '@/components/progress/progress_circular/SizeWidthProgress.vue';

export default {
  name: 'ProgressCircular',
  components: {
    ColorProgress,
    IndeterminateProgress,
    RotateProgress,
    SizeWidthProgress
  },
};
</script>
