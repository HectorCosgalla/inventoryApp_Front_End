import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: ref([
      {
        id: 0,
        name: 'Docs',
        description: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
      },
      {
        id: 1,
        name: 'Github',
        description: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework',
      },
      {
        id: 2,
        name: 'Discord Chat Channel',
        description: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev',
      },
      {
        id: 3,
        name: 'Forum',
        description: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev',
      },
    ]),
    selectedProduct: ref(null),
  }),
  getters: {},
  actions: {
    addProduct(product) {
      this.products.push(product)
    },
    deleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id)
    },
    updateProduct(id, updatedProduct) {
      const index = this.products.findIndex((product) => product.id === id)
      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...updatedProduct }
      }
    },
    getProduct(id) {
      return this.products.find((product) => product.id === id)
    },
    existProduct(id) {
      return this.products.findIndex((product) => product.id === id)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
