<template>
  <v-row justify="space-around">
    <v-col cols="12" sm="10" md="8">
      <v-sheet elevation="10" class="py-4 px-1">
        <v-chip-group
          :dark="isDarkTheme"
          :center-active="isActiveCentered"
          :show-arrows="showArrows"
          :max="maxSelectedAmount"
          multiple
          active-class="primary--text"
          :prev-icon="previousIcon"
          :next-icon="nextIcon"
        >
          <v-chip v-for="tag in tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
      <div>
        <p class="text-h5 mt-3">Settings</p>
        <v-row>
          <v-col>
            <v-switch v-model="isDarkTheme" label="Dark theme"></v-switch>
            <v-switch
              v-model="isActiveCentered"
              label="Center active"
            ></v-switch>
            <v-switch v-model="showArrows" label="Show arrows"></v-switch>
          </v-col>
          <v-col>
            <v-text-field
              type="number"
              label="Max selected amount"
              v-model="maxSelectedAmount"
            />
             <v-select v-model="previousIcon" label="previous icon" :items="previousIcons" />
             <v-select v-model="nextIcon" label="next icon" :items="nextIcons" />
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],
    isDarkTheme: false,
    isActiveCentered: false,
    showArrows: false,
    maxSelectedAmount: 1,
    previousIcon: 'mdi-menu-left',
    nextIcon: 'mdi-menu-right',
    previousIcons: [
        'mdi-menu-left',
        'mdi-arrow-left',
        'mdi-chevron-left',
        'mdi-arrow-left-thick',
        'mdi-arrow-left-circle-outline'
    ],
    nextIcons: [
        'mdi-menu-right',
        'mdi-arrow-right',
        'mdi-chevron-right',
        'mdi-arrow-right-thick',
        'mdi-arrow-right-circle-outline'
    ]
  }),
};
</script>
