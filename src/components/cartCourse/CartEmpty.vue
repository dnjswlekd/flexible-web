<template>
  <div v-if="cartItems.length === 0" class="cart-item-empty">
    <h4>수강바구니가 비었습니다.</h4>
    <p>트렌드 그 이상의 클래스, 비욘드 인사이트에서 좋은 강의를 찾아보세요.</p>
    <a @click="goToMain">강의목록 보기</a>
  </div>
</template>

<script setup>
const props = defineProps({
  cartItems: Array,
});

const emit = defineEmits();

const goToMain = () => {
  emit('go-to-main');
};
</script>
