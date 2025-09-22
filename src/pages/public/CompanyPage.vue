<script setup>
	import CardList from "@/segments/CardList/CardList.vue";
	import { cardDataset } from "@/utils/card";
	import { onMounted, ref } from "vue";

	const cardList = ref(cardDataset);

	onMounted(() => {
		console.log("Карточки загружены:", cardList.value);
	});
</script>

<template>
	<div class="company-page">
		<h1>О Компании</h1>
		<CardList :cardList="cardList" />
	</div>
</template>

<style scoped>
	

	
</style>

