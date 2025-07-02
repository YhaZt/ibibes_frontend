<template>
  <section class="hero-section q-pa-none" id="home">
    <!-- Background Video -->
    <video autoplay muted loop playsinline class="bg-video">
      <source src="~/assets/ibibes.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <!-- Overlay -->
    <div class="section-overlay"></div>
    <!-- Main Content -->
    <div class="q-container hero-content">
      <div class="row q-col-gutter-xl">
        <!-- Left: Welcome Text & Buttons -->
        <div class="col-lg-6 col-12 flex flex-column justify-center q-mb-lg q-mt-lg">
          <h2 class="text-white">Welcome to the MinSU i-BIBES</h2>
          <div class="cd-headline rotate-1 text-white mb-4 pb-2">
            <span>We cater</span>
            <span class="cd-words-wrapper">
              <b class="is-visible">Access</b>
              <b>Opportunities</b>
              <b>Mentorship</b>
            </span>
          </div>
          <div class="custom-btn-group q-gutter-md q-mt-md">
            <q-btn color="primary" label="About Us" to="#about" class="custom-btn" />
            <q-btn
              color="accent"
              label="Become an Incubatee"
              class="custom-btn"
              @click="$emit('open-incubatee-modal')"
            />
          </div>
        </div>
        <!-- Right: SDG Images Grid -->
        <div class="col-lg-6 col-12 flex flex-center mobile-only">
          <div class="sdg-images-grid">
            <div
              class="sdg-image-container sdg8"
              data-content="SDG 8: Decent Work and Economic Growth: The MinSU i-BIBES TBI actively supports job creation through the incubation of innovative businesses that promotes sustainable practices. By equipping local technopreneurs with skills, resources, and networks, the initiative promotes inclusive and decent work opportunities. These efforts contribute to a thriving economic ecosystem, enhancing regional productivity and providing a pathway to sustained economic growth."
            >
              <div class="sdg-card-inner">
                <div class="sdg-card-front">
                  <q-img src="~/assets/sdg/SDG8.png" alt="SDG 8" class="sdg-image" />
                </div>
                <div class="sdg-card-back">
                  <div class="sdg-card-content">
                    SDG 8: Decent Work and Economic Growth: The MinSU i-BIBES TBI actively supports job creation through the incubation of innovative businesses that promotes sustainable practices. By equipping local technopreneurs with skills, resources, and networks, the initiative promotes inclusive and decent work opportunities. These efforts contribute to a thriving economic ecosystem, enhancing regional productivity and providing a pathway to sustained economic growth.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sdg-image-container sdg9"
              data-content="SDG 9: Industry, Innovation, and Infrastructure: MinSU i-BIBES plays a critical role in the development of resilient infrastructure and technologies. The initiative supports startups and enterprises in creating modern, scalable solutions that address regional challenges. By facilitating access to advanced infrastructure and technological expertise, MinSU i-BIBES strengthens the foundation for sustainable industrialization and innovation-driven economic development."
            >
              <div class="sdg-card-inner">
                <div class="sdg-card-front">
                  <q-img src="~/assets/sdg/SDG9.jpg" alt="SDG 9" class="sdg-image" />
                </div>
                <div class="sdg-card-back">
                  <div class="sdg-card-content">
                    SDG 9: Industry, Innovation, and Infrastructure: MinSU i-BIBES plays a critical role in the development of resilient infrastructure and technologies. The initiative supports startups and enterprises in creating modern, scalable solutions that address regional challenges. By facilitating access to advanced infrastructure and technological expertise, MinSU i-BIBES strengthens the foundation for sustainable industrialization and innovation-driven economic development.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sdg-image-container sdg12"
              data-content="SDG 12: Responsible Consumption and Production: MinSU i-BIBES integrates principles of sustainability into its incubation processes, emphasizing the importance of responsible production and consumption. By mentoring businesses to adopt eco-friendly practices and optimize resource use, the initiative ensures that goods and services are produced in a way that minimizes environmental impact. These efforts align with global goals for achieving sustainability and reducing waste throughout the value chain."
            >
              <div class="sdg-card-inner">
                <div class="sdg-card-front">
                  <q-img src="~/assets/sdg/SDG12.jpg" alt="SDG 12" class="sdg-image" />
                </div>
                <div class="sdg-card-back">
                  <div class="sdg-card-content">
                    SDG 12: Responsible Consumption and Production: MinSU i-BIBES integrates principles of sustainability into its incubation processes, emphasizing the importance of responsible production and consumption. By mentoring businesses to adopt eco-friendly practices and optimize resource use, the initiative ensures that goods and services are produced in a way that minimizes environmental impact. These efforts align with global goals for achieving sustainability and reducing waste throughout the value chain.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sdg-image-container sdg17"
              data-content="SDG 17: Partnerships for the Goals: Collaboration lies at the heart of the MinSU i-BIBES’ approach. By prioritizing cross-sectoral partnerships among the academe, industry, national government, and local governments, the initiative strengthens the means of implementation for sustainable development. These partnerships drive innovation, resource sharing, and the alignment of goals across diverse stakeholders, ensuring that the region advances together towards a more inclusive and prosperous future."
            >
              <div class="sdg-card-inner">
                <div class="sdg-card-front">
                  <q-img src="~/assets/sdg/SDG17.jpg" alt="SDG 17" class="sdg-image" />
                </div>
                <div class="sdg-card-back">
                  <div class="sdg-card-content">
                    SDG 17: Partnerships for the Goals: Collaboration lies at the heart of the MinSU i-BIBES’ approach. By prioritizing cross-sectoral partnerships among the academe, industry, national government, and local governments, the initiative strengthens the means of implementation for sustainable development. These partnerships drive innovation, resource sharing, and the alignment of goals across diverse stakeholders, ensuring that the region advances together towards a more inclusive and prosperous future.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Additional SDG Images Row -->
      <div class="sdg-images-row desktop-only">
        <div class="sdg-image-container sdg8">
          <div class="sdg-card-inner">
            <div class="sdg-card-front">
              <q-img src="~/assets/sdg/SDG8.png" alt="SDG 8" class="sdg-image" />
            </div>
            <div class="sdg-card-back">
              <div class="sdg-card-content">
                SDG 8: Decent Work and Economic Growth: The MinSU i-BIBES TBI actively supports job creation through the incubation of innovative businesses that promotes sustainable practices. By equipping local technopreneurs with skills, resources, and networks, the initiative promotes inclusive and decent work opportunities. These efforts contribute to a thriving economic ecosystem, enhancing regional productivity and providing a pathway to sustained economic growth.
              </div>
            </div>
          </div>
        </div>
        <div class="sdg-image-container sdg12">
          <div class="sdg-card-inner">
            <div class="sdg-card-front">
              <q-img src="~/assets/sdg/SDG12.jpg" alt="SDG 12" class="sdg-image" />
            </div>
            <div class="sdg-card-back">
              <div class="sdg-card-content">
                SDG 12: Responsible Consumption and Production: MinSU i-BIBES integrates principles of sustainability into its incubation processes, emphasizing the importance of responsible production and consumption. By mentoring businesses to adopt eco-friendly practices and optimize resource use, the initiative ensures that goods and services are produced in a way that minimizes environmental impact. These efforts align with global goals for achieving sustainability and reducing waste throughout the value chain.
              </div>
            </div>
          </div>
        </div>
        <div class="sdg-image-container sdg9">
          <div class="sdg-card-inner">
            <div class="sdg-card-front">
              <q-img src="~/assets/sdg/SDG9.jpg" alt="SDG 9" class="sdg-image" />
            </div>
            <div class="sdg-card-back">
              <div class="sdg-card-content">
                SDG 9: Industry, Innovation, and Infrastructure: MinSU i-BIBES plays a critical role in the development of resilient infrastructure and technologies. The initiative supports startups and enterprises in creating modern, scalable solutions that address regional challenges. By facilitating access to advanced infrastructure and technological expertise, MinSU i-BIBES strengthens the foundation for sustainable industrialization and innovation-driven economic development.
              </div>
            </div>
          </div>
        </div>
        <div class="sdg-image-container sdg17">
          <div class="sdg-card-inner">
            <div class="sdg-card-front">
              <q-img src="~/assets/sdg/SDG17.jpg" alt="SDG 17" class="sdg-image" />
            </div>
            <div class="sdg-card-back">
              <div class="sdg-card-content">
                SDG 17: Partnerships for the Goals: Collaboration lies at the heart of the MinSU i-BIBES’ approach. By prioritizing cross-sectoral partnerships among the academe, industry, national government, and local governments, the initiative strengthens the means of implementation for sustainable development. These partnerships drive innovation, resource sharing, and the alignment of goals across diverse stakeholders, ensuring that the region advances together towards a more inclusive and prosperous future.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for static hero section
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: calc(100dvh - 64px); /* 64px is your navbar height */
  height: calc(100dvh - 64px);
  width: 100vw;
  overflow: hidden;
  background: #222;
  display: flex;
  align-items: stretch;
  padding-top: 0;
}
.bg-video,
.section-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.hero-svg {
  position: absolute;
  bottom: 0; left: 0;
  width: 100vw;
  z-index: 3;
}
.hero-content {
  position: relative;
  z-index: 4;
  padding-bottom: 7vh;
  padding-top: 64px;
}
.cd-headline {
  font-size: 2.1rem;
  font-weight: 700;
  margin-top: -2rem;
  margin-bottom: 2rem;
}
.cd-words-wrapper b {
  display: inline-block;
  margin-left: 8px;
  color: #ffe082;
  font-weight: 700;
  font-size: 1.2em;
}
.custom-btn-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.custom-btn {
  font-size: 1.1rem;
  font-weight: 300;
  border-radius: 8px;
  max-width: 260px;
  max-height: 30px;
  margin-top: -8vh;
}
.sdg-images-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18px;
  margin-top: -10vh;
  width: 90%;
  max-width: 550px;
}
.sdg-images-row {
  position: absolute;
  right: 4vw;
  bottom: 4vh;
  display: flex;
  gap: 24px;
  z-index: 5;
}
.sdg-image-container {
  width: 13vw;
  aspect-ratio: 1/1;
  perspective: 900px;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  height: 100%;
  box-shadow: 0 2px 8px #0001;
  transition: box-shadow 0.3s;
  position: relative;
  overflow: visible;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.sdg-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(.4,2,.6,1);
  transform-style: preserve-3d;
  border-radius: 12px;
}
.sdg-image-container:hover .sdg-card-inner {
  transform: rotateY(180deg);
}
.sdg-card-front, .sdg-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sdg-card-front {
  z-index: 2;
}
.sdg-card-back {
  transform: rotateY(180deg);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.sdg-card-content {
  color: #fff;
  font-size: 0.85rem;
  padding: 10px 8px;
  text-align: justify;
  line-height: 1.3;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  justify-content: center;
}
.sdg-image {
  width: 70%;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s;
}
.sdg-image-container.sdg8,
.sdg-image-container.sdg8 .sdg-card-front,
.sdg-image-container.sdg8 .sdg-card-back {
  background: #a21942; /* SDG 8 color */
}
.sdg-image-container.sdg9,
.sdg-image-container.sdg9 .sdg-card-front,
.sdg-image-container.sdg9 .sdg-card-back {
  background: #f36d23; /* SDG 9 color */
}
.sdg-image-container.sdg12,
.sdg-image-container.sdg12 .sdg-card-front,
.sdg-image-container.sdg12 .sdg-card-back {
  background: #cd8c2e; /* SDG 12 color */
}
.sdg-image-container.sdg17,
.sdg-image-container.sdg17 .sdg-card-front,
.sdg-image-container.sdg17 .sdg-card-back {
  background: #27426d; /* SDG 17 color */
}
.sdg-image-container:hover .sdg-image {
  transform: none;
}
.sdg-image-container::after {
  display: none !important;
}
@media (max-width: 1024px) {
  .hero-content {
    padding-top: 3vh;
    padding-bottom: 3vh;
  }
  .cd-headline {
    font-size: 1.5rem;
  }
  .sdg-images-grid,
  .sdg-images-row {
    grid-gap: 10px;
    max-width: 320px;
  }
  .sdg-card-content {
    font-size: 0.8rem;
    padding: 10px 6px;
  }
}
@media (max-width: 900px) {
  .sdg-images-row {
    position: static;
    justify-content: center;
    margin-top: 32px;
    flex-wrap: wrap;
    gap: 12px;
  }
  .sdg-image-container {
    width: 90px;
  }
}
@media (max-width: 600px) {
  .hero-section {
    min-height: 60vh;
  }
  .hero-content {
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
  .sdg-images-grid,
  .sdg-images-row {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    max-width: 100vw;
    width: 100vw;
  }
  .sdg-image-container {
    width: 48vw;      /* was 44vw */
    min-width: 140px; /* was 120px */
    max-width: 200px; /* was 160px */
    margin: 0;
  }
  .sdg-card-content {
    font-size: 0.7rem;
    padding: 6px 2px;
  }
}
</style>
