<template>
  <div class="container member-register">
    <section class="signup">
      <div class="member-register">
        <div class="member-account">
          <h1 class="login-slogan">
            나를 성장시키는 배움,<br /><em>비욘드 인사이트</em>에서 시작하세요.
          </h1>
          <img src="src/assets/images/ct-modal-01.png" alt="" />
        </div>
        <div class="login-field">
          <div>
            <input type="email" v-model="email" placeholder="이메일" />
          </div>
          <div>
            <input
              :type="passwordVisible ? 'text' : 'password'"
              v-model="password"
              placeholder="비밀번호"
              maxlength="12"
            />
            <i
              class="toggle-pw bi"
              :class="passwordVisible ? 'bi-eye' : 'bi-eye-slash'"
              @click="togglePasswordVisibility"
            ></i>
          </div>
          <div>
            <input
              :type="passwordConfirmVisible ? 'text' : 'password'"
              v-model="passwordConfirm"
              placeholder="비밀번호 확인"
              maxlength="12"
            />
            <i
              class="toggle-pw bi"
              :class="passwordConfirmVisible ? 'bi-eye' : 'bi-eye-slash'"
              @click="togglePasswordConfirmVisibility"
            ></i>
          </div>
          <button class="btn-member-primary">가입하기</button>
        </div>
        <div class="agreement">
          <p>
            가입 시, 통합 계정으로 비욘드 인사이트가 제공하는 서비스를 모두
            이용하실 수 있습니다. 서비스 이용약관, 개인정보취급방침에
            동의합니다.
          </p>
          <label>
            <input type="checkbox" v-model="agreeMarketing" /><em></em>할인 혜택
            및 마케팅 정보 수신을 동의합니다.
          </label>
        </div>
        <div class="login-member">
          이미 가입된 계정이 있나요? <a href="#none">로그인 하기</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 반응형 상태 변수들
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const passwordVisible = ref(false);
const passwordConfirmVisible = ref(false);
const agreeMarketing = ref(false);

// 비밀번호 보이기/숨기기 토글 함수들
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const togglePasswordConfirmVisibility = () => {
  passwordConfirmVisible.value = !passwordConfirmVisible.value;
};
</script>
