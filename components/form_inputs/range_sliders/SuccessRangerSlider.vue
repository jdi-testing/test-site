<template>
	<v-container>
		<v-range-slider max="50" min="-50" :value="[-25, 25]"
		:success-messages="[successText1, successText2,successText3,successText4,successText5]"
		:error-count="messageCount"
		:hide-details="isDetailsHidden"
		/>

		<v-card class="ma-2 pa-2">
			<v-switch label="Hide details" v-model="isDetailsHidden"/>
			<v-text-field label="Success count" v-model="messageCount" type="number" min="0" max="5"/>
			<v-text-field v-model="successText1" label="Success messages 1"/>
			<v-text-field v-model="successText2" label="Success messages 2"/>
			<v-text-field v-model="successText3" label="Success messages 3"/>
			<v-text-field v-model="successText4" label="Success messages 4"/>
			<v-text-field v-model="successText5" label="Success messages 5"/>
		</v-card>
	</v-container>
</template>
<script>
	export default {
	name: 'SuccessRangerSlider',
	data: () => ({
	messageCount: 3,
	isDetailsHidden: false,
	isSuccess: false,
	successText1: "SuccessText1",
	successText2: "SuccessText2",
	successText3: "SuccessText3",
	successText4: "SuccessText4",
	successText5: "SuccessText5",
	}),
	};
</script>
