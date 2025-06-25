<template>
  <q-layout view="hHh lpR fFf">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="navbar-brand">
          <img src="~assets/logos/ibibes.png" class="logo" />
          <div>
            <div class="brand-title">MinSU i–BIBES</div>
            <div class="brand-caption">ᜡ-ᜪᜲᜪᜲᜰ᜴</div>
          </div>
        </div>
        <div class="nav-links" v-if="!isMobile">
          <a
            v-for="item in nav"
            :key="item.label"
            :href="item.to"
            v-bind="item.target ? { target: item.target } : {}"
            :class="{ active: isActive(item) }"
          >
            {{ item.label }}
          </a>
        </div>
        <button class="hamburger" v-if="isMobile" @click="showMenu = !showMenu">&#9776;</button>
      </div>
      <transition name="slide-fade">
        <div v-if="showMenu && isMobile" class="mobile-menu">
          <a
            v-for="item in nav"
            :key="item.label"
            :href="item.to"
            v-bind="item.target ? { target: item.target } : {}"
            :class="{ active: isActive(item) }"
            @click="showMenu = false"
            >{{ item.label }}</a
          >
        </div>
      </transition>
    </nav>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const showMenu = ref(false);
const nav = [
  { label: 'Program', to: 'https://minsuibibes.com/program', target: '_blank' },
  { label: 'Incubatees', to: '/incubatee#/incubatee' },
  { label: 'Mentors', to: '/mentor#/mentor' },
  { label: 'Internal Mentors', to: '/internalMentor#/internalMentor' },
];
type NavItem = {
  label: string;
  to: string;
  target?: string;
};
function isActive(item: NavItem) {
  return route.fullPath === item.to;
}
const isMobile = ref(window.innerWidth < 768);
function handleResize() {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) showMenu.value = false;
}
onMounted(() => window.addEventListener('resize', handleResize));
onUnmounted(() => window.removeEventListener('resize', handleResize));
</script>

<style scoped>
.navbar {
  background: #388e5a;
  color: #fff;
  position: relative;
  z-index: 10;
}
.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
}
.navbar-brand {
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
  margin-right: 10px;
}
.brand-title {
  font-weight: bold;
  font-size: 1.2rem;
}
.brand-caption {
  font-size: 0.85rem;
}
.nav-links {
  display: flex;
  gap: 24px;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;
}
.nav-links a.active {
  color: #ffde59;
}
.hamburger {
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}
.mobile-menu {
  background: #388e5a;
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 16px 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0 8px 24px #0002;
  z-index: 99;
}
.mobile-menu a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  font-size: 1.1rem;
  transition: color 0.2s;
}
.mobile-menu a.active {
  color: #ffde59;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
@media (max-width: 767px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
@media (min-width: 768px) {
  .mobile-menu,
  .hamburger {
    display: none !important;
  }
}
</style>
