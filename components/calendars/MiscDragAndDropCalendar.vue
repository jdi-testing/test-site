<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          color="primary"
          type="4day"
          :events="events"
          :event-color="getEventColor"
          :event-ripple="false"
          @mousedown:event="startDrag"
          @mousedown:time="startTime"
          @mousemove:time="mouseMove"
          @mouseup:time="endDrag"
          @mouseleave.native="cancelDrag"
        >
          <template v-slot:event="{ event, timed, eventSummary }">
            <div class="v-event-draggable">
              <component :is="{ render: eventSummary }" />
            </div>
            <div
              v-if="timed"
              class="v-event-drag-bottom"
              @mousedown.stop="extendBottom(event)"
            ></div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
const events = [
  {
    "name": "Conference",
    "color": "#FF9800",
    "start": [ 4, 45 ],
    "end": [ 5, 30 ],
  },
  {
    "name": "PTO",
    "color": "#00BCD4",
    "start": [ 10, 0 ],
    "end": [ 11, 15 ],
  },
  {
    "name": "Meeting",
    "color": "#3F51B5",
    "start": [ 14, 0 ],
    "end": [ 15, 30 ],
  },
  {
    "name": "Meeting",
    "color": "#673AB7",
    "start": [ 21, 15 ],
    "end": [ 22, 30 ],
  },
  {
    "name": "Holiday",
    "color": "#00BCD4",
    "start": [ 2, 30 ],
    "end": [ 3, 0 ],
  },
  {
    "name": "Event",
    "color": "#757575",
    "start": [ 7, 45 ],
    "end": [ 8, 45 ],
  },
  {
    "name": "Birthday",
    "color": "#757575",
    "start": [ 15, 0 ],
    "end": [ 16, 30 ],
  },
  {
    "name": "Party",
    "color": "#4CAF50",
    "start": [ 15, 15 ],
    "end": [ 18, 30 ],
  },
  {
    "name": "Travel",
    "color": "#4CAF50",
    "start": [ 1, 15 ],
    "end": [ 2, 0 ],
  },
  {
    "name": "Event",
    "color": "#673AB7",
    "start": [ 3, 30 ],
    "end": [ 5, 0 ],
  },
  {
    "name": "Event",
    "color": "#2196F3",
    "start": [ 16, 0 ],
    "end": [ 17, 0 ],
  },
  {
    "name": "Meeting",
    "color": "#FF9800",
    "start": [ 18, 0 ],
    "end": [ 19, 0 ],
  },
  {
    "name": "Travel",
    "color": "#673AB7",
    "start": [ 1, 15 ],
    "end": [ 2, 0 ],
  },
  {
    "name": "PTO",
    "color": "#3F51B5",
    "start": [ 2, 45 ],
    "end": [ 4, 0 ],
  },
  {
    "name": "Party",
    "color": "#4CAF50",
    "start": [ 10, 0 ],
    "end": [ 10, 45 ],
  },
  {
    "name": "Holiday",
    "color": "#00BCD4",
    "start": [ 21, 15 ],
    "end": [ 22, 30 ],
  }
];

const today = new Date().getDate();

const getTimeDate = (day, [hours, minutes]) => {
  const date = new Date();
  date.setDate(today + day);
  date.setHours(hours, minutes, 0);
  return date.getTime();
};

const formattedEvents = events.map((event, i) => ({
  ...event,
  timed: true,
  start: getTimeDate(Math.floor(i / 4), event.start),
  end: getTimeDate(Math.floor(i / 4), event.end)
}));

export default {
  data: () => ({
    value: '',
    events: formattedEvents,
    colors: ['#2196F3', '#3F51B5', '#673AB7', '#00BCD4', '#4CAF50', '#FF9800', '#757575'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null,
  }),
  methods: {
    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
      }
    },
    startTime(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime === null) {
        const { start } = this.dragEvent;

        this.dragTime = mouse - start;
      } else {
        this.createStart = this.roundTime(mouse);
        this.createEvent = {
          name: `Event #${this.events.length}`,
          color: this.rndElement(this.colors),
          start: this.createStart,
          end: this.createStart,
          timed: true,
        };

        this.events.push(this.createEvent);
      }
    },
    extendBottom(event) {
      this.createEvent = event;
      this.createStart = event.start;
      this.extendOriginal = event.end;
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime !== null) {
        const { start } = this.dragEvent;
        const { end } = this.dragEvent;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = this.roundTime(newStartTime);
        const newEnd = newStart + duration;

        this.dragEvent.start = newStart;
        this.dragEvent.end = newEnd;
      } else if (this.createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false);
        const min = Math.min(mouseRounded, this.createStart);
        const max = Math.max(mouseRounded, this.createStart);

        this.createEvent.start = min;
        this.createEvent.end = max;
      }
    },
    endDrag() {
      this.dragTime = null;
      this.dragEvent = null;
      this.createEvent = null;
      this.createStart = null;
      this.extendOriginal = null;
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal;
        } else {
          const i = this.events.indexOf(this.createEvent);
          if (i !== -1) {
            this.events.splice(i, 1);
          }
        }
      }

      this.createEvent = null;
      this.createStart = null;
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 15; // minutes
      const roundDownTime = roundTo * 60 * 1000;

      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime));
    },
    toTime(tms) {
      return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime();
    },
    getEventColor(event) {
      const rgb = parseInt(event.color.substring(1), 16);
      const r = (rgb >> 16) & 0xFF;
      const g = (rgb >> 8) & 0xFF;
      const b = (rgb >> 0) & 0xFF;

      return event === this.dragEvent
        ? `rgba(${r}, ${g}, ${b}, 0.7)`
        : event === this.createEvent
          ? `rgba(${r}, ${g}, ${b}, 0.7)`
          : event.color;
    },
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`).getTime();
      const max = new Date(`${end.date}T23:59:59`).getTime();
      const days = (max - min) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const timed = this.rnd(0, 3) !== 0;
        const firstTimestamp = this.rnd(min, max);
        const secondTimestamp = this.rnd(2, timed ? 8 : 288) * 900000;
        const start = firstTimestamp - (firstTimestamp % 900000);
        const end = start + secondTimestamp;

        events.push({
          name: this.rndElement(this.names),
          color: this.rndElement(this.colors),
          start,
          end,
          timed,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    rndElement(arr) {
      return arr[this.rnd(0, arr.length - 1)];
    },
  },
};
</script>
<style scoped lang="scss">
.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
  -webkit-user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: '';
  }

  &:hover::after {
    display: block;
  }
}
</style>
