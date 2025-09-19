<script setup>
	import UiButton from "@/shared/Ui/UiButton/UiButton.vue";
	import UiInput from "../shared/Ui/UiInput/UiInput.vue";
	import { ref } from "vue";

	const emits = defineEmits(["handlerClick"]);
	const props = defineProps({
		msg: String,
		count: Number,
	});

	const handlerClick = () => {
		emits("handlerClick");
	};

	const nameValue = ref("");
  const phoneValue = ref("");
  const emailValue = ref("");
  const passwordValue = ref("");
	function handleInput(value) {
		console.log("Input value:", value);
	}
</script>

<template>
  <div class="form">
    <div class="input-wrapper">
      <UiInput
        :label="'Введите Ваше имя'"
        :id="'inputName'"
        :inpClass="'inputName'"
        v-model="nameValue"
        :verified="false"
        @input="handleInput"
        placeholder=" "/>
    </div>
     <div class="input-wrapper">
       <UiInput
         :label="'Введите Ваш телефон'"
         :inpClass="'inputPhone'"
         v-model="phoneValue"
         :verified="true"
         @input="handleInput"
       />
     </div>
     <div class="input-wrapper">
       <UiInput
         :label="'Введите Ваш email'"
         v-model="emailValue"
         :verified="true"
         :inpClass="'inputEmail'"
         :affected="true"
         @input="handleInput"
         :type="'email'"
       />
     </div>
     <div class="input-wrapper">
       <UiInput
         :label="'Пароль'"
         v-model="passwordValue"
         :verified="false"
         :inpClass="'inputPassword'"
         :affected="false"
         :changedType="true"
         @input="handleInput"
         :type="'password'"
       />
     </div>
  </div>

	<p style="font-size: 30px">{{ props.msg }}</p>
	<p style="font-size: 30px">{{ props.count }}</p>

	<UiButton @handlerClick="handlerClick"> Перейти в каталог </UiButton>
</template>

<style scoped>
.input-wrapper{
  margin-bottom: 28px;
}
.form {
  background: white;
  padding: 8px;
}
	.read-the-docs {
		color: #888;
	}
</style>
