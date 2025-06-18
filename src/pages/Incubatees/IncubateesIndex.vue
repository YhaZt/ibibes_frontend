<template>
  <q-page class="q-pa-md">
    <div class="q-mx-auto" style="max-width: 700px">
      <!-- Header and Logos (unchanged) -->
      <div class="row items-center q-col-gutter-sm q-mb-md q-px-sm q-pt-md q-pb-sm wrap">
        <div class="row items-center q-gutter-sm col-12 col-md-auto justify-center justify-md-start">
          <q-img loading="lazy" src="~assets/logos/dost.png" fit="contain" style="height: 50px; width: 50px" />
          <q-img loading="lazy" src="~assets/logos/pcieerd.png" fit="contain" style="height: 50px; width: 50px" />
          <q-img loading="lazy" src="~assets/logos/minsu.png" fit="contain" style="height: 50px; width: 50px" />
          <q-img loading="lazy" src="~assets/logos/ibibes.png" fit="contain" style="height: 50px; width: 120px" class="mobile-only" />
        </div>
        <div class="col-12 col-md text-center q-mt-sm q-mt-md-none">
          <div class="text-h6">Mindoro State University</div>
          <div class="text-caption">Innovative Business Incubator for Biosystems Solutions</div>
        </div>
        <div class="q-mt-sm q-mt-md-none q-show-md q-show-lg q-show-xl mobile-hide">
          <q-img loading="lazy" src="~assets/logos/ibibes.png" fit="contain" style="height: 50px; width: 120px" />
        </div>
      </div>

      <!-- Dynamic Section -->
      <div class="q-my-sm">
        <q-separator color="black" />
        <div class="text-center text-subtitle2">Alcate, Victoria, Oriental Mindoro</div>
      </div>

      <q-card class="q-mt-md q-pa-md text-center bg-primary text-white">
        <div class="text-h6">INCUBATEES PROFILE</div>
      </q-card>

      <q-card class="q-mt-md q-pa-md text-center bg-primary text-white">
        <div class="text-h5">{{ incubatee.venture_name }}</div>
      </q-card>

      <q-card class="q-mt-md q-pa-md">
        <div class="q-gutter-md">
          <div class="row items-center">
            <div class="text-bold text-grey-7 col-4 col-sm-3">Name:</div>
            <div class="col">{{ incubatee.venture_name }}</div>
          </div>
          <div class="row items-center">
            <div class="text-bold text-grey-7 col-4 col-sm-3">Banner Program:</div>
            <div class="col">{{ incubatee.banner_program }}</div>
          </div>
          <div class="row items-center">
            <div class="text-bold text-grey-7 col-4 col-sm-3">Feeder/Client:</div>
            <div class="col">{{ incubatee.client }}</div>
          </div>
        </div>
      </q-card>

      <q-card class="q-mt-md">
        <q-card-section class="bg-primary text-white text-center">DESCRIPTION</q-card-section>
        <q-card-section>
          <p class="text-justify">{{ incubatee.description }}</p>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-md">
        <q-card-section class="bg-primary text-white text-center"> TEAM MEMBERS </q-card-section>
        <q-list bordered separator>
          <q-item v-for="(name, index) in incubatee.members" :key="index">
            <q-item-section>
              <q-item-label>{{ name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from 'boot/axios'; // ✅ Use your configured Axios instance

const route = useRoute();
const router = useRouter();

const encodedId = route.query.id as string | undefined;
if (!encodedId) {
  void router.replace('/error-not-found');
}
const id = encodedId ? atob(encodedId) : '';

const incubatee = ref({
  venture_name: '',
  banner_program: '',
  client: '',
  description: '',
  members: []
});

const fetchIncubatee = async () => {
  try {
    const res = await api.get(`/incubatee/${id}`); // ✅ No hardcoded domain
    incubatee.value = {
      ...res.data,
      members: JSON.parse(res.data.members || '[]')
    };
  } catch (error) {
    console.error('Failed to fetch incubatee:', error);
    void router.replace('/error-not-found');
  }
};

onMounted(() => {
  if (id) void fetchIncubatee();
});
</script>


<style scoped>
a {
  color: #1e88e5;
  text-decoration: underline;
}
</style>
