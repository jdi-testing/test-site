<template>
	<v-container>
		<v-range-slider max="50" min="-50" :value="[-25, 25]" :validate-on-blur="validateOnBlur" :rules="[(value) => value[0] => ruleMin || 'some error', (value) => value[1] <= ruleMax || 'some error']" :thumb-label="always"/><v-card class="ma-2">
			<v-subheader>Rules</v-subheader>
			<v-text-field label="max" v-model="ruleMax type="number" max="50" min="-50""/>
			<v-text-field label="min" v-model="ruleMin
			type="number" max="50" min="-50""/>
			<v-switch label="Validate on blur" v-model="validateOnBlur"/>
		</v-card>
	</v-container>
</template>
<script>
	export default {
	name: 'RuleRangerSlider',
	data: () => ({
	ruleMax: 50,
	ruleMin: -50,
	validateOnBlur: false,
	}),
	};
</script>
