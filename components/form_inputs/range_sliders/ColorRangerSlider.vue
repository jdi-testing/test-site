<template>
	<div>
	<v-row class="justify-space-around">
		<v-range-slider :color="color" min="-50" max="50" :value="[-25, 25]"/>
		<v-card class="ma-2">
			<v-color-picker v-model="color"/>
		</v-card>
	</v-row>
</div>
</template>
<script>
	export default {
	name: 'AdjustableRangerSliders',
	data: () => ({
	color: "Orange",
	}),
	};
</script>
