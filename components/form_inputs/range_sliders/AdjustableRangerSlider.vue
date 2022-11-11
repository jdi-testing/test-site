<template>
	<div>
		<v-card class="pa-10 ma-10">
			<v-range-slider :dark="isDarkTheme" min="-50" max="50" :value="[-25, 25]" :hide-details="isDetailsHidden" :error="isError" :background-color="backgroundColor" :track-color="trackColor" :track-fill-color="trackFillColor" :thumb-color="thumbColor" :height="height" :loader-height="loaderHeight" :loading="isLoading" :disabled="isDisabled" x:messages="[messageText1,messageText2,messageText3,messageText4,messageText5]" :error-count="messagesCount" :readonly="readonly" :thumb-size="thumbSize" :thumb-label="thumbLabel" :success="isSuccess"
			:validate-on-blur="validateOnBlur"/>
		</v-card>
		<v-row class="justify-space-around">
			<v-card class="d-flex ma-2">
				<v-switch label="Disabled" v-model="isDisabled"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-switch label="Success" v-model="isSuccess"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-switch label="Readonly" v-model="readonly"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-switch label="Dark theme" v-model="isDarkTheme"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-switch label="Hide details" v-model="isDetailsHidden"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-switch label="Error" v-model="isError"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-switch label="Validate on blur" v-model="validateOnBlur"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-text-field label="Height" v-model="height" type="number" min="0" class="shrink"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-text-field label="Loader height" v-model="loaderHeight" type="number" max="50" min="0" class="shrink"/>
				<v-switch v-model="isLoading"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-text-field label="Thumb-size" v-model="thumbSize" type="number" max="100" min="0" class="shrink"/>
				<v-switch v-model="thumbLabel"/>
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
		<v-card class="ma-2 pa-2">
			<v-text-field label="Message count height" v-model="messagesCount" type="number" max="5" min="0"/>
			<v-text-field v-model="messageText1" label="Messages 1" class="shrink"/>
			<v-text-field v-model="messageText2" label="Messages 2" class="shrink"/>
			<v-text-field v-model="messageText3" label="Messages 3" class="shrink"/>
			<v-text-field v-model="messageText4" label="Messages 4" class="shrink"/>
			<v-text-field v-model="messageText5" label="Messages 5" class="shrink"/>
		</v-card>
	</div>
</template>
<script>
	export default {
	name: 'AdjustableRangerSlider',
	data: () => ({
	isDisabled: false,
	isDarkTheme: false,
	isDetailsHidden: false,
	isError: false,
	backgroundColor: '#F8F8F8',
	trackColor: '#84A8F2',
	trackFillColor: '#4980F1',
	thumbColor: '#0653F4',
	height: 50,
	loaderHeight: 10,
	thumbSize: 32,
	thumbLabel: 'always',
	messagesCount: 0,
	readonly: false,
	isLoading: false,
	messageText1: "Message 1",
	messageText2: "Message 2",
	messageText3: "Message 3",
	messageText4: "Message 4",
	messageText5: "Message 5",
	isSuccess: false,
	validateOnBlur: false,
	}),
	};
</script>
