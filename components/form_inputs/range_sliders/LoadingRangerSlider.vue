<template>
	<v-container>
		<v-card class="ma-2 pa-2">
			<v-text-field label="Loader height" v-model="height" type="number" max="500" min="0"/>
			<v-color-picker v-model="loadingColor"/>
		</v-card>
		<v-range-slider min="-50" max="50" :value="[-25, 25]" :loader-height="height" :loading="loadingColor"/>
	</v-container>
</template>
<script>
	export default {
	name: 'LoadingRangerSlider',
	data: () => ({
	height: 10,
	loadingColor: "Red",
	}),
	};
</script>
