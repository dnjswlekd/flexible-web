<script setup>
import { ref } from 'vue';
import { headers, classes1, classes2 } from '@/components/constants/classes'; // 수정된 import

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
<style lang="scss" scoped>
.focus-class {
  padding: 40px 20px;

  .focus-class-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .front-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .btn-view-all {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .focus-class-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

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
}
</style>
