<template>
	<v-container>
		<v-subheader>append icon</v-subheader>
		<v-range-slider max="50" min="-50" :value="[-25, 25]" append-icon="mdi-map-marker"/>
		<v-subheader>prepend icon</v-subheader>
		<v-range-slider max="50" min="-50" :value="[-25, 25]" prepend-icon="mdi-magnify"/>
	</v-container>
</template>
