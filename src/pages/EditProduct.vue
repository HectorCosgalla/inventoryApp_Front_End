<template>
  <q-page>
    <q-form class="q-pa-md" @submit="onSubmit" autocomplete="off">
      <h6 style="margin: 0">Ingresa un producto</h6>
      <q-input outlined rounded label="Nombre" name="name" v-model="name" />
      <br />
      <q-input
        outlined
        rounded
        label="Descripción"
        name="description"
        v-model="description"
        type="textarea"
        rows="3"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" class="q-mt-md" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from 'stores/productStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref(null)
const description = ref(null)
const productStore = useProductStore()

function onSubmit(e) {
  e.preventDefault()
  if (!name.value || !description.value) {
    alert('Please fill all fields')
    return
  }
  if (productStore.selectedProduct) {
    // Update existing product
    const product = productStore.getProduct(productStore.selectedProduct.id)
    product.name = name.value
    product.description = description.value
    productStore.updateProduct(product.id, product)
    alert('Product updated successfully')
  } else {
    // Add new product
    const product = {
      id: productStore.products.length,
      name: name.value,
      description: description.value,
    }
    productStore.addProduct(product)
    alert('Product added successfully')
  }
  router.push('/')
}

function onLoad() {
  const product = productStore.selectedProduct

  if (product) {
    name.value = product.name
    description.value = product.description
  } else {
    name.value = ''
    description.value = ''
  }
}

onLoad()
</script>
