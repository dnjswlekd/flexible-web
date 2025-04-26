<template>
  <header :class="{ active: isScrolled }">
    <div class="header-inner">
      <div class="logo-search">
        <div class="logo">
          <button @click="goToMain">
            <img :src="logo" alt="Logo" />
          </button>
        </div>
        <div class="search">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="어떤 강의를 찾으시나요?"
          />
          <img :src="searchIcon" alt="Search Icon" />
        </div>

        <div class="login-register-buttons">
          <button @click="openLoginModal">로그인</button>
          <button class="btn-register" @click="redirectToRegister">
            회원가입
          </button>
        </div>
        <div class="user-alarm">
          <span class="cart">
            <i class="bi bi-cart"></i><em :data-count="cartCount"></em>
          </span>
          <span class="alarm">
            <i class="bi bi-bell"></i><em :data-count="alarmCount"></em>
          </span>
          <span class="avatar">
            <img :src="avatar" alt="User Avatar" />
          </span>
        </div>
      </div>
      <div class="gnb">
        <a class="trigger" href="#none"><span>전체 카테고리</span></a>
        <div class="special-navi">
          <a href="#none">베스트 클래스</a>
          <a href="#none">이벤트</a>
          <a href="#none">새로운 클래스</a>
          <a href="#none">신규 회원 혜택</a>
          <a href="#none">시그니쳐 클래스</a>
        </div>
      </div>
    </div>
  </header>
  <LoginModal ref="loginModal" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import LoginModal from '@/components/LoginModal.vue';

import logo from '@/assets/images/favicon.png';
import searchIcon from '@/assets/images/bi-search.svg';
import avatar from '@/assets/images/mentor-avatar-21.jpg';

const cartCount = ref(2);
const alarmCount = ref(9);
const searchQuery = ref('');
const isScrolled = ref(false);
const loginModal = ref(null);

const openLoginModal = () => {
  if (loginModal.value) {
    loginModal.value.openModal(); // 모달 열기
  }
};

const router = useRouter();

const goToMain = () => {
  router.push({ name: 'home' });
};

const redirectToRegister = () => {
  router.push({ name: 'memberRegister' });
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 150;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 스타일 관련 추가 */
</style>
