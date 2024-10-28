<template>
  <div>
    <h2>{{ survey.title }}</h2>
    <p>{{ survey.description }}</p>
    <form @submit.prevent="onSubmit">
      <div v-for="question in survey.questions" :key="question._id">
        <label>{{ question.text }}</label>
        <input v-if="question.type === 'text'" v-model="answers[question._id]" />
        <select v-if="question.type === 'multiple'" v-model="answers[question._id]">
          <option v-for="option in question.options" :key="option">{{ option }}</option>
        </select>
        <div v-if="question.type === 'radio'">
          <label v-for="option in question.options" :key="option">
            <input type="radio" :value="option" v-model="answers[question._id]" /> {{ option }}
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import surveyService from '../services/surveyService';

const props = defineProps(['survey']);
const answers = ref({});

async function onSubmit() {
  await surveyService.submitResponse(survey._id, answers.value);
}
</script>