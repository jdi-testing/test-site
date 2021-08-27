<template>
    <v-container>
        <v-col>
            <h1>Calendars</h1>
            <p class="body-1 mt-2">
                The <code>v-calendar</code> component is used to display information in a daily, weekly, monthly, 
                or category view. The daily view has slots for all day or timed elements, and the weekly and monthly 
                view has a slot for each day. The category view has a slot for each category in the day and timed 
                sections based on the categories given or the categories in the given events. 
                Optionally you can pass in an array of events and they will be rendered over the appropriate days and times.
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Type category calendar
            </p>
            <TypeCategoryCalendar id="TypeCategoryCalendar" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Type day calendar
            </p>
            <TypeDayCalendar id="TypeDayCalendar" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Type week calendar
            </p>
            <TypeWeekCalendar id="TypeWeekCalendar" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Events click calendar
            </p>
            <EventsClickCalendar id="EventsClickCalendar" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Slots day calendar
            </p>
            <SlotsDayCalendar id="SlotsDayCalendar" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Slots day body calendar
            </p>
            <SlotsDayBodyCalendar id="SlotsDayBodyCalendar" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Misc drag and drop calendar
            </p>
            <MiscDragAndDropCalendar id="MiscDragAndDropCalendar" />
        </v-col>

    </v-container>
</template>

<script>

import TypeCategoryCalendar from '@/components/calendars/TypeCategoryCalendar.vue';
import TypeDayCalendar from '@/components/calendars/TypeDayCalendar.vue';
import TypeWeekCalendar from '@/components/calendars/TypeWeekCalendar.vue';
import EventsClickCalendar from '@/components/calendars/EventsClickCalendar.vue';
import SlotsDayCalendar from '@/components/calendars/SlotsDayCalendar.vue';
import SlotsDayBodyCalendar from '@/components/calendars/SlotsDayBodyCalendar.vue';
import MiscDragAndDropCalendar from '@/components/calendars/MiscDragAndDropCalendar.vue';

export default {
  name: 'Calendars',
  components: {
    TypeCategoryCalendar,
    TypeDayCalendar,
    TypeWeekCalendar,
    EventsClickCalendar,
    SlotsDayCalendar,
    SlotsDayBodyCalendar,
    MiscDragAndDropCalendar,
  },
};
</script>
