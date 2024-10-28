<template>
  <div class="dashboard">
    <h2>Available Surveys</h2>
    <div v-if="surveys.length === 0">No surveys available.</div>
    <ul v-else>
      <li v-for="survey in surveys" :key="survey._id">
        <router-link :to="{ name: 'survey', params: { id: survey._id } }">
          {{ survey.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import surveyService from '../services/surveyService';

const surveys = ref([]);

onMounted(async () => {
  surveys.value = await surveyService.getSurveys();
});
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
</style>