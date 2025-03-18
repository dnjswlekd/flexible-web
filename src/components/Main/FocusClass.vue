<script setup>
import { ref } from 'vue';
import { headers, classes1, classes2 } from '@/constants/classes';

import FocusClassItem from './ClassItem.vue';

const goToDetail = (url) => {
  window.location.href = url;
};
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
        <div class="focus-class-items">
          <FocusClassItem
            v-for="item in classes1"
            :key="item.id"
            :item="item"
          />
        </div>
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
        <div class="focus-class-items">
          <FocusClassItem
            v-for="item in classes2"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
