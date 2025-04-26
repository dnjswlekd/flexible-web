<script setup>
import { ref } from 'vue';

const bestClasses = ref([
  {
    id: 1,
    title: "면접과 취업을 부르는 '퍼블리셔 개인 포트폴리오 홈페이지' 제작",
    instructor: '코딩웍스',
    lectures: 80,
    duration: '16시간 30분',
    pricePrev: 132000,
    priceCurrent: 92400,
    img: '@/assets/images/best-class-main-cover-01.png',
    link: '/html/class-detail.html',
  },
  {
    id: 2,
    title: 'HTML+CSS+JS 포트폴리오 실전 퍼블리싱(시즌2)',
    instructor: '코딩웍스',
    lectures: 80,
    duration: '16시간 30분',
    pricePrev: 132000,
    priceCurrent: 92400,
    img: '@/assets/images/best-class-main-cover-02.png',
    link: '/html/class-detail.html',
  },
  {
    id: 3,
    title: 'SCSS(SASS) FLEX GRID 핵심이론(PDF) 교재 및 활용예제',
    instructor: '코딩웍스',
    lectures: 80,
    duration: '16시간 30분',
    pricePrev: 132000,
    priceCurrent: 92400,
    img: '@/assets/images/best-class-main-cover-03.png',
    link: '/html/class-detail.html',
  },
  {
    id: 4,
    title: 'SCSS(SASS)+GRID+FLEX 실전 포트폴리오 퍼블리싱',
    instructor: '코딩웍스',
    lectures: 80,
    duration: '16시간 30분',
    pricePrev: 132000,
    priceCurrent: 92400,
    img: '@/assets/images/best-class-main-cover-04.png',
    link: '/html/class-detail.html',
  },
  {
    id: 5,
    title: '중상급 퍼블리싱을 위한 CSS3의 모든 것',
    instructor: '코딩웍스',
    lectures: 80,
    duration: '16시간 30분',
    pricePrev: 132000,
    priceCurrent: 92400,
    img: '@/assets/images/best-class-main-cover-05.png',
    link: '/html/class-detail.html',
  },
  {
    id: 6,
    title: '최고의 프론트엔드 CSS Frameworks, UIkit',
    instructor: '코딩웍스',
    lectures: 80,
    duration: '16시간 30분',
    pricePrev: 132000,
    priceCurrent: 92400,
    img: '@/assets/images/best-class-main-cover-06.png',
    link: '/html/class-detail.html',
  },
]);

const goToDetail = (url) => {
  window.location.href = url;
};
</script>

<template>
  <section class="best-class">
    <div class="best-class-inner">
      <div class="best-class-content">
        <div class="front-header">
          <h2>카테고리 별 베스트 클래스</h2>
          <a href="#none">전체 클래스 보기</a>
        </div>
        <div class="best-class-wrap">
          <div class="invite-banner">
            <a href="#none"
              ><img src="@/assets/images/banner-invitation.png" alt="초대 배너"
            /></a>
          </div>
          <div class="invite-banner-tablet">
            <a href="#none"
              ><img
                src="@/assets/images/banner-invitation-tablet.png"
                alt="초대 배너 (태블릿)"
            /></a>
          </div>
          <div class="best-class-items-outer">
            <div class="best-class-items">
              <div
                v-for="item in bestClasses"
                :key="item.id"
                class="best-class-item"
                @click="goToDetail(item.link)"
              >
                <div class="thum">
                  <img :src="item.img" :alt="item.title" />
                </div>
                <div class="overview">
                  <h4>{{ item.title }}</h4>
                  <div class="class-info">
                    {{ item.instructor }} · {{ item.lectures }}강 ·
                    {{ item.duration }}
                  </div>
                  <div class="class-price">
                    <span class="sale">30%</span>
                    <s class="price-prev"
                      >{{ item.pricePrev.toLocaleString() }}원</s
                    >
                    <span class="price-current"
                      >{{ item.priceCurrent.toLocaleString() }}원</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
