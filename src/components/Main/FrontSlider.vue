<template>
  <section class="front-slider">
    <div class="front-slider-items">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="front-slider-item"
        :style="{ backgroundColor: slide.bgColor }"
      >
        <div class="front-slider-item-wrap">
          <div class="desc">
            <b>{{ slide.title }}</b>
            <h1 v-html="slide.description"></h1>
            <span v-if="slide.date">{{ slide.date }}</span>
          </div>
          <div class="pic">
            <img :src="slide.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const slides = ref([
  {
    title: 'EVENT',
    description: '11월 신규회원 할인혜택!<br>무료 클래스부터 얼리버드 할인까지',
    date: '2022.11.1~11.30',
    image: '@/assets/images/ct-front-01.png',
    bgColor: '#F8EFE4',
  },
  {
    title: '추천 학습 로드맵',
    description:
      '웹 퍼블리싱 입문부터 중상급까지<br>코딩웍스 퍼블리셔 취업 로드맵',
    date: null,
    image: '@/assets/images/ct-front-02.png',
    bgColor: '#f6e58d',
  },
  {
    title: 'A to Z',
    description:
      '누구나 쉽게 이해하는 웹개발<br>수강생에게 인정받은 검증된 강의들',
    date: '2022.11.1~11.30',
    image: '@/assets/images/ct-front-03.png',
    bgColor: '#c8d6e5',
  },
]);
</script>

<style lang="scss" scoped>
.front-slider {
  .front-slider-items {
    display: flex;
    overflow-x: auto;
    gap: 10px;
  }
  .front-slider-item {
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  .desc {
    flex: 1;
    b {
      font-size: 14px;
    }
    h1 {
      font-size: 24px;
      line-height: 1.5;
    }
    span {
      font-size: 12px;
      color: #666;
    }
  }
  .pic img {
    width: 100px;
  }
}
</style>
