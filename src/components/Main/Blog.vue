<template>
  <section class="blog">
    <div class="blog-inner">
      <div class="blog-content">
        <div class="front-header">
          <h2>Beyond Insight, 블로그 읽어보기</h2>
          <a href="#none" class="btn-view-all">전체 보기</a>
        </div>
        <div class="blog-items">
          <BlogItem
            v-for="(item, index) in blogItems"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import BlogItem from '@/components/main/BlogItem.vue';

import blogImg01 from '@/assets/images/blog-cover-01.png';
import blogImg02 from '@/assets/images/blog-cover-02.png';
import blogImg03 from '@/assets/images/blog-cover-03.png';

import avatar01 from '@/assets/images/mentor-avatar-01.jpg';
import avatar02 from '@/assets/images/mentor-avatar-02.jpg';
import avatar03 from '@/assets/images/mentor-avatar-03.jpg';

// 블로그 아이템 데이터를 배열로 관리
const blogItems = ref([
  {
    image: blogImg01,
    category: 'Web Publishing',
    title: '퍼블리싱의 모든 것! 인라인요소, 블록요소, 인라인블록',
    description:
      '퍼블리싱의 모든 것이라고 말해도 과언이 아닌 HTML 인라인요소, 블록요소, 인라인블록의 특징을 보기 좋게 정리',
    author: '비와우산',
    date: 'May 24',
    comments: 4,
    avatar: avatar01,
  },
  {
    image: blogImg02,
    category: 'Web Publishing',
    title: '레이아웃 제작 실력을 높이는방법 Mondrian Layout',
    description:
      '레이아웃 제작 실력을 향상시키기 위해 각자의 방법이 있을 수 있고, 일반적인 방법이 있을 수 있고, 경험이 많은 사람들이',
    author: '비와우산',
    date: 'May 24',
    comments: 4,
    avatar: avatar02,
  },
  {
    image: blogImg03,
    category: 'Web Publishing',
    title: '예쁜게 찌그러트리는 CSS Border Radius Generator',
    description:
      '더블 보더 레디어스 애니메이션을 만들 때 보더레이어스를 중복해서 사용하면 다양한 모양의 박스를 만들 수 있습니다.',
    author: '비와우산',
    date: 'May 24',
    comments: 4,
    avatar: avatar03,
  },
]);
</script>

<style lang="scss" scoped></style>
