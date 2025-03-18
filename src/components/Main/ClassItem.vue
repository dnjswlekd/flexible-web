<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: Object,
});

const goToDetail = (url) => {
  window.location.href = url;
};
</script>

<template>
  <div class="focus-class-item" @click="goToDetail(item.link)">
    <div class="thum">
      <img :src="item.img" :alt="item.title" />
      <span class="badge discount">30% 할인</span>
    </div>
    <div class="overview">
      <h4>{{ item.title }}</h4>
      <div class="class-info">
        {{ item.instructor }} · {{ item.lectures }}강 ·
        {{ item.duration }}
      </div>
      <div class="class-price">
        <span class="sale">30%</span>
        <s class="price-prev">{{ item.pricePrev.toLocaleString() }}원</s>
        <span class="price-current"
          >{{ item.priceCurrent.toLocaleString() }}원</span
        >
      </div>
      <div class="class-review">
        <span class="stars">
          <i
            v-for="n in 5"
            :key="n"
            :class="{
              'bi bi-star-fill': n <= Math.floor(item.rating),
              'bi bi-star-half':
                n === Math.ceil(item.rating) && !Number.isInteger(item.rating),
            }"
          ></i>
        </span>
        <span class="rating">{{ item.rating }}</span>
        <span class="trainee">{{ item.students.toLocaleString() }}명 수강</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
