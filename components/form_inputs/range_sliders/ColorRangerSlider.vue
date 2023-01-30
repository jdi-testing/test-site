<template>
	<div>
		<v-range-slider :color="color" min="-50" max="50" :value="[-25, 25]"/>
		<v-card class="ma-2">
			<v-color-picker v-model="picker"/>
		</v-card>
	</div>
</template>
<script>
	export default {
	name: 'ColorRangerSlider',
	data: () => ({
	color: "Orange",
	}),
	};
</script>
