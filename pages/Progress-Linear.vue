<template>
    <v-container>
        <v-col>
            <h1>Progress linear</h1>
            <p class="body-1 mt-2">
            The <code>v-progress-linear</code> component will be responsive to user input when using v-model. 
            You can use the default slot or bind a local model to display inside of the progress.           
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Buffer value
            </p>
            <BufferValueProgress id="BufferValueProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Colors
            </p>
            <ColorsProgress id="ColorsProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Indeterminate
            </p>
            <IndeterminateProgress id="IndeterminateProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Query
            </p>
            <QueryProgress id="QueryProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Reversed
            </p>
            <ReversedProgress id="ReversedProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Rounded
            </p>
            <RoundedProgress id="RoundedProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Stream
            </p>
            <StreamProgress id="StreamProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Striped
            </p>
            <StripedProgress id="StripedProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Default
            </p>
            <DefaultProgress id="DefaultProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Determinate
            </p>
            <DeterminateProgress id="DeterminateProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                File Loader
            </p>
            <FileLoaderProgress id="FileLoaderProgress" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Toolbar
            </p>
            <ToolbarProgress id="ToolbarProgress" />
        </v-col>

    </v-container>
</template>
<script>
import BufferValueProgress from '@/components/progress/progress_linear/BufferValueProgress.vue';
import ColorsProgress from '@/components/progress/progress_linear/ColorsProgress.vue';
import IndeterminateProgress from '@/components/progress/progress_linear/IndeterminateProgress.vue';
import QueryProgress from '@/components/progress/progress_linear/QueryProgress.vue';
import ReversedProgress from '@/components/progress/progress_linear/ReversedProgress.vue';
import RoundedProgress from '@/components/progress/progress_linear/RoundedProgress.vue';
import StreamProgress from '@/components/progress/progress_linear/StreamProgress.vue';
import StripedProgress from '@/components/progress/progress_linear/StripedProgress.vue';
import DefaultProgress from '@/components/progress/progress_linear/DefaultProgress.vue';
import DeterminateProgress from '@/components/progress/progress_linear/DeterminateProgress.vue';
import FileLoaderProgress from '@/components/progress/progress_linear/FileLoaderProgress.vue';
import ToolbarProgress from '@/components/progress/progress_linear/ToolbarProgress.vue';

export default {
  name: 'ProgressLinear',
  components: {
    BufferValueProgress,
    ColorsProgress,
    IndeterminateProgress,
    QueryProgress,
    ReversedProgress,
    RoundedProgress,
    StreamProgress,
    StripedProgress,
    DefaultProgress,
    DeterminateProgress,
    FileLoaderProgress,
    ToolbarProgress
  },
};
</script>
