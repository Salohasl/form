<script setup lang="ts">
import { computed } from 'vue';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import {useFormStorage} from "../store/save-form.ts";

const { formData } = useFormStorage();
const name = computed(() => formData.value.name);
const age = computed(() => formData.value.age);
const children = computed(() => formData.value.children);

const getAgeSuffix = (age: any) => {
  if (age % 10 === 1 && age % 100 !== 11) {
    return ' год';
  } else if ((age % 10 >= 2 && age % 10 <= 4) &&
      !(age % 100 >= 12 && age % 100 <= 14)) {
    return ' года';
  } else {
    return ' лет';
  }
};

</script>

<template>
  <Header />
  <div class="content">
    <div class="content-block">
      <p>Персональные данные</p>
      <div class="error" v-if="name === '' || age === ''">Данные отсутствуют</div>
      <div v-else>
        <h3>{{ name }}, <span>{{ age + getAgeSuffix(age)}}</span></h3>
        <div class="content-block__kinder">
          <p>Дети</p>
          <h3 v-for="value in children" :key="value.id">
            {{ value.name + ', ' + value.age + getAgeSuffix(value.age) }}
          </h3>
        </div>
      </div>

    </div>
  </div>
  <Footer />
</template>

<style scoped>
p {
  font-weight: 300;
}

.error {
  font-weight: bold;
}

.content-block {
  width: 600px;
  margin-top: 20px;
}

.content-block__kinder {
  margin-top: 50px;
}

.content-block__kinder h3 {
  background: #F1F1F1;
  width: 150px;
  text-align: center;
  padding: 10px;
}
</style>
