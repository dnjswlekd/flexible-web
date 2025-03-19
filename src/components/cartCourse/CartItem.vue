<template>
  <div class="cart-item">
    <div class="check-status">
      <input class="cart-chk" type="checkbox" v-model="item.checked" />
    </div>
    <div class="thum">
      <img :src="item.image" alt="" />
    </div>
    <div class="cart-overview">
      <div class="cart-overview-header">
        <h4>{{ item.discountPeriod }}</h4>
        <button class="btn-clear" @click="removeCartItem">×</button>
      </div>
      <div class="cart-overview-detail">
        <div class="cart-overview-info">
          <b class="class-subject">{{ item.subject }}</b>
          <span class="mentor-info">
            {{ item.mentor }} <em>{{ item.freeDuration }}</em>
          </span>
        </div>
        <div class="cart-overview-price">
          <div>
            <span class="sale">{{ item.discount }}%</span>
            <s class="price-prev">{{ item.originalPrice }}원</s>
          </div>
          <span class="price-current">{{ item.currentPrice }}원</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
  index: Number,
});

const emit = defineEmits();

const removeCartItem = () => {
  emit('remove-cart-item', index); // 수정: 이벤트를 부모로 전달
};
</script>
