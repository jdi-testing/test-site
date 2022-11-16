<template>
	<v-container>
		<v-subheader>Label</v-subheader>
		<v-range-slider max="50" min="-50" label="lableText" :value="[-25, 25]"/>
		<v-subheader>Inverse label</v-subheader>
		<v-range-slider max="50" min="-50" label="inverselableText" :value="[-25, 25]" inverse-label/>
	</v-container>
</template>
