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
    <div class="focus-class">
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
            :pagination="{ clickable: true }"
            :loop="true"
            :breakpoints="{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              480: { slidesPerView: 2 },
              320: { slidesPerView: 2 },
            }"
          >
            <SwiperSlide v-for="item in classes1" :key="item.id">
              <FocusClassItem :item="item" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="focus-class">
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
            :pagination="{ clickable: true }"
            :loop="true"
            :breakpoints="{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              480: { slidesPerView: 2 },
              320: { slidesPerView: 2 },
            }"
          >
            <SwiperSlide v-for="item in classes2" :key="item.id">
              <FocusClassItem :item="item" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.swiper-pagination-bullet {
  background-color: #000;
  width: 10px;
  height: 10px;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
