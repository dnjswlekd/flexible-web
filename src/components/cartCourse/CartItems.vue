<template>
  <div class="cart-items">
    <CartItem
      v-for="(item, index) in cartItems"
      :key="item.id"
      :item="item"
      :index="index"
      @remove-cart-item="removeCartItem"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CartItem from './CartItem.vue';

const props = defineProps({
  cartItems: Array,
});

const emit = defineEmits();

const removeCartItem = (index) => {
  emit('remove-cart-item', index); // 수정: 이벤트로 index를 부모로 전달
};
</script>
