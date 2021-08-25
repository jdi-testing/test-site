<template>
    <v-container>
        <v-col>
            <h1>Time pickers</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Allowed times time picker
            </p>
            <AllowedTimesTimePicker id="AllowedTimesTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                AMPM in title time picker
            </p>
            <AMPMInTitleTimePicker id="AMPMInTitleTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Colors time picker
            </p>
            <ColorsTimePicker id="ColorsTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled time picker
            </p>
            <DisabledTimePicker id="DisabledTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Elevation time picker
            </p>
            <ElevationTimePicker id="ElevationTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Format time picker
            </p>
            <FormatTimePicker id="FormatTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                No title time picker
            </p>
            <NoTitleTimePicker id="NoTitleTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Range time picker
            </p>
            <RangeTimePicker id="RangeTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Read-only time picker
            </p>
            <ReadOnlyTimePicker id="ReadOnlyTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Scrollable time picker
            </p>
            <ScrollableTimePicker id="ScrollableTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Use seconds time picker
            </p>
            <UseSecondsTimePicker id="UseSecondsTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Width time picker
            </p>
            <WidthTimePicker id="WidthTimePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dialog and menu time picker
            </p>
            <DialogAndMenuTimePicker id="DialogAndMenuTimePicker" />
        </v-col>

    </v-container>
</template>

<script>
import AllowedTimesTimePicker from '@/components/pickers/time_pickers/AllowedTimesTimePicker.vue';
import AMPMInTitleTimePicker from '@/components/pickers/time_pickers/AMPMInTitleTimePicker.vue';
import ColorsTimePicker from '@/components/pickers/time_pickers/ColorsTimePicker.vue';
import DisabledTimePicker from '@/components/pickers/time_pickers/DisabledTimePicker.vue';
import ElevationTimePicker from '@/components/pickers/time_pickers/ElevationTimePicker.vue';
import FormatTimePicker from '@/components/pickers/time_pickers/FormatTimePicker.vue';
import NoTitleTimePicker from '@/components/pickers/time_pickers/NoTitleTimePicker.vue';
import RangeTimePicker from '@/components/pickers/time_pickers/RangeTimePicker.vue';
import ReadOnlyTimePicker from '@/components/pickers/time_pickers/ReadOnlyTimePicker.vue';
import ScrollableTimePicker from '@/components/pickers/time_pickers/ScrollableTimePicker.vue';
import UseSecondsTimePicker from '@/components/pickers/time_pickers/UseSecondsTimePicker.vue';
import WidthTimePicker from '@/components/pickers/time_pickers/WidthTimePicker.vue';
import DialogAndMenuTimePicker from '@/components/pickers/time_pickers/DialogAndMenuTimePicker.vue';

export default {
  name: 'TimePickers',
  components: {
    AllowedTimesTimePicker,
    AMPMInTitleTimePicker,
    ColorsTimePicker,
    DisabledTimePicker,
    ElevationTimePicker,
    FormatTimePicker,
    NoTitleTimePicker,
    RangeTimePicker,
    ReadOnlyTimePicker,
    ScrollableTimePicker,
    UseSecondsTimePicker,
    WidthTimePicker,
    DialogAndMenuTimePicker,
  },
};
</script>
