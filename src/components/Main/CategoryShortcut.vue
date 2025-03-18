<template>
  <section class="category-shortcut">
    <div class="category-shortcut-inner">
      <div class="category-shortcut-items">
        <router-link
          v-for="(item, index) in categories"
          :key="index"
          :to="{ name: 'categoryMain' }"
          class="category-shortcut-item"
        >
          <em><i :class="item.icon"></i></em>
          <span>{{ item.text }}</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  {
    icon: 'bi bi-calendar-event',
    text: '진행 중인 이벤트',
    link: '/categoryMain', // path를 변경하지 않음
  },
  {
    icon: 'bi bi-code',
    text: '개발·프로그래밍',
    link: '/categoryMain',
  },
  {
    icon: 'bi bi-graph-up-arrow',
    text: '운동·건강',
    link: '/categoryMain',
  },
  {
    icon: 'bi bi-spellcheck',
    text: '학문·외국어',
    link: '/categoryMain',
  },
  {
    icon: 'bi bi-cup-hot',
    text: '라이프스타일',
    link: '/categoryMain',
  },
  {
    icon: 'bi bi-three-dots',
    text: '더 보기',
    link: '/categoryMain',
  },
]);
</script>

<style lang="scss" scoped></style>
