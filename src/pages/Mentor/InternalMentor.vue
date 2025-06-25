<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-md q-mb-md">
      <q-card class="text-center col-12 col-sm-6 col-md-4" style="max-width: 350px; width: 100%">
        <q-card-section class="text-h6">
          Internal Mentor For
          <q-separator class="my-5" />
          <span class="capitalize-first-letter">
            All 15 Incubatees
          </span>
        </q-card-section>
      </q-card>
    </div>

    <!-- Desktop Grid (unchanged) -->
    <div class="q-pt-lg main-scale-container desktop-only">
      <q-card-section class="row justify-center q-col-gutter-xs q-gutter-lg">
        <q-card class="custom-card card-relative col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer">
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img loading="lazy" src="~assets/internalMentor/6.png" fit="contain" style="max-width:230px; border-radius:8px;" alt="Mentor" />
            </div>
            <div class="cell c">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">Engr. Randy A. Joco</div>
                Instructor I
              </div>
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">
                  Agricultural and Biosystems Engineering, Crop Processing Engineering
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card class="custom-card card-relative col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer">
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img loading="lazy" src="~assets/internalMentor/5.png" fit="contain" style="max-width:230px; border-radius:8px;" alt="Mentor" />
            </div>
            <div class="cell c">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">Engr. Christian B. Hernandez</div>
                Instructor I
              </div>
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">
                  Agricultural and Biosystems Engineering
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card class="custom-card card-relative col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer">
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img loading="lazy" src="~assets/internalMentor/4.png" fit="contain" style="max-width:230px; border-radius:8px;" alt="Mentor" />
            </div>
            <div class="cell c">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">Engr. Jerrel S. Reyes, Ph.D.</div>
                Assistant Professor IV
              </div>
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">
                  Agricultural and Biosystems Engineering, Crop Science
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card class="custom-card card-relative col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer">
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img loading="lazy" src="~assets/internalMentor/3.png" fit="contain" style="max-width:230px; border-radius:8px;" alt="Mentor" />
            </div>
            <div class="cell c">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">Ms. Flordemae V. Ines</div>
                Assistant Professor II
              </div>
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">
                  Entrepreneurship, Business Administration
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card class="custom-card card-relative col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer">
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img loading="lazy" src="~assets/internalMentor/2.png" fit="contain" style="max-width:230px; border-radius:8px;" alt="Mentor" />
            </div>
            <div class="cell c">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">Ms. Arlhet O. Atienza</div>
                Instructor I
              </div>
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">
                  Entrepreneurship, Business Management
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card class="custom-card card-relative col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer">
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img loading="lazy" src="~assets/internalMentor/1.png" fit="contain" style="max-width:230px; border-radius:8px;" alt="Mentor" />
            </div>
            <div class="cell c">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">Engr. Jake C. Siscar</div>
                Instructor I
              </div>
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-h6 leading-tight break-words">
                  Computer Engineering
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-card-section>
    </div>

    <!-- Mobile Carousel -->
    <div class="q-carousel-mobile-only">
      <q-carousel
        v-model="mobileSlide"
        swipeable
        animated
        control-color="primary"
        height="420px"
        :arrows="false"
      >
        <q-carousel-slide name="mentor3" class="flex flex-center">
          <q-card class="mobile-mentor-card q-pa-none full-width q-mx-auto">
            <div class="mobile-card-bg">
              <div class="mobile-img-wrapper">
                <q-img
                  loading="lazy"
                  src="~assets/internalMentor/3.png"
                  fit="contain"
                  class="mobile-mentor-img"
                  alt="Mentor"
                />
              </div>
              <div class="mobile-mentor-content">
                <div class="mobile-mentor-name">Ms. Flordemae V. Ines</div>
                <div class="mobile-mentor-designation">Assistant Professor II</div>
                <div class="mobile-mentor-expertise">
                  Entrepreneurship, Business Administration
                </div>
              </div>
            </div>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="mentor4" class="flex flex-center">
          <q-card class="mobile-mentor-card q-pa-none full-width q-mx-auto">
            <div class="mobile-card-bg">
              <div class="mobile-img-wrapper">
                <q-img
                  loading="lazy"
                  src="~assets/internalMentor/2.png"
                  fit="contain"
                  class="mobile-mentor-img"
                  alt="Mentor"
                />
              </div>
              <div class="mobile-mentor-content">
                <div class="mobile-mentor-name">Ms. Arlhet O. Atienza</div>
                <div class="mobile-mentor-designation">Instructor I</div>
                <div class="mobile-mentor-expertise">
                  Entrepreneurship, Business Management
                </div>
              </div>
            </div>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="mentor5" class="flex flex-center">
          <q-card class="mobile-mentor-card q-pa-none full-width q-mx-auto">
            <div class="mobile-card-bg">
              <div class="mobile-img-wrapper">
                <q-img
                  loading="lazy"
                  src="~assets/internalMentor/1.png"
                  fit="contain"
                  class="mobile-mentor-img"
                  alt="Mentor"
                />
              </div>
              <div class="mobile-mentor-content">
                <div class="mobile-mentor-name">Engr. Jake C. Siscar</div>
                <div class="mobile-mentor-designation">Instructor I</div>
                <div class="mobile-mentor-expertise">
                  Computer Engineering
                </div>
              </div>
            </div>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="mentor0" class="flex flex-center">
          <q-card class="mobile-mentor-card q-pa-none full-width q-mx-auto">
            <div class="mobile-card-bg">
              <div class="mobile-img-wrapper">
                <q-img
                  loading="lazy"
                  src="~assets/internalMentor/6.png"
                  fit="contain"
                  class="mobile-mentor-img"
                  alt="Mentor"
                />
              </div>
              <div class="mobile-mentor-content">
                <div class="mobile-mentor-name">Engr. Randy A. Joco</div>
                <div class="mobile-mentor-designation">Instructor I</div>
                <div class="mobile-mentor-expertise">
                  Agricultural and Biosystems Engineering, Crop Processing Engineering
                </div>
              </div>
            </div>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="mentor1" class="flex flex-center">
          <q-card class="mobile-mentor-card q-pa-none full-width q-mx-auto">
            <div class="mobile-card-bg">
              <div class="mobile-img-wrapper">
                <q-img
                  loading="lazy"
                  src="~assets/internalMentor/5.png"
                  fit="contain"
                  class="mobile-mentor-img"
                  alt="Mentor"
                />
              </div>
              <div class="mobile-mentor-content">
                <div class="mobile-mentor-name">Engr. Christian B. Hernandez</div>
                <div class="mobile-mentor-designation">Instructor I</div>
                <div class="mobile-mentor-expertise">
                  Agricultural and Biosystems Engineering
                </div>
              </div>
            </div>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="mentor2" class="flex flex-center">
          <q-card class="mobile-mentor-card q-pa-none full-width q-mx-auto">
            <div class="mobile-card-bg">
              <div class="mobile-img-wrapper">
                <q-img
                  loading="lazy"
                  src="~assets/internalMentor/4.png"
                  fit="contain"
                  class="mobile-mentor-img"
                  alt="Mentor"
                />
              </div>
              <div class="mobile-mentor-content">
                <div class="mobile-mentor-name">Engr. Jerrel S. Reyes, Ph.D.</div>
                <div class="mobile-mentor-designation">Assistant Professor IV</div>
                <div class="mobile-mentor-expertise">
                  Agricultural and Biosystems Engineering, Crop Science
                </div>
              </div>
            </div>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const mobileSlide = ref('mentor3');
