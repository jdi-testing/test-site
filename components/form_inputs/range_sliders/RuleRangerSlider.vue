<template>
	<v-container>
		<v-range-slider
		max="50"
		min="-50"
		:value="[-25, 25]"
		:rules="[(value) => value[0] >= ruleMin || 'some error', (value) => value[1] <= ruleMax || 'some error']"
		:validate-on-blur="validateOnBlur"
		thumb-label="always"
		/>

				<v-card class="ma-2">
        			<v-subheader>Rules</v-subheader>
        			<v-text-field label="Max value" v-model="ruleMax" type="number" max="50" min="-50"/>

        			<v-text-field label="Min value" v-model="ruleMin" type="number" max="50" min="-50"/>
        			<v-switch label="Validate on blur" v-model="validateOnBlur"/>
        		</v-card>
	</v-container>
</template>
<script>
	export default {
	name: 'RuleRangerSlider',
	data: () => ({
	ruleMax: 25,
	ruleMin: -25,
	validateOnBlur: false,
	}),
	};
</script>

