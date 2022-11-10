<template>
	<v-container>
		<v-range-slider max="50" min="-50" :value="[-25, 25]" :error-messages="[defaultText1, defaultText2,defaultText3,defaultText4,defaultText5]" :error-count="errorCount" :hide-details="isDetailsHidden"/>
			<v-card class="ma-2 pa-2">
			    <v-switch label="Hide errors" v-model="isDetailsHidden" class="ma-0 ml-5"/>
				<v-text-field label="Error count" v-model="errorCount" type="number" min="0" max="5"/>

				<v-text-field v-model="defaultText1" label="Error messages 1"/>
				<v-text-field v-model="defaultText2" label="Error messages 2"/>
				<v-text-field v-model="defaultText3" label="Error messages 3"/>
				<v-text-field v-model="defaultText4" label="Error messages 4"/>
				<v-text-field v-model="defaultText5" label="Error messages 5"/>
			</v-card>
	</v-container>
</template>
<script>
	export default {
	name: 'ErrorsRangerSlider',
	data: () => ({
	errorCount: 1,
	isDetailsHidden: false,
	defaultText1: "errorText1",
	defaultText2: "errorText2",
	defaultText3: "errorText3",
	defaultText4: "errorText4",
	defaultText5: "errorText5",
	}),
	};
</script>
