<template>
  <div v-if="survey" class="survey-page">
    <SurveyForm :survey="survey" @submit-success="onSubmitSuccess" />
  </div>
  <div v-else class="loading">
    Loading survey...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import surveyService from '../services/surveyService';
import SurveyForm from '../components/SurveyForm.vue';

const route = useRoute();
const router = useRouter();
const survey = ref(null);

onMounted(async () => {
  const surveyId = route.params.id;
  survey.value = await surveyService.getSurveyById(surveyId);
});

function onSubmitSuccess() {
  router.push('/dashboard');
}
</script>

<style scoped>
.survey-page {
  padding: 20px;
}

.loading {
  text-align: center;
  padding: 20px;
}
</style>