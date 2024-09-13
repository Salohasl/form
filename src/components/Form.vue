<script setup lang="ts">
import KinderForm from "./ui/KinderForm.vue";
import {useFormStorage} from "../store/save-form.ts";

const { formData, saveToLocalStorage } = useFormStorage();

const handleSave = () => {
  saveToLocalStorage();
};
</script>

<template>
  <div class="content">
    <form action="#">
      <div class="form-content">
        <p>Персональные данные</p>
        <div class="form-group">
          <label  id="name" for="name">Имя</label>
          <input
              id="name"
              type="text"
              required
              v-model="formData.name"
          />
        </div>
        <div class="form-group">
          <label id="age" for="age">Возраст</label>
          <input
              id="age"
              type="number"
              required
              v-model="formData.age"
          />
        </div>
        <KinderForm v-model:children="formData.children" :maxChildren="5" />
      </div>
      <button class="submit" type="submit" @click="handleSave">Сохранить</button>
    </form>
  </div>
</template>

<style scoped>
.form-content {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 600px;
}

.form-group {
  display: flex;
  flex-direction: column;
  position: relative;
}

.submit {
  background: #01A7FD;
  border: none;
  color: white;
  padding: 15px 25px;
  border-radius: 25px;
  margin-top: 30px;
  cursor: pointer;
}

</style>
