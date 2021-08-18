<template>
    <v-container>
        <v-col>
            <h1>Sparklines</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Fill sparkline
            </p>
            <FillSparkline id="FillSparkline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Custom labels sparkline
            </p>
            <CustomLabelsSparkline id="CustomLabelsSparkline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dashboard card sparkline
            </p>
            <DashboardCardSparkline id="DashboardCardSparkline" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Heart rate sparkline
            </p>
            <HeartRateSparkline id="HeartRateSparkline" />
        </v-col>

    </v-container>
</template>

<script>
import FillSparkline from '@/components/sparklines/FillSparkline.vue';
import CustomLabelsSparkline from '@/components/sparklines/CustomLabelsSparkline.vue';
import DashboardCardSparkline from '@/components/sparklines/DashboardCardSparkline.vue';
import HeartRateSparkline from '@/components/sparklines/HeartRateSparkline.vue';

export default {
  name: 'Sparklines',
  components: {
    FillSparkline,
    CustomLabelsSparkline,
    DashboardCardSparkline,
    HeartRateSparkline,
  },
};
</script>
