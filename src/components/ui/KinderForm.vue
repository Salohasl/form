<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
  maxChildren: {
    type: Number,
    default: 5
  }
});

const children = ref<{ name: string; age: number | null }[]>([]);
const childrenCount = computed(() => children.value.length);

const addChild = () => {
  if (childrenCount.value < props.maxChildren) {
    children.value.push({ name: '', age: null });
  }
};

const removeChild = (index: number) => {
  if (index >= 0 && index < children.value.length) {
    children.value.splice(index, 1);
  }
};
</script>

<template>
  <div class="form-content__kinder">
    <p>Дети (макс. {{ maxChildren }})</p>
    <button v-if="childrenCount < maxChildren" type="button" @click="addChild">
      <span>+</span>Добавить ребенка
    </button>
  </div>
  <div class="form-group__block" v-for="(child, index) in children" :key="index">
    <div class="form-group__item">
      <label>Имя</label>
      <input type="text" v-model.name="child.name" required />
    </div>
    <div class="form-group__item">
      <label>Возраст</label>
      <input v-model.number="child.age" type="number" required />
    </div>
    <button type="button" class="btn-close" @click="removeChild(index)">Удалить</button>
  </div>
</template>

<style scoped>
.form-content__kinder {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}

.form-content__kinder button {
  border: 2px solid #01A7FD;
  color: #01A7FD;
  background: transparent;
  border-radius: 40px;
  width: 205px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
}

button span {
  font-size: 35px;
}

.form-group__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-group__item {
  width: 38%;
}

.form-group__item {
  position: relative;
}

.btn-close {
  background: transparent;
  color: #01A7FD;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}
</style>