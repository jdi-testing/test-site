<template>
    <v-container>
        <v-col>
            <h1>Date pickers - month</h1>
            <p class="body-1 mt-2">
             <code>v-date-picker</code> can be used as a standalone month picker component.
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Allowed month
            </p>
            <AllowedMonthPicker id="AllowedMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Colors
            </p>
            <ColorsMonthPicker id="ColorsMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Icons
            </p>
            <IconsMonthPicker id="IconsMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Multiple
            </p>
            <MultipleMonthPicker id="MultipleMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Readonly
            </p>
            <ReadonlyMonthPicker id="ReadonlyMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Show current
            </p>
            <ShowCurrentMonthPicker id="ShowCurrentMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Width
            </p>
            <WidthMonthPicker id="WidthMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Dialog and Menu
            </p>
            <DialogMenuMonthPicker id="DialogMenuMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Internationalization
            </p>
            <InternationalizationMonthPicker id="InternationalizationMonthPicker" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Orientation
            </p>
            <OrientationMonthPicker id="OrientationMonthPicker" />
        </v-col>

    </v-container>
</template>
<script>
import AllowedMonthPicker from '@/components/date_pickers_month/AllowedMonthPicker.vue';
import ColorsMonthPicker from '@/components/date_pickers_month/ColorsMonthPicker.vue';
import IconsMonthPicker from '@/components/date_pickers_month/IconsMonthPicker.vue';
import MultipleMonthPicker from '@/components/date_pickers_month/MultipleMonthPicker.vue';
import ReadonlyMonthPicker from '@/components/date_pickers_month/ReadonlyMonthPicker.vue';
import ShowCurrentMonthPicker from '@/components/date_pickers_month/ShowCurrentMonthPicker.vue';
import WidthMonthPicker from '@/components/date_pickers_month/WidthMonthPicker.vue';
import DialogMenuMonthPicker from '@/components/date_pickers_month/DialogMenuMonthPicker.vue';
import InternationalizationMonthPicker from '@/components/date_pickers_month/InternationalizationMonthPicker.vue';
import OrientationMonthPicker from '@/components/date_pickers_month/OrientationMonthPicker.vue';

export default {
  name: 'DatePickerMonth',
  components: {
    AllowedMonthPicker,
    ColorsMonthPicker,
    IconsMonthPicker,
    MultipleMonthPicker,
    ReadonlyMonthPicker,
    ShowCurrentMonthPicker,
    WidthMonthPicker,
    DialogMenuMonthPicker,
    InternationalizationMonthPicker,
    OrientationMonthPicker
  },
};
</script>
