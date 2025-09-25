<script setup>
	import Hero from '@/segments/Hero/Hero.vue';
	import { useRouter } from 'vue-router';

	const currentRouter = useRouter().currentRoute.value.path
</script>

<template>
	<div class="company-page">
		<div class="container">
			<h1>О Компании</h1>
			<Hero :router="currentRouter"></Hero>
		</div>
		
	</div>
</template>

<style scoped>
	.company-page {
		height: 100%;
		/* min-height: 100%; */
}

	
</style>

