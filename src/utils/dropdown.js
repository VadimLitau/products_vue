export const dropdownData = [
      { item: "Популярные" },
      { item: "По цене" },
      { item: "Новизне" },
]

export const dropdownData2 = [
      { item: "Филе кеты" },
      { item: "Филе окуня" },
      { item: "Филе минтая" },
      { item: "Филе палтуса" },
      { item: "Филе сайды" },
      { item: "Филе пикши" },
      { item: "Филе семги" },
      { item: "Филе хека" },
      { item: "Филе трески" },
]

export const setDatasets = () => {
      return {
            demoDataset: {
                  title: 'Популярные',
                  items: [
                        { item: "Популярные" },
                        { item: "По цене" },
                        { item: "Новизне" },
                  ]
            },
            sidebarMenuDataset: {
                  title: "Филе рыбы, стейки, фарш",
                  items: [
                        { item: "Филе кеты" },
                        { item: "Филе окуня" },
                        { item: "Филе минтая" },
                        { item: "Филе палтуса" },
                        { item: "Филе сайды" },
                        { item: "Филе пикши" },
                        { item: "Филе семги" },
                        { item: "Филе хека" },
                        { item: "Филе трески" }
                  ]
            }
      }
}