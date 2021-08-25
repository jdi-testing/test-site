<template>
    <v-container>
        <v-col>
            <h1>Date pickers</h1>
        </v-col>

        <v-col>
            <p class="text-h5">
                Allowed dates date picker
            </p>
            <AllowedDatesDatePicker id="AllowedDatesDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Colors date picker
            </p>
            <ColorsDatePicker id="ColorsDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Elevation date picker
            </p>
            <ElevationDatePicker id="ElevationDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icons date picker
            </p>
            <IconsDatePicker id="IconsDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Multiple date picker
            </p>
            <MultipleDatePicker id="MultipleDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Picker date date picker
            </p>
            <PickerDateDatePicker id="PickerDateDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Range date picker
            </p>
            <RangeDatePicker id="RangeDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Readonly date picker
            </p>
            <ReadonlyDatePicker id="ReadonlyDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Show current date picker
            </p>
            <ShowCurrentDatePicker id="ShowCurrentDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Show sibling months date picker
            </p>
            <ShowSiblingMonthsDatePicker id="ShowSiblingMonthsDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Width date picker
            </p>
            <WidthDatePicker id="WidthDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Date buttons date picker
            </p>
            <DateButtonsDatePicker id="DateButtonsDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Date events date picker
            </p>
            <DateEventsDatePicker id="DateEventsDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Active picker date picker
            </p>
            <ActivePickerDatePicker id="ActivePickerDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Dialog and menu date picker
            </p>
            <DialogAndMenuDatePicker id="DialogAndMenuDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Formatting date picker
            </p>
            <FormattingDatePicker id="FormattingDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Formatting with external libraries date picker
            </p>
            <FormattingWithExternalLibrariesDatePicker id="FormattingWithExternalLibrariesDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Internationalization date picker
            </p>
            <InternationalizationDatePicker id="InternationalizationDatePicker" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Orientation date picker
            </p>
            <OrientationDatePicker id="OrientationDatePicker" />
        </v-col>

    </v-container>
</template>

<script>
import AllowedDatesDatePicker from '@/components/pickers/date_pickers/AllowedDatesDatePicker.vue';
import ColorsDatePicker from '@/components/pickers/date_pickers/ColorsDatePicker.vue';
import ElevationDatePicker from '@/components/pickers/date_pickers/ElevationDatePicker.vue';
import IconsDatePicker from '@/components/pickers/date_pickers/IconsDatePicker.vue';
import MultipleDatePicker from '@/components/pickers/date_pickers/MultipleDatePicker.vue';
import PickerDateDatePicker from '@/components/pickers/date_pickers/PickerDateDatePicker.vue';
import RangeDatePicker from '@/components/pickers/date_pickers/RangeDatePicker.vue';
import ReadonlyDatePicker from '@/components/pickers/date_pickers/ReadonlyDatePicker.vue';
import ShowCurrentDatePicker from '@/components/pickers/date_pickers/ShowCurrentDatePicker.vue';
import ShowSiblingMonthsDatePicker from '@/components/pickers/date_pickers/ShowSiblingMonthsDatePicker.vue';
import WidthDatePicker from '@/components/pickers/date_pickers/WidthDatePicker.vue';
import DateButtonsDatePicker from '@/components/pickers/date_pickers/DateButtonsDatePicker.vue';
import DateEventsDatePicker from '@/components/pickers/date_pickers/DateEventsDatePicker.vue';
import ActivePickerDatePicker from '@/components/pickers/date_pickers/ActivePickerDatePicker.vue';
import DialogAndMenuDatePicker from '@/components/pickers/date_pickers/DialogAndMenuDatePicker.vue';
import FormattingDatePicker from '@/components/pickers/date_pickers/FormattingDatePicker.vue';
import FormattingWithExternalLibrariesDatePicker from '@/components/pickers/date_pickers/FormattingWithExternalLibrariesDatePicker.vue';
import InternationalizationDatePicker from '@/components/pickers/date_pickers/InternationalizationDatePicker.vue';
import OrientationDatePicker from '@/components/pickers/date_pickers/OrientationDatePicker.vue';

export default {
  name: 'DatePickers',
  components: {
    AllowedDatesDatePicker,
    ColorsDatePicker,
    ElevationDatePicker,
    IconsDatePicker,
    MultipleDatePicker,
    PickerDateDatePicker,
    RangeDatePicker,
    ReadonlyDatePicker,
    ShowCurrentDatePicker,
    ShowSiblingMonthsDatePicker,
    WidthDatePicker,
    DateButtonsDatePicker,
    DateEventsDatePicker,
    ActivePickerDatePicker,
    DialogAndMenuDatePicker,
    FormattingDatePicker,
    FormattingWithExternalLibrariesDatePicker,
    InternationalizationDatePicker,
    OrientationDatePicker,
  },
};
</script>
