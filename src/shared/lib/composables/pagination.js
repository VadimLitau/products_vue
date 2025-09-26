import { ref, computed } from 'vue';

export function usePagination(items, itemsPerPage = 12) {
   const currentPage = ref(1);

   const totalPages = computed(() =>
      Math.ceil(items.value.length / itemsPerPage)
   );

   const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return items.value.slice(start, end);
   });

   const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
         currentPage.value = page;
      }
   };

   const nextPage = () => {
      if (currentPage.value < totalPages.value) {
         currentPage.value++;
      }
   };

   const previousPage = () => {
      if (currentPage.value > 1) {
         currentPage.value--;
      }
   };

   return {
      currentPage,
      totalPages,
      paginatedItems,
      goToPage,
      nextPage,
      previousPage
   };
}