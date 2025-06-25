<template>
  <div class="q-pa-md main-scale-container">
    <!-- Top Cards -->
    <div class="row justify-center q-gutter-md q-mb-md">
      <!-- Main Highlight Card -->
      <q-card class="text-center col-12 col-sm-6 col-md-4" style="max-width: 350px; width: 100%">
        <q-card-section class="text-h6">
          FIFTEEN (15) incubatees
          <q-separator class="my-5" />
          100% aligned with four (4) banner programs
        </q-card-section>
      </q-card>
      <q-card class="text-left col-12 col-sm-6 col-md-4" style="max-width: 350px; width: 100%">
        <q-card-section class="q-gutter-sm column items-start">
          <div class="row items-center q-mb-sm">
            <div
              class="q-mr-sm"
              style="
                width: 60px;
                height: 30px;
                background: linear-gradient(90deg, #ffde59, #ff914d);
                border-radius: 4px;
              "
            ></div>
            <span>Students</span>
          </div>
          <div class="row items-center q-mb-sm">
            <div
              class="q-mr-sm"
              style="
                width: 60px;
                height: 30px;
                background: linear-gradient(90deg, #5de0e6, #004aad);
                border-radius: 4px;
              "
            ></div>
            <span>Faculty Researchers</span>
          </div>
          <div class="row items-center">
            <div
              class="q-mr-sm"
              style="
                width: 60px;
                height: 30px;
                background: linear-gradient(90deg, #ff3131, #ff914d);
                border-radius: 4px;
              "
            ></div>
            <span>Professionals</span>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pt-lg q-col-gutter-sm">
      <!-- Card 1 -->

      <div class="text-center center-label mobile-only">
        <span class="text-h6">
          <span style="color: #1976d2; font-weight: bold; letter-spacing: 1px">
            Biowaste to New Products, Raw Materials, or Bioenergy
          </span>
        </span>
      </div>
      <div class="q-carousel-mobile-only ">
        <q-carousel
          v-model="bioslide"
          swipeable
          animated
          autoplay
          infinite
          control-color="primary"
          height="370px"
          :arrows="false"
        >
          <q-carousel-slide name="bio" class="flex flex-center">
            <q-card class="col-12" style="width: 280px">
              <q-img loading="lazy" src="~assets/bio.png" fit="contain" class="q-mb-md" />
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="cream" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(6)"
              class="col-12 cursor-pointer"
              style="
                background: linear-gradient(90deg, #ffde59, #ff914d);
                min-height: 320px;
                min-width: 260px;
              "
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">C.R.E.A.M.</div>
                  <div class="text-subtitle2">
                    Coco Fiber Recycling for Eco-Friendly Alternative Materials
                  </div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/cream.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Automates coconut husk fiber extraction to reduce waste, increase
                      productivity, and make eco-friendly material production more accessible for
                      small farmers.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <!-- Add more <q-carousel-slide> for more cards -->
        </q-carousel>
      </div>

      <q-card-section class="row q-col-gutter-xs q-gutter-sm desktop-only">
        <q-card class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm" style="width: 260px">
          <q-img loading="lazy" src="~assets/bio.png" fit="contain" class="q-mb-md" />
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(6)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">C.R.E.A.M.</div>
              <div class="text-subtitle2">
                Coco Fiber Recycling for Eco-Friendly Alternative Materials
              </div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/cream.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Automates coconut husk fiber extraction to reduce waste, increase productivity,
                  and make eco-friendly material production more accessible for small farmers.
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-card-section>

      <!-- Card 2 -->
      <q-card-section class="row q-col-gutter-xs q-gutter-sm desktop-only">
        <q-card class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm" style="width: 260px">
          <q-img loading="lazy" src="~assets/inno.png" fit="contain" class="q-mb-md" />
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(9)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #5de0e6, #004aad); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">Golden Island Spirit</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/gold.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Transforms overripe dark-brown Saba bananas into high-quality banana wine,
                  reducing food waste and creating new revenue streams.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(13)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #5de0e6, #004aad); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">Vanamei Food Products</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/vana.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Offers a turmeric-flavored smoked fish in oil combining traditional seafood with
                  health benefits, longer shelf life, and gourmet appeal.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(11)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">BILIM BITES</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/bilim.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Produces sweet, sour, and spicy kamias-based candies that promote local fruit
                  utilization and sustainable practices.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(12)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">CUNI DELI</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/cuni.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Introduces Rabbit Tocino, a nutritious, low-fat alternative to pork tocino made
                  with eco-friendly rabbit farming and traditional Filipino flavors.
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-card-section>
      <div class="text-center center-label mobile-only">
        <span class="text-h6">
          <span style="color: #1976d2; font-weight: bold; letter-spacing: 1px">
            Food Innovation</span
          >
        </span>
      </div>
      <div class="q-carousel-mobile-only">
        <q-carousel
          v-model="innoSlide"
          swipeable
          animated
          autoplay
          infinite
          control-color="primary"
          height="370px"
          :arrows="false"
        >
          <q-carousel-slide name="inno" class="flex flex-center">
            <q-card class="col-12" style="width: 280px">
              <q-img loading="lazy" src="~assets/inno.png" fit="contain" class="q-mb-md" />
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="golden" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(9)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #5de0e6, #004aad); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">Golden Island Spirit</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/gold.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Transforms overripe dark-brown Saba bananas into high-quality banana wine,
                      reducing food waste and creating new revenue streams.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="vanamei" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(13)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #5de0e6, #004aad); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">Vanamei Food Products</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/vana.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Offers a turmeric-flavored smoked fish in oil combining traditional seafood
                      with health benefits, longer shelf life, and gourmet appeal.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="bilim" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(11)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">BILIM BITES</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/bilim.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Produces sweet, sour, and spicy kamias-based candies that promote local fruit
                      utilization and sustainable practices.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="cuni" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(12)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">CUNI DELI</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/cuni.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Introduces Rabbit Tocino, a nutritious, low-fat alternative to pork tocino
                      made with eco-friendly rabbit farming and traditional Filipino flavors.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <!-- Card 3 -->
      <q-card-section class="row q-col-gutter-xs q-gutter-sm desktop-only">
        <q-card class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm" style="width: 260px">
          <q-img loading="lazy" src="~assets/iot.png" fit="contain" class="q-mb-md" />
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(2)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">DoroShop</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/doro.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  A local e-commerce platform supporting rural artisans by selling authentic
                  products online with modern payment and tracking features.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(1)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">Alapaw</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/ala.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  A real-time bus tracking system that improves commuting by providing accurate
                  schedules, fare details, and notifications.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(10)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ff3131, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">Promdi Farm</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/prom.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  An agri-tech startup that empowers smallholder farmers with digital tools to
                  improve productivity and resilience.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(8)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ff3131, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">WanderBridge</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/wander.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Connects travelers and tourism stakeholders through a digital platform for
                  bookings, services, and sustainable tourism promotion.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(4)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">VicPubMart</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/vic.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  A mobile and web-based marketplace that makes grocery shopping more efficient and
                  accessible through centralized listings and local delivery.
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-card-section>
      <div class="text-center center-label mobile-only">
        <span class="text-h6">
          <span style="color: #1976d2; font-weight: bold; letter-spacing: 1px">
            IoT for Sustainable Community</span
          >
        </span>
      </div>
      <div class="q-carousel-mobile-only">
        <q-carousel
          v-model="iotSlide"
          swipeable
          animated
          autoplay
          infinite
          control-color="primary"
          height="370px"
          :arrows="false"
        >
          <q-carousel-slide name="iot" class="flex flex-center">
            <q-card class="col-12" style="width: 280px">
              <q-img loading="lazy" src="~assets/iot.png" fit="contain" class="q-mb-md" />
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="doro" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(2)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">DoroShop</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/doro.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      A local e-commerce platform supporting rural artisans by selling authentic
                      products online with modern payment and tracking features.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="alapaw" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(1)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">Alapaw</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/ala.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      A real-time bus tracking system that improves commuting by providing accurate
                      schedules, fare details, and notifications.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="promdi" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(10)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ff3131, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">Promdi Farm</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/prom.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      An agri-tech startup that empowers smallholder farmers with digital tools to
                      improve productivity and resilience.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="wander" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(8)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ff3131, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">WanderBridge</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/wander.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Connects travelers and tourism stakeholders through a digital platform for
                      bookings, services, and sustainable tourism promotion.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="vicpubmart" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(4)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">VicPubMart</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/vic.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      A mobile and web-based marketplace that makes grocery shopping more efficient
                      and accessible through centralized listings and local delivery.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <!-- Card 4 -->
      <q-card-section class="row q-col-gutter-xs q-gutter-sm desktop-only">
        <q-card class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm" style="width: 260px">
          <q-img loading="lazy" src="~assets/smart.png" fit="contain" class="q-mb-md" />
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(7)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ff3131, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">DaloyIQ</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/daloy.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Offers an IoT-powered aquaponics system that optimizes water use, boosts yield,
                  and minimizes crop loss for sustainable farming.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(3)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">UPA</div>
              <div class="text-subtitle2">Underlease Property in Alcate</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/upa.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Provides an online platform for students to find and book suitable boarding houses
                  with ease, transparency, and convenience.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(15)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">I.G.A. Farm</div>
              <div class="text-subtitle2">Integrated Gold-Agri Farm</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/iga.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Integrates vermicomposting of RTL chicken biowaste to produce organic fertilizer,
                  promoting sustainable farming and zero-waste systems.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(5)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">AquaCray Tech</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/aqua.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Delivers smart, sensor-based monitoring of crayfish habitats to ensure optimal
                  water quality and sustainable aquaculture.
                </div>
              </div>
            </div>
          </div>
        </q-card>
        <q-card
          clickable
          v-ripple
          @click="goToIncubatee(14)"
          class="col-12 col-sm-6 col-md-4 col-lg-2 q-mb-sm cursor-pointer"
          style="background: linear-gradient(90deg, #ff3131, #ff914d); min-height: 320px"
        >
          <div class="column fit">
            <div class="q-pa-sm" style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)">
              <div class="text-bold text-h4 text-md-h3 text-lg-h2">Cray King</div>
              <q-separator class="my-1" />
            </div>
            <div class="row fit" style="flex: 1">
              <div
                class="flex flex-center"
                style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
              >
                <q-img
                  loading="lazy"
                  src="~assets/incubatee/cray.png"
                  fit="contain"
                  style="max-height: 100%; max-width: 100%"
                />
              </div>
              <div
                class="col q-pa-sm"
                style="
                  background-color: rgba(255, 255, 255, 0.3);
                  display: flex;
                  align-items: center;
                "
              >
                <div>
                  Specializes in organic Red Claw Crayfish farming using eco-friendly tech to
                  deliver premium seafood and support local livelihoods.
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-card-section>
      <div class="text-center center-label mobile-only">
        <span class="text-h6">
          <span style="color: #1976d2; font-weight: bold; letter-spacing: 1px">
            Smart Agriculture & Fisheries</span
          >
        </span>
      </div>
      <div class="q-carousel-mobile-only">
        <q-carousel
          v-model="smartSlide"
          swipeable
          animated
          autoplay
          infinite
          control-color="primary"
          height="370px"
          :arrows="false"
        >
          <q-carousel-slide name="smart" class="flex flex-center">
            <q-card class="col-12" style="width: 280px">
              <q-img loading="lazy" src="~assets/smart.png" fit="contain" class="q-mb-md" />
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="daloy" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(7)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ff3131, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">DaloyIQ</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/daloy.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Offers an IoT-powered aquaponics system that optimizes water use, boosts
                      yield, and minimizes crop loss for sustainable farming.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="upa" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(3)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">UPA</div>
                  <div class="text-subtitle2">Underlease Property in Alcate</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/upa.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Provides an online platform for students to find and book suitable boarding
                      houses with ease, transparency, and convenience.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="iga" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(15)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">I.G.A. Farm</div>
                  <div class="text-subtitle2">Integrated Gold-Agri Farm</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/iga.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Integrates vermicomposting of RTL chicken biowaste to produce organic
                      fertilizer, promoting sustainable farming and zero-waste systems.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="aqua" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(5)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ffde59, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">AquaCray Tech</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/aqua.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Delivers smart, sensor-based monitoring of crayfish habitats to ensure optimal
                      water quality and sustainable aquaculture.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="cray" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToIncubatee(14)"
              class="col-12 cursor-pointer"
              style="background: linear-gradient(90deg, #ff3131, #ff914d); min-height: 320px"
            >
              <div class="column fit">
                <div
                  class="q-pa-sm"
                  style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.1)"
                >
                  <div class="text-bold text-h4 text-md-h3 text-lg-h2">Cray King</div>
                  <q-separator class="my-1" />
                </div>
                <div class="row fit" style="flex: 1">
                  <div
                    class="flex flex-center"
                    style="flex: 0 0 30%; background-color: rgba(255, 255, 255, 0.2)"
                  >
                    <q-img
                      loading="lazy"
                      src="~assets/incubatee/cray.png"
                      fit="contain"
                      style="max-height: 100%; max-width: 100%"
                    />
                  </div>
                  <div
                    class="col q-pa-sm"
                    style="
                      background-color: rgba(255, 255, 255, 0.3);
                      display: flex;
                      align-items: center;
                    "
                  >
                    <div>
                      Specializes in organic Red Claw Crayfish farming using eco-friendly tech to
                      deliver premium seafood and support local livelihoods.
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar, QSpinnerFacebook } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const bioslide = ref('bio');
const innoSlide = ref('inno');
const iotSlide = ref('iot');
const smartSlide = ref('smart');

const $q = useQuasar();
const router = useRouter();

const goToIncubatee = (id: number) => {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: 'yellow',
    spinnerSize: 140,
    message: 'Loading Incubatee...',
    messageColor: 'yellow',
  });

  setTimeout(() => {
    $q.loading.hide();
    const encodedId = btoa(String(id));
    void router.push({ path: '/incubateePage', query: { id: encodedId } });
  }, 2000);
};
</script>
<style scoped>
.main-scale-container {
  width: 100%;
  margin: 0 auto;
  /* Removed transform: scale to prevent extra scroll space */
}

.q-carousel-mobile-only {
  display: block;
}
@media (min-width: 600px) {
  .q-carousel-mobile-only {
    display: none !important;
  }
}
</style>
