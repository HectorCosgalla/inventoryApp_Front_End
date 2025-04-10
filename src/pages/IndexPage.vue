<template>
  <q-page>
    <q-list>
      <q-item-label header> Product list </q-item-label>
      <q-item-label>
        <q-btn label="Add a new product" color="positive" to="upload/product" />
      </q-item-label>
      <q-infinite-scroll>
        <q-item-section id="delete_column">
          <ProductCard
            v-for="product in productStore.products"
            :key="product.id"
            v-bind="product"
            @deleteProduct="deleteThis(product.id)"
            @updateProduct="updateThis(product.id)"
          />
        </q-item-section>
      </q-infinite-scroll>
    </q-list>
  </q-page>
</template>

<script setup>
//import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from 'stores/productStore.js'
import ProductCard from 'components/ProductCard.vue'

//const listLinks = ref([])
const productStore = useProductStore()
const router = useRouter()

function deleteThis(id) {
  productStore.deleteProduct(id)
  alert('Product deleted successfully')
}

function updateThis(id) {
  // Redirect to the product edit page
  productStore.selectedProduct = productStore.getProduct(id)
  router.push({ path: '/upload/product/' })
}

function onLoad() {
  productStore.selectedProduct = null
}
onLoad()
</script>

<style>
#delete_column {
  flex-direction: initial;
}
</style>
