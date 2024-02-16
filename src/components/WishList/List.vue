<script setup>
import { inject } from "vue";
import ListItem from "./ListItem.vue";
const store = inject("store");
</script>

<template>
  <div v-if="store.state.wishlist.length > 0" class="total">
    Total : {{ store.getters.totalOfCard() }}$
  </div>
  <ul v-if="store.state.wishlist.length > 0">
    <ListItem
      v-for="product in store.state.wishlist"
      :key="product.id"
      :title="product.title"
      :category="product.category"
      :count="product.count"
      :price="store.getters.totalPrice(product.id)"
      @removeHandler="() => store.methods.removewishlist(product.id)"
      @countHandler="
        (count) => store.methods.countChangeHandler(product.id, count)
      "
    />
  </ul>

  <div v-else>No item in wishlist</div>
</template>

<style scoped>
.total {
  margin-block: 2rem;
  text-align: right;
}
</style>
