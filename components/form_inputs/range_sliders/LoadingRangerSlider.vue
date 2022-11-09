<template>
	<div>
		<v-card class="d-flex ma-2">
			<v-text-field label="Loader height" v-model="loaderHeight" type="number" max="500" min="0" class="shrink" <v-color-picker v-model="loadingColor"/>/>
			</v-card>
			<v-range-slider :dark="isDarkTheme" min="-50" max="50" :value="[-25, 25]" :loader-height="loaderHeight" :loading="isLoading"/>
		</div>
	</template>
	<script>
		export default {
		name: 'LoadingRangerSlider',
		data: () => ({
		loaderHeight: 10,
		loadingColor: red,
		}),
		};
	</script>
