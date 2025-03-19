<script setup>
import { ref } from 'vue';
import { headers, classes1, classes2 } from '@/constants/classes';
import FocusClassItem from './ClassItem.vue';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
</script>

<template>
  <section class="focus-class">
    <div class="focus-class-inner">
      <div class="focus-class-content">
        <div
          class="front-header"
          v-for="(header, index) in headers"
          :key="index"
        >
          <h2>{{ header.title }}</h2>
          <a :href="header.link" class="btn-view-all">{{
            header.buttonText
          }}</a>
        </div>
        <!-- Swiper 사용 -->
        <Swiper
          :spaceBetween="30"
          :slidesPerView="4"
          :navigation="true"
          :loop="true"
        >
          <SwiperSlide v-for="item in classes1" :key="item.id">
            <FocusClassItem :item="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>

  <section class="focus-class">
    <div class="focus-class-inner">
      <div class="focus-class-content">
        <div
          class="front-header"
          v-for="(header, index) in headers"
          :key="index"
        >
          <h2>{{ header.title }}</h2>
          <a :href="header.link" class="btn-view-all">{{
            header.buttonText
          }}</a>
        </div>
        <!-- Swiper 사용 -->
        <Swiper
          :spaceBetween="30"
          :slidesPerView="4"
          :navigation="true"
          :loop="true"
        >
          <SwiperSlide v-for="item in classes2" :key="item.id">
            <FocusClassItem :item="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* Swiper 기본 스타일 */
.swiper-button-next,
.swiper-button-prev {
  background-color: #000;
  color: #fff;
  padding: 10px;
}
</style>
