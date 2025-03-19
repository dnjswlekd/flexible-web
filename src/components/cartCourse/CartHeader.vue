<template>
  <div class="cart-header">
    <span>
      <input
        class="cart-chk-all"
        type="checkbox"
        v-model="isCheckedAll"
        @change="toggleAllCheckboxes"
      />
      전체선택
      <em>{{ cartItems.length }}</em> / {{ cartItems.length }}
    </span>
    <button class="btn-all-clear" @click="removeAllItems">전체삭제</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  cartItems: Array,
});

const emit = defineEmits();

const isCheckedAll = ref(false);

const toggleAllCheckboxes = () => {
  emit('toggle-all-checkboxes', isCheckedAll.value);
};

const removeAllItems = () => {
  emit('remove-all-items');
};
</script>
