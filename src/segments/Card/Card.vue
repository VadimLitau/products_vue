<script setup>
	import iconHeart from "@/assets/icons/iconHeart.svg";
	defineProps({
		card: {
			type: Object,
			required: true,
		},
	});
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

			<div class="card-details">
				<div class="detail-row">
					<div class="detail-col">
						<span class="label">Дата выработки: </span>
						<span class="value">{{ card.dateOrigin }}</span>
					</div>
					<div class="detail-col">
						<span class="label">Срок годности: </span>
						<span class="value">{{ card.dateExpiriens }}</span>
					</div>
				</div>
				<div class="detail-row">
					<span class="label">Вес:</span>
					<span class="value">{{ card.weight }} кг</span>
				</div>
			</div>

			<div class="card-price">
				<div class="price-main">
					{{ card.price.toFixed(2) }} ₽
					<span class="price-unit">/ {{ card.unit }}</span>
				</div>
				<div class="price-old" v-if="card.oldPrice">
					{{ card.oldPrice.toFixed(2) }} ₽
				</div>
			</div>

			<div class="card-actions">
				<button class="btn-add">Добавить в корзину</button>
				<div class="quantity-controls">
					<button class="btn-quantity">-</button>
					<span class="quantity">1</span>
					<button class="btn-quantity">+</button>
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
		/* padding: 4px 8px;
		border-radius: 6px;
		font-size: 12px;
		font-weight: 600; */
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

	.card-details {
		margin-bottom: 8px;
	}

	.detail-row {
		display: flex;
		justify-content:space-between;
		margin-bottom: 6px;
		font-size: 14px;
	}
   .detail-col{   
      flex:50%;
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

	.card-price {
		margin-bottom: 16px;
	}

	.price-main {
		font-size: 20px;
		font-weight: 700;
		color: #1f2937;
	}

	.price-unit {
		font-size: 14px;
		color: #6b7280;
		font-weight: 400;
	}

	.price-old {
		font-size: 14px;
		color: #9ca3af;
		text-decoration: line-through;
	}

	.card-actions {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.btn-add {
		flex: 1;
		background: #3b82f6;
		color: white;
		border: none;
		padding: 10px 16px;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.btn-add:hover {
		background: #2563eb;
	}

	.quantity-controls {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.btn-quantity {
		width: 32px;
		height: 32px;
		border: 1px solid #d1d5db;
		background: white;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.btn-quantity:hover {
		border-color: #3b82f6;
		color: #3b82f6;
	}

	.quantity {
		font-weight: 600;
		min-width: 20px;
		text-align: center;
	}
</style>
