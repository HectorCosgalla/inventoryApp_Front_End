<template>
  <q-card class="item-card q-ma-md row">
    <q-card-section class="section col flex flex-center">
      <q-img :src="props.image" :ratio="1" alt="Product image placeholder" fit="fill" />
    </q-card-section>
    <q-card-section class="section col-9">
      <h5 class="title">{{ props.name }}</h5>
      <p>{{ props.description }}</p>
    </q-card-section>
    <q-card-section class="section col column items-center justify-around">
      <q-btn label="Edit" @click="$emit('updateProduct')" color="warning" />
      <q-btn label="Delete" @click="$emit('deleteProduct')" color="negative" />
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    nullable: false,
    default: 0,
  },
  name: {
    type: String,
    default: 'Product Name',
  },
  image: {
    type: String,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png',
  },
  description: {
    type: String,
    default: 'Product Description',
  },
})
</script>

<style>
.item-card {
  width: 80%;
}
.section {
  margin: 1%;
  padding: 0%;
  border-radius: 0 !important;
}
.title {
  font-weight: bold;
  margin: 0;
}
</style>
