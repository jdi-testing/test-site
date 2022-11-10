<template>
	<div>

			<v-card class="pa-10 ma-10">
        		<v-range-slider :dark="isDarkTheme" min="-50" max="50" :value="[-25, 25]" :hide-details="isDetailsHidden" :error="isError" :background-color="backgroundColor" :track-color="trackColor" :track-fill-color="trackFillColor" :thumb-color="thumbColor"
        		:height="height"
        		:loader-height="loaderHeight"
        		:loading="isLoading"
        		:disabled="isDisabled"x
        		:messages="[messageText1,messageText2,messageText3,messageText4,messageText5]"
        		:error-count="messagesCount"
        		:readonly="readonly"
        		/>
        					</v-card>
<v-row class="justify-space-around">
			<v-card class="d-flex ma-2">
				<v-subheader>Disabled</v-subheader>
				<v-switch v-model="isDisabled"/>
			</v-card>
			<v-card class="d-flex ma-2">
				<v-subheader>Readonly</v-subheader>
				<v-switch v-model="readonly"/>
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
        			<v-card class="ma-2 pa-2">

        							<v-text-field label="Message count height" v-model="messagesCount" type="number" max="5"min="0"/>

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
	backgroundColor: '#428EDA',
	trackColor: '#17DF2C',
	trackFillColor: '#B51CF6',
	thumbColor: '#E75E10',
	height: 50,
	loaderHeight: 10,
	messagesCount: 0,
	readonly: false,
	isLoading: false,
		messageText1: "Message 1",
    	messageText2: "Message 2",
    	messageText3: "Message 3",
    	messageText4: "Message 4",
    	messageText5: "Message 5",
	}),
	};
</script>
