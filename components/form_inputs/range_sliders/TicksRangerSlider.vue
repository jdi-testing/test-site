<template>
	<v-container>
		<v-range-slider max="2" min="-2" :value="[-1, 1]"

	ticks="always"
		:tick-size="tickSize"
		:tick-labels="[defaultText1, defaultText2,defaultText3,defaultText4,defaultText5]"
		/>


		<v-card class="ma-2 pa-2">
			<v-text-field label="Ticks size" v-model="tickSize" type="number" min="0" max="500"/>
			<v-text-field v-model="defaultText1" label="Tick text 1"/>
			<v-text-field v-model="defaultText2" label="Tick text 2"/>
			<v-text-field v-model="defaultText3" label="Tick text 3"/>
			<v-text-field v-model="defaultText4" label="Tick text 4"/>
			<v-text-field v-model="defaultText5" label="Tick text 5"/>
		</v-card>
	</v-container>
</template>
<script>
	export default {
	name: 'TicksRangerSlider',
	data: () => ({
	defaultText1: "-2",
	defaultText2: "-1",
	defaultText3: "0",
	defaultText4: "1",
	defaultText5: "2",
	tickSize: 5,
	}),
	};
</script>
