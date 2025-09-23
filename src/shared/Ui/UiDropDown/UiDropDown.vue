<script setup>
	import iconDropdown from "@/assets/icons/iconDropdown.svg";
	import { ref, onMounted, onUnmounted } from "vue";

   const props = defineProps({
      dropdownData: {
         type: Array,
         required: true,
      },
		title:String,
   })

	const visible = ref(false);

   

	// Закрытие дропдауна при клике вне его области
	const closeDropdown = (event) => {
		if (!event.target.closest(".dropdown")) {
			visible.value = false;
		}
	};

	// Добавляем обработчик клика по документу
	onMounted(() => {
		document.addEventListener("click", closeDropdown);
	});

	// Убираем обработчик при размонтировании компонента
	onUnmounted(() => {
		document.removeEventListener("click", closeDropdown);
	});
</script>

<template>
	<div class="dropdown">
		<button
			class="btn btn-secondary dropdown-toggle"
			@click.stop="visible = !visible">
			{{title}}
			<img
				:src="iconDropdown"
				alt="Icon"
				:class="['dropdown-icon', { rotated: visible }]" />
		</button>
		<ul :class="['dropdown-menu', { visible: visible }]">
			<li v-for="item in props.dropdownData" :key="item.item">
				<a class="dropdown-item" href="#" @click.prevent="visible = false"
					>{{item.item}}</a
				>
			</li>
			<!-- <li>
				<a class="dropdown-item" href="#" @click.prevent="visible = false"
					>По цене</a
				>
			</li>
			<li>
				<a class="dropdown-item" href="#" @click.prevent="visible = false"
					>Новизне</a
				>
			</li> -->
		</ul>
	</div>
</template>

<style scoped>
	.dropdown {
		position: relative;
		width: 190px;
		height: 38px;
		margin: 20px auto;
	}

	.btn {
		border: none;
		cursor: pointer;
		outline: none;
	}

	.btn-secondary {
		background-color: #fff;
		color: rgba(112, 121, 142, 1);
		border: 1px solid #ddd;
		border-radius: 10px;
		padding: 0 15px;
		font-size: 14px;
    font-weight: 500;
		transition: all 0.3s ease;
	}

	.btn-secondary:hover {
		color: rgba(32, 54, 134, 1);
    box-shadow: 0 0 1px rgba(32, 54, 134, 1);
	}

	.dropdown-toggle {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
	}

	.dropdown-icon {
		width: 16px;
		height: 16px;
		transition: transform 0.3s ease;
	}

	.dropdown-icon.rotated {
		transform: rotate(180deg);
	}

	.dropdown-menu {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 10px;
		margin-top: 5px;
		padding: 0;
		list-style: none;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-8px);
		transition: all 0.3s ease;
		z-index: 1000;
	}

	.dropdown-menu.visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.dropdown-item {
		display: block;
		padding: 10px 15px;
		color: rgba(32, 54, 134, 1);
		text-decoration: none;
		font-size: 14px;
		transition: background-color 0.2s ease;
		border-bottom: 1px solid #f0f0f0;
    text-align: left;
	}

	.dropdown-item:last-child {
		border-bottom: none;
	}

	.dropdown-item:hover {
		background-color: #f8f9fa;
		color: rgba(32, 54, 134, 0.8);
	}
</style>
