<template>
  <div>
    <h2>Survey Results</h2>
    <div v-for="(result, index) in results" :key="index">
      <p>{{ result.question }}</p>
      <p>Answer: {{ result.answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import surveyService from '../services/surveyService';

const results = ref([]);

onMounted(async () => {
  results.value = await surveyService.getResults();
});
</script>