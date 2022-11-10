<template>
  <v-container>
    <v-range-slider
      max="50"
      min="-50"
      :value="[-25, 25]"
      hint="Some hint"
      :persistent-hint=persistentHint
    ></v-range-slider>
        <v-switch
        label="Persistent hint"
          v-model="persistentHint"
        />
  </v-container>
</template>
<script>
	export default {
	name: 'HintRangerSlider',
	data: () => ({
persistentHint: false,
	}),
	};
</script>

