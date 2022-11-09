<template>
	<div>
		<v-range-slider :dark="isDarkTheme" min="-50" max="50" :value="[-25, 25]" hint="Some hint" :hide-details="isDetailsHidden" :error="isError" :background-color="backgroundColor" :color="color" :track-color="trackColor" :track-fill-color="trackFillColor" :thumb-color="thumbColor"/>
		<p class="text-h5">Settings</p>
		<v-row class="justify-space-around">
			<v-card class="d-flex ma-2">
				<v-subheader>Dark theme</v-subheader>
				<v-switch v-model="isDarkTheme" class="ma-0 ml-5"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Hide details</v-subheader>
				<v-switch v-model="isDetailsHidden" class="ma-0 ml-5"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Error</v-subheader>
				<v-switch v-model="isError" class="ma-0 ml-5"/>
			</v-card>
		</v-row>
		<v-row class="justify-space-around">
			<v-card class="d-flex ma-2">
				<v-subheader>Background color</v-subheader>
				<v-color-picker v-model="backgroundColor"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Color</v-subheader>
				<v-color-picker v-model="color"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Track-color</v-subheader>
				<v-color-picker v-model="trackColor"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Track-fill-color</v-subheader>
				<v-color-picker v-model="trackFillColor"/>
			</v-card>
			<v-card class="d-flex ma-2">
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
	isDarkTheme: false,
	isDetailsHidden: false,
	isError: false,
	backgroundColor: "Blue",
	color: "Orange",
	trackColor: "Green",
	trackFillColor: "Yellow",
	thumbColor: "Red",
	}),
	};
</script>
