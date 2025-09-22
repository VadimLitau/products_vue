<script setup>
	import Card from "@/segments/Card/Card.vue";
	import { ref } from "vue";

	defineProps({
		cardList: {
			type: Array,
			required: true,
		},
	});

	const activeCardState = ref({ cardId: null, buttonIndex: null });

	const setActiveButton = (cardId, buttonIndex) => {
		if (
			activeCardState.value.cardId === cardId &&
			activeCardState.value.buttonIndex === buttonIndex
		) {
			activeCardState.value = { cardId: null, buttonIndex: null };
		} else {
			activeCardState.value = { cardId, buttonIndex };
		}
	};

	const isButtonActive = (cardId, buttonIndex) => {
		return (
			activeCardState.value.cardId === cardId &&
			activeCardState.value.buttonIndex === buttonIndex
		);
	};
</script>

<template>
	<div class="cards-list">
		<Card
			v-for="card in cardList"
			:key="card.id"
			:card="card"
			:is-button-active="isButtonActive"
			:set-active-button="setActiveButton"
			class="card-item" />
	</div>
</template>

<style scoped>
	.cards-list {
		width: 100%;
		max-width: 1458px;
		display: flex;
		flex-wrap: wrap;
		gap: 50px;
		background: rgb(236, 237, 240);
	}
	.card-item {
		border: 1px solid #e5e7eb;
		overflow: hidden;
		transition: box-shadow 0.3s ease;
	}
</style>
