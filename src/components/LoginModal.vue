<template>
  <div v-if="isModalVisible" class="member-login-overlay">
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
        <div class="password-field">
          <input
            ref="passwordField"
            v-model="password"
            :type="isPasswordVisible ? 'text' : 'password'"
            placeholder="비밀번호"
            maxlength="12"
          />
          <i
            :class="isPasswordVisible ? 'bi-eye' : 'bi-eye-slash'"
            @click="togglePasswordVisibility"
            class="bi"
          ></i>
        </div>
        <button @click="handleLogin" class="btn-member-primary">로그인</button>
      </div>
      <div class="join-member">
        비욘드 인사이트가 처음이신가요?
        <a href="#" @click.prevent="goToRegister">간편 회원가입</a>
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
import { useRouter } from 'vue-router';

const isModalVisible = ref(false); // 모달의 표시 여부
const email = ref(''); // 이메일
const password = ref(''); // 비밀번호
const isPasswordVisible = ref(false); // 비밀번호 보이기/숨기기

// 비밀번호 입력 필드에 대한 참조
const passwordField = ref(null); // password input을 위한 ref

// 비밀번호 보이기/숨기기 토글
const togglePasswordVisibility = () => {
  console.log('비밀번호 보이기/숨기기 토글');
  isPasswordVisible.value = !isPasswordVisible.value;
  if (passwordField.value) {
    passwordField.value.type = isPasswordVisible.value ? 'text' : 'password';
  }
};

// 로그인 처리 함수
const handleLogin = () => {
  // 실제 로그인 로직을 여기에 구현
  console.log('로그인 시도:', { email: email.value, password: password.value });
  closeModal(); // 로그인 후 모달 닫기
};

// 모달 열기
const openModal = () => {
  isModalVisible.value = true;
};

// 모달 닫기
const closeModal = () => {
  isModalVisible.value = false;
};

// 부모 컴포넌트에서 모달 열기
defineExpose({
  openModal,
});

const router = useRouter();

// 간편 회원가입 페이지로 이동
const goToRegister = () => {
  router.push({ name: 'memberRegister' });
  closeModal(); // 로그인 모달 닫기
};
</script>
