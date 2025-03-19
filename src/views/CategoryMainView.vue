<template>
  <div class="container category-main">
    <section class="category-class">
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
          <div class="focus-class-items">
            <FocusClassItem
              v-for="(item, index) in allClassItems"
              :key="index"
              :item="item"
            />
          </div>
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
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FocusClassItem from '@/components/categoryMain/FocusClassItem.vue';
import { allClassItems } from '@/constants/focusClass';
</script>

<style scoped></style>
