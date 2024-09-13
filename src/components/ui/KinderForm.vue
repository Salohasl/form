<script setup lang="ts">
import {computed} from "vue";
import {useFormStorage} from "../../store/save-form.ts";
const { removeFromLocalStorage, saveToLocalStorage } = useFormStorage();

interface Child {
  name: string;
  age: number | null;
}

const props = defineProps({
  maxChildren: {
    type: Number,
    default: 5
  },
  children: {
    type: Array as () => Child[],
    required: true
  }
});

const emit = defineEmits(['update:children']);

const childrenCount = computed(() => props.children.length);

const addChild = () => {
  if (childrenCount.value < props.maxChildren) {
    const updatedChildren = [...props.children, { name: '', age: null }];
    emit('update:children', updatedChildren);
    saveToLocalStorage();
  }
};

const removeChild = (index: number) => {
  const updatedChildren = [...props.children];
  updatedChildren.splice(index, 1);
  emit('update:children', updatedChildren);
  removeFromLocalStorage(index);
};

</script>

<template>
  <div class="form-content__kinder">
    <p>Дети (макс. {{ maxChildren }})</p>
    <button v-if="childrenCount < maxChildren" type="button" @click="addChild">
      <span>+</span>Добавить ребенка
    </button>
  </div>
  <div class="form-group__block" v-for="(child, index) in props.children" :key="index">
    <div class="form-group__item">
      <label>Имя</label>
      <input type="text" v-model="child.name" required />
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