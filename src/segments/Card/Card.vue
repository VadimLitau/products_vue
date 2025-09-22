<script setup>
	import CardCounter from "@/segments/Card/CardCounter.vue";
	import iconHeart from "@/assets/icons/iconHeart.svg";
	import icon1 from "@/assets/icons/iconsCard/icon_1.svg";
	import icon2 from "@/assets/icons/iconsCard/Vector.svg";
	import icon3 from "@/assets/icons/iconsCard/оптом.svg";
	import icon1Active from "@/assets/icons/iconsCard/icon_1_active.svg";
	import icon2Active from "@/assets/icons/iconsCard/Vector_active.svg";
	import icon3Active from "@/assets/icons/iconsCard/оптом_active.svg";
	import iconCardCart from "@/assets/icons/iconsCard/iconCardCart.svg";

	const props = defineProps({
		card: {
			type: Object,
			required: true,
		},
		isButtonActive: {
			type: Function,
			required: true,
		},
		setActiveButton: {
			type: Function,
			required: true,
		},
	});

	const btns = [
		{ src: icon1, srcActive: icon1Active },
		{ src: icon2, srcActive: icon2Active },
		{ src: icon3, srcActive: icon3Active },
	];

	const handleButtonClick = (index) => {
		props.setActiveButton(props.card.id, index);
	};
</script>

<template>
	<div class="card">
		<div class="card-header">
			<div class="card-image">
				<img :src="card.image" :alt="card.title" class="image" />
				<div class="card-favorite">
					<img :src="iconHeart" alt="Избранное" />
				</div>
			</div>
		</div>

		<div class="card-content">
			<h3 class="card-title">{{ card.title }}</h3>

			<div class="card-termin row">
				<div class="subrow">
					<div class="termin-col" v-if="card.dateOrigin">
						<span class="label">Дата выработки: </span>
						<span class="value">{{ card.dateOrigin }}</span>
					</div>
					<div class="termin-col" v-if="card.dateExpiriens">
						<span class="label">Срок годности: </span>
						<span class="value">{{ card.dateExpiriens }}</span>
					</div>
				</div>
			</div>
			<div class="card-details row">
				<div class="subrow">
					<button
						:class="['btn-details', { active: isButtonActive(card.id, i) }]"
						v-for="(btn, i) in btns"
						:key="btn.src"
						@click="handleButtonClick(i)">
						<img
							:src="isButtonActive(card.id, i) ? btn.srcActive : btn.src"
							alt=""
							width="24"
							height="24" />
					</button>
				</div>
				<div class="subrow" v-if="card.weight">
					<div class="value" style="margin-top: 1px; height: 35px">
						Цена от 1 упаковки ({{ card.weight }} кг)
					</div>
				</div>
			</div>
			<CardCounter></CardCounter>
			<div class="card-footer">
				<div class="card-price" v-if="card.price">
					<div class="price-main">{{ card.price.toFixed(2) }} ₽</div>
					<div class="price-old" v-if="card.oldPrice">
						{{ card.oldPrice.toFixed(2) }} ₽
						<span class="price-unit">/ {{ card.unit }}</span>
					</div>
				</div>
				<div class="card-cart">
					<img :src="iconCardCart" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.card {
		flex: calc(16% - 50px);
	}

	.card:hover {
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.card-header {
		background: #fff;
		padding: 10px;
		border-radius: 12px;
	}

	.card-image {
		position: relative;
		padding: 10px;
		overflow: hidden;
		margin-bottom: 10px;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card-favorite {
		position: absolute;
		top: 0px;
		right: 0;
		cursor: pointer;
	}

	.card-content {
		padding: 0;
	}

	.card-title {
		font-size: 16px;
		font-weight: 600;
		line-height: 1.2;
		color: rgba(32, 54, 134, 1);
		text-align: left;
		margin-bottom: 8px;
	}

	.card-termin {
		margin-bottom: 8px;
	}

	.card-details {
		background-color: #fff;
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
		margin-bottom: 8px;
	}

	.subrow {
		display: flex;
		justify-content: space-between;
		margin-bottom: 6px;
		font-size: 14px;
		gap: 1px;
	}

	.btn-details {
		background-color: transparent;
		flex: 33.3333%;
		cursor: pointer;
		background-color: rgba(221, 225, 230, 1);
		transition: all 0.3s ease;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
	}

	.btn-details.active {
		background-color: #fff;
	}

	.btn-details:first-child {
		border-top-left-radius: 8px;
	}

	.btn-details:last-child {
		border-top-right-radius: 8px;
	}

	.termin-col {
		flex: 50%;
		text-align: left;
	}

	.label {
		display: inline-block;
		color: rgba(112, 121, 142, 1);
		font-size: 12px;
		line-height: 1.2;
		min-width: 100px;
	}

	.value {
		display: inline-block;
		color: rgba(32, 54, 134, 1);
		font-size: 12px;
		line-height: 1.2;
		font-weight: 500;
	}
	.card-details .value {
		display: flex;
		align-items: center;
	}
	.card-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.card-price {
		margin-bottom: 16px;
	}

	.price-main {
		font-size: 20px;
		font-weight: 700;
		color: rgba(32, 54, 134, 1);
	}

	.price-unit {
		font-size: 14px;
		color: #6b7280;
		font-weight: 400;
		line-height: 0.75;
	}

	.price-old {
		font-size: 12px;
		line-height: 1.2;
		color: rgba(112, 121, 142, 1);
	}
</style>
