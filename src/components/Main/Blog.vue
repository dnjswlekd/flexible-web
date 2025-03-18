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
import BlogItem from './BlogItem.vue';

// 블로그 아이템 데이터를 배열로 관리
const blogItems = ref([
  {
    image: 'src/assets/images/blog-cover-01.png',
    category: 'Web Publishing',
    title: '퍼블리싱의 모든 것! 인라인요소, 블록요소, 인라인블록',
    description:
      '퍼블리싱의 모든 것이라고 말해도 과언이 아닌 HTML 인라인요소, 블록요소, 인라인블록의 특징을 보기 좋게 정리',
    author: '비와우산',
    date: 'May 24',
    comments: 4,
    avatar: 'src/assets/images/mentor-avatar-01.jpg',
  },
  {
    image: 'src/assets/images/blog-cover-02.png',
    category: 'Web Publishing',
    title: '레이아웃 제작 실력을 높이는방법 Mondrian Layout',
    description:
      '레이아웃 제작 실력을 향상시키기 위해 각자의 방법이 있을 수 있고, 일반적인 방법이 있을 수 있고, 경험이 많은 사람들이',
    author: '비와우산',
    date: 'May 24',
    comments: 4,
    avatar: 'src/assets/images/mentor-avatar-02.jpg',
  },
  {
    image: 'src/assets/images/blog-cover-03.png',
    category: 'Web Publishing',
    title: '예쁜게 찌그러트리는 CSS Border Radius Generator',
    description:
      '더블 보더 레디어스 애니메이션을 만들 때 보더레이어스를 중복해서 사용하면 다양한 모양의 박스를 만들 수 있습니다.',
    author: '비와우산',
    date: 'May 24',
    comments: 4,
    avatar: 'src/assets/images/mentor-avatar-03.jpg',
  },
]);
</script>

<style lang="scss" scoped>
.blog {
  .blog-inner {
    padding: 2rem;
    background-color: #f9f9f9;
  }

  .blog-content {
    .front-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;

      h2 {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
      }

      .btn-view-all {
        font-size: 1rem;
        color: #007bff;
        text-decoration: none;
        border: 1px solid #007bff;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: background-color 0.3s;

        &:hover {
          background-color: #007bff;
          color: #fff;
        }
      }
    }

    .blog-items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  }
}
</style>
