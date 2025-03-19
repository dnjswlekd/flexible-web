<template>
  <header :class="{ active: isScrolled }">
    <div class="header-inner">
      <div class="logo-search">
        <div class="logo">
          <button @click="goToMain"><img :src="logoSrc" alt="Logo" /></button>
        </div>
        <div class="search">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="어떤 강의를 찾으시나요?"
          />
          <img src="@/assets/images/bi-search.svg" alt="Search Icon" />
        </div>
        <div class="login-register-buttons">
          <button class="btn-login" @click="openLoginModal">로그인</button>
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
            <img :src="avatarSrc" alt="User Avatar" />
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const logoSrc = 'src/assets/images/logo-beyond-insight.png';
const avatarSrc = 'src/assets/images/mentor-avatar-21.jpg';
const cartCount = ref(2);
const alarmCount = ref(9);
const searchQuery = ref('');
const isScrolled = ref(false);

const openLoginModal = () => {
  // 로그인 모달을 여는 로직 (모달 관리 상태 추가 필요)
};

const redirectToRegister = () => {
  router.push({ name: 'memberRegister' });
};

// Scroll 이벤트 처리 함수
const handleScroll = () => {
  if (window.scrollY > 150) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

import { useRouter } from 'vue-router'; // useRouter 훅을 import

const router = useRouter(); // router를 정의

const goToMain = () => {
  router.push({ name: 'home' });
};
</script>

<style scoped></style>
