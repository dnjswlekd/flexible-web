<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: Object,
});

const goToDetail = (url) => {
  window.location.href = url;
};
</script>

<template>
  <div class="focus-class-item" @click="goToDetail(item.link)">
    <div class="thum">
      <img :src="item.img" :alt="item.title" />
      <span class="badge discount">30% 할인</span>
    </div>
    <div class="overview">
      <h4>{{ item.title }}</h4>
      <div class="class-info">
        {{ item.instructor }} · {{ item.lectures }}강 ·
        {{ item.duration }}
      </div>
      <div class="class-price">
        <span class="sale">30%</span>
        <s class="price-prev">{{ item.pricePrev.toLocaleString() }}원</s>
        <span class="price-current"
          >{{ item.priceCurrent.toLocaleString() }}원</span
        >
      </div>
      <div class="class-review">
        <span class="stars">
          <i
            v-for="n in 5"
            :key="n"
            :class="{
              'bi bi-star-fill': n <= Math.floor(item.rating),
              'bi bi-star-half':
                n === Math.ceil(item.rating) && !Number.isInteger(item.rating),
            }"
          ></i>
        </span>
        <span class="rating">{{ item.rating }}</span>
        <span class="trainee">{{ item.students.toLocaleString() }}명 수강</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.focus-class-item {
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  .thum {
    position: relative;

    img {
      width: 100%;
      display: block;
    }

    .badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: red;
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.8rem;
    }
  }

  .overview {
    padding: 15px;

    h4 {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .class-info {
      color: gray;
      font-size: 0.9rem;
    }

    .class-price {
      display: flex;
      align-items: center;
      margin-top: 10px;

      .sale {
        background: red;
        color: white;
        padding: 3px 6px;
        font-size: 0.8rem;
        border-radius: 4px;
        margin-right: 8px;
      }

      .price-prev {
        text-decoration: line-through;
        color: gray;
        font-size: 0.9rem;
      }

      .price-current {
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 8px;
      }
    }

    .class-review {
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 0.9rem;

      .stars {
        display: flex;
        margin-right: 5px;

        i {
          color: gold;
        }
      }

      .rating {
        font-weight: bold;
        margin-right: 10px;
      }

      .trainee {
        color: gray;
      }
    }
  }
}
</style>