</script>

<style scoped>
.desktop-only {
  display: block;
}
.q-carousel-mobile-only {
  display: none;
}
@media (max-width: 1024px) {
  .desktop-only {
    display: none !important;
  }
  .q-carousel-mobile-only {
    display: block !important;
    margin-top: 24px;
  }
}

/* Improved Mobile Mentor Card Styles */
.mobile-mentor-card {
  background: linear-gradient(135deg, #fffbe6 60%, #ffe0b2 100%);
  border-radius: 18px;
  box-shadow: 0 4px 18px #0002;
  position: relative;
  overflow: hidden;
  min-height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 24px;
}

.mobile-card-bg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 24px;
}

.mobile-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px #ff914d33;
  margin-bottom: 12px;
}

.mobile-mentor-img {
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid #fffbe6;
}

.mobile-mentor-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 18px;
}

.mobile-mentor-name {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-top: 8px;
  color: #222;
  letter-spacing: 0.5px;
}

.mobile-mentor-designation {
  font-size: 1.02rem;
  text-align: center;
  color: #1976d2;
  font-weight: 600;
  margin-top: 2px;
  margin-bottom: 6px;
}

.mobile-mentor-expertise {
  text-align: center;
  color: #555;
  font-size: 0.98rem;
  margin-top: 6px;
  margin-bottom: 12px;
  padding: 0 6px;
}

.mobile-card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  gap: 6px;
}

.footer-label {
  color: #ff914d;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
}

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
  min-width: 320px;
  min-height: unset;
  height: auto;
}
.custom-quasar-grid {
  display: grid;
  grid-template-columns: 2.8fr 3fr 3fr;
  grid-template-rows: 1.5fr 0.5fr 0.5fr;
  gap: 6px;
  width: 100%;
  height: auto;
  min-height: unset;
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
