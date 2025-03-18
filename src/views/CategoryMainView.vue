<template>
  <section class="container category-main">
    <div class="category-class">
      <div class="category-class-inner">
        <div class="category-class-main">
          <h2>개발·프로그래밍</h2>
          <img src="@/assets/images/ct-category-main-01.jpg" alt="" />
        </div>

        <div class="category-class-detail">
          <h3>세부 카테고리</h3>
          <div class="category-shortcut-btn-group">
            <button class="btn-shortcut active">전체</button>
            <button class="btn-shortcut">웹 개발</button>
            <button class="btn-shortcut">프론트엔드</button>
            <button class="btn-shortcut">백엔드</button>
            <button class="btn-shortcut">모바일 앱 개발</button>
            <button class="btn-shortcut">데이터베이스</button>
            <button class="btn-shortcut">게임 개발</button>
            <button class="btn-shortcut">자격증</button>
          </div>
        </div>

        <div class="category-class-sort">
          <select>
            <option value="">인기순</option>
            <option value="">평점순</option>
          </select>
          <button class="btn-earlybird">얼리버드 할인</button>
          <button class="btn-event">이벤트 할인</button>
        </div>

        <!-- content -->
        <div class="category-class-wrap">
          <FocusClassItem
            v-for="(item, index) in classItems"
            :key="index"
            :item="item"
          />
        </div>

        <div class="paging">
          <button class="prev-list"><i class="bi bi-chevron-left"></i></button>
          <div class="btn-paging-group">
            <button class="btn-paging active">1</button>
            <button class="btn-paging">2</button>
            <button class="btn-paging">3</button>
            <button class="btn-paging">4</button>
            <button class="btn-paging">5</button>
          </div>
          <button class="next-list"><i class="bi bi-chevron-right"></i></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import FocusClassItem from '@/components/categoryMain/FocusClassItem.vue';

const classItems = ref([
  {
    title: '[2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드',
    image: 'src/assets/images/beyond-class-category-cover-01.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
  },
  {
    title: '퍼블리싱 핵심이론 PDF 교재 및 예제파일',
    image: 'src/assets/images/beyond-class-category-cover-02.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
  },
  {
    title: 'HTML+CSS+JS 포트폴리오 실전 퍼블리싱(시즌1)',
    image: 'src/assets/images/beyond-class-category-cover-03.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
  },
  {
    title: '그리드(Grid) 핵심이론 및 실전 활용',
    image: 'src/assets/images/beyond-class-category-cover-07.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/classDetail',
  },
  {
    title: "면접과 취업을 부르는 '개인 포트폴리오 홈페이지' 제작",
    image: 'src/assets/images/beyond-class-category-cover-08.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/classDetail', // 상세 페이지 링크
  },
  {
    title: '반응형 웹사이트 포트폴리오(App Official Landing)',
    image: 'src/assets/images/beyond-class-category-cover-09.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/classDetail',
  },
  {
    title: 'HTML+CSS+JS 포트폴리오 실전 퍼블리싱(시즌2)',
    image: 'src/assets/images/beyond-class-category-cover-10.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/classDetail',
  },
  {
    title: 'SCSS(SASS) FLEX GRID 핵심이론(PDF) 교재/활용예제',
    image: 'src/assets/images/beyond-class-category-cover-11.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/classDetail',
  },
  {
    title: 'SCSS(SASS)+GRID+FLEX 실전 포트폴리오',
    image: 'src/assets/images/beyond-class-category-cover-12.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/html/class-detail.html',
  },
  {
    title: '중상급 퍼블리싱을 위한 CSS3의 모든 것',
    image: 'src/assets/images/beyond-class-category-cover-13.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/html/class-detail.html',
  },
  {
    title: '퍼블리셔 개인 포트폴리오 홈페이지 제작 완벽 가이드',
    image: 'src/assets/images/beyond-class-category-cover-14.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/html/class-detail.html',
  },
  {
    title: '퍼블리셔 취업하는 훌륭한 이력서 작성 가이드',
    image: 'src/assets/images/beyond-class-category-cover-15.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/html/class-detail.html',
  },
  {
    title: '모바일 웹 퍼블리싱 포트폴리오 with Figma',
    image: 'src/assets/images/beyond-class-category-cover-16.png',
    discount: '30% 할인',
    instructor: '코딩웍스',
    lessons: '80강',
    duration: '16시간 30분',
    salePercentage: 30,
    originalPrice: '132,000원',
    discountedPrice: '92,400원',
    stars: [1, 2, 3, 4],
    hasHalfStar: true,
    rating: '4.9',
    trainees: '1,234명',
    link: '/html/class-detail.html',
  },
]);
</script>

<style scoped>
/* 스타일을 적절히 추가합니다 */
</style>
