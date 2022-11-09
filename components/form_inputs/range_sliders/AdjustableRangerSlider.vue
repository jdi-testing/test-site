<template>
	<div>
		<v-range-slider :dark="isDarkTheme" min="-50" max="50" :value="[-25, 25]" hint="Some hint" :hide-details="isDetailsHidden" :error="isError" :background-color="backgroundColor" :track-color="trackColor" :track-fill-color="trackFillColor" :thumb-color="thumbColor"
		:height="height"
		:loader-height="loaderHeight"
		:loading="isLoading"
		:disabled="isDisabled"
		/>
		<p class="text-h5">Settings</p>
		<v-row class="justify-space-around">
			<v-card class="d-flex ma-2">
				<v-subheader>Disabled</v-subheader>
				<v-switch v-model="isDisabled"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Dark theme</v-subheader>
				<v-switch v-model="isDarkTheme"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Hide details</v-subheader>
				<v-switch v-model="isDetailsHidden"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Error</v-subheader>
				<v-switch v-model="isError"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Height</v-subheader>
				<v-text-field label="Height" v-model="height" type="number" min="0" class="shrink"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Loader height</v-subheader>
				<v-text-field label="Loader height" v-model="loaderHeight" type="number" max="50"min="0" class="shrink"/>
				<v-switch v-model="isLoading"/>
			</v-card>
		</v-row>
		<v-row class="justify-space-around">
			<v-card class="ma-2">
				<v-subheader>Background color</v-subheader>
				<v-color-picker v-model="backgroundColor"/>
			</v-card>
			<v-card class="ma-2">
				<v-subheader>Track-color</v-subheader>
				<v-color-picker v-model="trackColor"/>
			</v-card>
			<v-card class="ma-2">
				<v-subheader>Track-fill-color</v-subheader>
				<v-color-picker v-model="trackFillColor"/>
			</v-card>
			<v-card class="ma-2">
				<v-subheader>Thumb-color</v-subheader>
				<v-color-picker v-model="thumbColor"/>
			</v-card>
		</v-row>
	</div>
</template>
<script>
	export default {
	name: 'AdjustableRangerSliders',
	data: () => ({
	isDisabled: false,
	isDarkTheme: false,
	isDetailsHidden: false,
	isError: false,
	backgroundColor: "Blue",
	trackColor: "Green",
	trackFillColor: "Purple",
	thumbColor: "Red",
	height: 50,
	loaderHeight: 10,
	isLoading: false,
	}),
	};
</script>
