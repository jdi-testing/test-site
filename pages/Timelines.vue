<template>
    <v-container>
        <v-col>
            <h1>Timelines</h1>
            <p class="body-1 mt-2">
                The <code>v-timeline</code> is useful for stylistically displaying chronological information.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Color timeline
            </p>
            <ColorTimeline id="ColorTimeline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dense timeline
            </p>
            <DenseTimeline id="DenseTimeline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icon dots timeline
            </p>
            <IconDotsTimeline id="IconDotsTimeline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Reverse timeline
            </p>
            <ReverseTimeline id="ReverseTimeline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Small timeline
            </p>
            <SmallTimeline id="SmallTimeline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icon timeline
            </p>
            <IconTimeline id="IconTimeline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Opposite timeline
            </p>
            <OppositeTimeline id="OppositeTimeline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Timeline item default timeline
            </p>
            <TimelineItemDefaultTimeline id="TimelineItemDefaultTimeline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Advanced timeline
            </p>
            <AdvancedTimeline id="AdvancedTimeline" />
        </v-col>

    </v-container>
</template>

<script>
import ColorTimeline from '@/components/timelines/ColorTimeline.vue';
import DenseTimeline from '@/components/timelines/DenseTimeline.vue';
import IconDotsTimeline from '@/components/timelines/IconDotsTimeline.vue';
import ReverseTimeline from '@/components/timelines/ReverseTimeline.vue';
import SmallTimeline from '@/components/timelines/SmallTimeline.vue';
import IconTimeline from '@/components/timelines/IconTimeline.vue';
import OppositeTimeline from '@/components/timelines/OppositeTimeline.vue';
import TimelineItemDefaultTimeline from '@/components/timelines/TimelineItemDefaultTimeline.vue';
import AdvancedTimeline from '@/components/timelines/AdvancedTimeline.vue';

export default {
  name: 'Timelines',
  components: {
    ColorTimeline,
    DenseTimeline,
    IconDotsTimeline,
    ReverseTimeline,
    SmallTimeline,
    IconTimeline,
    OppositeTimeline,
    TimelineItemDefaultTimeline,
    AdvancedTimeline,
  },
};
</script>
