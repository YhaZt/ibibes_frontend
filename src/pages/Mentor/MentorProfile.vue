<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-md q-mb-md">
      <q-card class="text-center col-12 col-sm-6 col-md-4" style="max-width: 350px; width: 100%">
        <q-card-section class="text-h6">
          Mentor For
          <q-separator class="my-5" />
          <span class="capitalize-first-letter">{{ mentorData.target_incubatee }}</span>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pt-lg main-scale-container">
      <q-card-section class="row justify-center q-col-gutter-xs q-gutter-lg">
        <q-card class="custom-card card-relative col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer">
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <img
                v-if="mentorData.mentor_image"
                :src="`data:image/png;base64,${mentorData.mentor_image}`"
                style="width: 100%; max-width: 230px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  {{ mentorData.specific_roles }}
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="inner">
                {{ mentorData.description }}
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold leading-tight break-words text-center">
                  {{ mentorData.mentor_name }}
                </div>
                <div class="text-subtitle2 text-warning">
                  Mentor in <br />{{ mentorData.mentor_banner_program }}
                </div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  {{ mentorData.expertise }}
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">
                  {{ mentorData.target_incubatee }}
                </div>
              </div>
            </div>
          </div>
          <!-- Back Button -->
          <q-btn
            class="back-btn"
            color="deep-orange"
            round
            icon="arrow_back"
            @click="$router.back()"
          />
        </q-card>
      </q-card-section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from 'src/boot/axios';

const route = useRoute();
const router = useRouter();

const encodedId = route.query.id as string | undefined;
if (!encodedId) {
  void router.replace('/error-not-found');
}
const id = encodedId ? atob(encodedId) : '';

const mentorData = ref({
  mentor_name: '',
  mentor_banner_program: '',
  target_incubatee: '',
  description: '',
  specific_roles: '',
  expertise: '',
  mentor_image: '',
});

const fetchMentor = async () => {
  try {
    const res = await api.get(`/mentor/${id}`); // ✅ No hardcoded domain
    mentorData.value = {
      ...res.data,
      members: JSON.parse(res.data.members || '[]'),
    };
  } catch (error) {
    console.error('Failed to fetch mentor:', error);
    void router.replace('/error-not-found');
  }
};

onMounted(() => {
  if (id) void fetchMentor();
});
</script>

<style scoped>
.card-relative {
  position: relative;
}
.back-btn {
  position: absolute;
  bottom: -18px;
  right: -18px;
  z-index: 2;
}
.capitalize-first-letter {
  text-transform: capitalize;
}
.main-scale-container {
  transform: scale(1.3);
  transform-origin: top center;
  width: 100%;
  margin: 0 auto;
}

.custom-card {
  background: linear-gradient(90deg, #ffde59, #ff914d);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50vw;
  min-height: 45vh;
}
.custom-quasar-grid {
  display: grid;
  grid-template-columns: 2.8fr 3fr 3fr;
  grid-template-rows: 1.5fr 0.5fr 0.5fr;
  gap: 6px;
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
}

.inner {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 6px;
}

/* Cell Colors */
.a {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background: #ffe082;
  order: 1;
}
.b {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  background: #ffcc80;
  order: 3;
}
.c {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background: #b3e5fc;
  padding: 6px 12px;
  order: 4;
}
.d {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  background: #c8e6c9;
  order: 2;
}
.e {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  background: #f8bbd0;
  order: 5;
}
.f {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  background: #d1c4e9;
  order: 6;
}

.thumbnail-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Responsive Grid Adjustments */
@media (max-width: 1024px) {
  .custom-quasar-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  .a {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .b {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  .c {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  .d {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
  .e {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
  .f {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
}

@media (max-width: 768px) {
  .custom-card {

  min-width: 50vw;
    background: linear-gradient(90deg, #ffde59, #ff914d);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-scale-container {
    transform: scale(0.8);
    transform-origin: top center;
    width: 100%;
    margin: 0 auto;
  }
  .custom-quasar-grid {
    display: flex;
    flex-direction: column;
  }
  .cell {
    order: unset;
    width: 100%;
    min-width: 0;
    font-size: 0.95em;
    padding: 8px;
  }
  .a {
    order: 1;
  }
  .d {
    order: 2;
  }
  .b {
    order: 3;
  }
  .c {
    order: 4;
  }
  .e {
    order: 5;
  }
  .f {
    order: 6;
  }
  .custom-card {
    min-width: auto;
    width: 100%;
  }
}
</style>
