<script setup>
	import { computed, ref } from "vue";
	import iconError from "@/assets/icons/iconError.svg";
	import iconVerified from "@/assets/icons/iconVerified.svg";
	import iconEye from "@/assets/icons/iconEye.svg";
	import iconEyeOff from "@/assets/icons/iconEyeOff.svg";

	const props = defineProps({
		modelValue: {
			type: String,
			default: "",
		},
		label: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			default: "text",
		},
		id: String,
		inpClass: String,
		placeholder: {
			type: String,
			default: "",
		},
		verified: {
			type: Boolean,
			default: false,
		},
		affected: {
			type: Boolean,
			default: false,
		},
		changedType: {
			type: Boolean,
			default: false,
		},
	});

	const emit = defineEmits(["update:modelValue", "input"]);

	const isPasswordVisible = ref(false);

	const inputType = computed(() => {
		if (props.changedType) {
			return isPasswordVisible.value ? "text" : "password";
		}
		return props.type;
	});

	const inputValue = computed({
		get: () => props.modelValue,
		set: (value) => {
			emit("update:modelValue", value);
			emit("input", value);
		},
	});

	const hasValue = computed(() => props.modelValue.length > 0);

	const borderClass = computed(() => {
		if (!props.verified) return "";
		return props.affected ? "checked" : "unchecked";
	});

	const togglePasswordVisibility = () => {
		isPasswordVisible.value = !isPasswordVisible.value;
	};
</script>

<template>
	<div class="inputDiv" :class="borderClass">
      
		<template v-if="props.verified">
			<div class="icon-group">
				<img :src="iconError" alt="Error" v-if="!props.affected" />
				<img :src="iconVerified" alt="Verified" v-if="props.affected" />
			</div>
		</template>

		<template v-if="props.changedType">
			<div class="icon-group">
				<img
					style="cursor: pointer"
					:src="iconEyeOff"
					alt="Hide password"
					v-if="isPasswordVisible"
					@click="togglePasswordVisibility" />
				<img
					style="cursor: pointer"
					:src="iconEye"
					alt="Show password"
					v-else
					@click="togglePasswordVisibility" />
			</div>
		</template>

		<label
			v-if="props.label"
			:for="props.id"
			:class="{ 'label--floating': hasValue }">
			{{ props.label }}
		</label>

		<input
			:class="['input', props.inpClass]"
			:type="inputType"
			:id="props.id"
			:placeholder="props.placeholder"
			v-model="inputValue" />

		<template v-if="props.verified">
			<div class="affect unaffected" v-if="!props.affected">Не подтверждено</div>
			<div class="affect affected" v-if="props.affected">Подтверждено</div>
		</template>

	</div>
</template>

<style scoped>
	.inputDiv {
		position: relative;
		background-color: rgba(221, 225, 230, 1);
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 60px;
		padding: 0 16px;
		transition: all 0.3s ease;
		border: 1px solid rgb(166, 194, 227);
	}
	.inputDiv.checked {
		border-color: #6fbd15;
	}
	.inputDiv.unchecked {
		border-color: #f10b34;
	}

	.icon-group {
		position: absolute;
		top: 50%;
		right: 16px;
		transform: translateY(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.input {
		width: 100%;
		min-width: 100px;
		height: 20px;
		background-color: transparent;
		border: 0;
		outline: none;
		color: rgba(32, 54, 134, 1);
		font-size: 16px;
		padding: 0;
		margin-top: 8px;
	}

	.input:focus {
		outline: none;
	}

	label {
		position: absolute;
		top: 12px;
		left: 16px;
		color: rgba(60, 60, 67, 0.3);
		font-size: 16px;
		line-height: 120%;
		transition: all 0.3s ease;
		pointer-events: none;
	}

	.label--floating {
		top: 8px;
		font-size: 12px;
		color: rgba(60, 60, 67, 0.6);
	}

	.input:focus + label,
	.input:not(:placeholder-shown) + label {
		top: 8px;
		font-size: 12px;
		color: rgba(60, 60, 67, 0.6);
	}
	.affect {
		position: absolute;
		bottom: -22.5px;
		font-size: 12px;
		line-height: 120%;
	}
	.affect.unaffected {
		color: #f10b34;
	}
	.affect.affected {
		color: #6fbd15;
	}
</style>

