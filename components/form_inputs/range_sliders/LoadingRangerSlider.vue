<template>
	<div>
		<v-range-slider :dark="isDarkTheme" min="-50" max="50" :value="[-25, 25]" :loader-height="loaderHeight" loading
		/>
		<v-card class="ma-2">
			<v-text-field label="Loader height" v-model="loaderHeight" type="number" max="500" min="0"/>
			<v-color-picker v-model="loadingColor"/>
		</v-card>

	</div>
</template>
<script>
	export default {
	name: 'LoadingRangerSlider',
	data: () => ({
	loaderHeight: 50,
	loadingColor: red,
	}),
	};
</script>
