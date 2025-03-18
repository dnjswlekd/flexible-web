<template>
  <div class="member-login-overlay" v-if="isModalOpen">
    <div class="member-login">
      <div class="member-account">
        <h1 class="login-slogan">
          나를 성장시키는 배움,<br /><em>비욘드 인사이트</em>에서 시작하세요.
        </h1>
      </div>
      <div class="login-field">
        <div>
          <input v-model="email" type="email" placeholder="이메일" />
        </div>
        <div>
          <input
            v-model="password"
            type="password"
            placeholder="비밀번호"
            maxlength="12"
          />
          <i
            class="toggle-pw bi bi-eye-slash"
            @click="togglePasswordVisibility"
          ></i>
        </div>
        <button class="btn-member-primary" @click="login">로그인</button>
      </div>
      <div class="join-member">
        비욘드 인사이트가 처음이신가요?
        <a href="/html/member-register.html">간편 회원가입</a>
      </div>
      <div class="easy-login">
        <a href="#none" class="btn-easy-login kakao">카카오로 시작하기</a>
        <a href="#none" class="btn-easy-login facebook"
          >페이스북으로 시작하기</a
        >
        <a href="#none" class="btn-easy-login apple">Apple로 시작하기</a>
        <span class="or">또는</span>
        <a href="#none" class="btn-easy-login email"
          >이메일 계정으로 시작하기</a
        >
      </div>
      <p class="login-notice">
        처음 로그인하면 비욘드 인사이트의 이용약관 및 개인정보처리방침에 동의한
        것으로 간주합니다.
      </p>
      <button class="btn-modal-close" @click="closeModal">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const email = ref('');
const password = ref('');
const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const login = () => {
  // 로그인 처리 로직 추가
  console.log(
    `Logging in with email: ${email.value} and password: ${password.value}`
  );
};

const closeModal = () => {
  isModalOpen.value = false;
};

// 모달을 열 때 호출되는 함수
const openLoginModal = () => {
  isModalOpen.value = true;
};
</script>

<style scoped>
/* 스타일링을 위한 CSS */
</style>
