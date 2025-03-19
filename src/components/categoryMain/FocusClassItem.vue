<template>
  <div>
    <div class="focus-class-item" @click="goToDetail">
      <div class="thum">
        <img :src="item.image" :alt="item.title" />
        <span class="badge discount">{{ item.discount }}</span>
      </div>
      <div class="desc">
        <div class="overview">
          <h4>{{ item.title }}</h4>
          <div class="class-info">
            {{ item.instructor }} · {{ item.lessons }} · {{ item.duration }}
          </div>
          <div class="class-price">
            <span class="sale">{{ item.salePercentage }}%</span>
            <s class="price-prev">{{ item.originalPrice }}</s>
            <span class="price-current">{{ item.discountedPrice }}</span>
          </div>
          <div class="class-review">
            <span class="stars">
              <i
                v-for="star in item.stars"
                :key="star"
                class="bi bi-star-fill"
              ></i>
              <i v-if="item.hasHalfStar" class="bi bi-star-half"></i>
            </span>
            <span class="rating">{{ item.rating }}</span>
            <span class="trainee">{{ item.trainees }}명 수강</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FocusClassItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const goToDetail = () => {
      // 해당 클래스의 상세 페이지로 이동
      window.location.href = '/html/class-detail.html';
    };

    return {
      goToDetail,
    };
  },
});
</script>

<style scoped>
/* 스타일을 적절히 추가합니다 */
</style>
