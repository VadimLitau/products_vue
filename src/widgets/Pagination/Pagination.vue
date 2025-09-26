<script setup>
import UiSvg from '@/shared/Ui/UiSvg/UiSvg.vue';
import { computed } from 'vue';

const props = defineProps({
   currentPage: {
      type: Number,
      default: 1
   },
   totalPages: {
      type: Number,
      default: 1
   },
   visiblePages: {
      type: Number,
      default: 5
   }
});

const emit = defineEmits(['page-change']);

const pages = computed(() => {
   const pages = [];
   const halfVisible = Math.floor(props.visiblePages / 2);
   let startPage = Math.max(1, props.currentPage - halfVisible);
   let endPage = Math.min(props.totalPages, startPage + props.visiblePages - 1);

   startPage = Math.max(1, endPage - props.visiblePages + 1);

   for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
   }

   if (startPage > 1) {
      if (startPage > 2) {
         pages.unshift('...');
      }
      pages.unshift(1);
   }

   if (endPage < props.totalPages) {
      if (endPage < props.totalPages - 1) {
         pages.push('...');
      }
      pages.push(props.totalPages);
   }

   return pages;
});

const hasPrevious = computed(() => props.currentPage > 1);
const hasNext = computed(() => props.currentPage < props.totalPages);

const goToPage = (page) => {
   if (page !== '...' && page !== props.currentPage) {
      emit('page-change', page);
   }
};

const goToPrevious = () => {
   if (hasPrevious.value) {
      emit('page-change', props.currentPage - 1);
   }
};

const goToNext = () => {
   if (hasNext.value) {
      emit('page-change', props.currentPage + 1);
   }
};
</script>

<template>
   <div class="row flex-center" v-if="totalPages > 1">
      <div class="col">
         <button class="btn-to flex align-center g-10" :disabled="!hasPrevious" @click="goToPrevious">
            <UiSvg name="icon-pagination-arrowPrev"></UiSvg>
            <span>Предыдущая</span>
         </button>
      </div>
      <div class="col counter flex-center g-10">
         <span v-for="(page, index) in pages" :key="index" :class="{
            active: page === currentPage,
            ellipsis: page === '...',
            clickable: page !== '...'
         }" @click="goToPage(page)">
            {{ page }}
         </span>
      </div>
      <div class="col">
         <button class="btn-to flex-center g-10" :disabled="!hasNext" @click="goToNext">
            <span>Следующая</span>
            <UiSvg name="icon-pagination-arrowNext"></UiSvg>
         </button>
      </div>
   </div>
</template>

<style scoped>
.row {
   justify-content: space-between;
   margin-top: 56px;
   padding-bottom: 100px;
   /*temp */
}

.counter span {
   width: 24px;
   height: 24px;
   color: var(--text-grey);
   cursor: pointer;
}

.counter span.active {
   background-color: var(--bg-white);
   color: var(--text-blue)
}

.btn-to {
   width: 150px;
   height: 36px;
   background: var(--bg-white);
   color: var(--text-blue);
   font-size: 14px;
   cursor: pointer;
}

.btn-to:disabled {
   opacity: .7;
   cursor: not-allowed;
}

.btn-to span {}
</style>