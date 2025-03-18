<template>
  <section class="category-shortcut">
    <div class="category-shortcut-inner">
      <div class="category-shortcut-items">
        <a
          v-for="(item, index) in categories"
          :key="index"
          :href="item.link"
          class="category-shortcut-item"
        >
          <em><i :class="item.icon"></i></em>
          <span>{{ item.text }}</span>
        </a>
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
    link: '/html/category-main.html',
  },
  {
    icon: 'bi bi-code',
    text: '개발·프로그래밍',
    link: '/html/category-main.html',
  },
  {
    icon: 'bi bi-graph-up-arrow',
    text: '운동·건강',
    link: '/html/category-main.html',
  },
  {
    icon: 'bi bi-spellcheck',
    text: '학문·외국어',
    link: '/html/category-main.html',
  },
  {
    icon: 'bi bi-cup-hot',
    text: '라이프스타일',
    link: '/html/category-main.html',
  },
  {
    icon: 'bi bi-three-dots',
    text: '더 보기',
    link: '/html/category-main.html',
  },
]);
</script>

<style lang="scss" scoped>
.category-shortcut {
  .category-shortcut-inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .category-shortcut-item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    text-decoration: none;
    color: #333;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: background 0.3s;
    &:hover {
      background: #f5f5f5;
    }
    i {
      font-size: 18px;
    }
  }
}
</style>
