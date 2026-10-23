<script setup lang="ts">
import { useQuasar } from 'quasar'
import { CONTACT, SCHOLAR_PROFILE } from '~/data/portfolio'

const $q = useQuasar()
const drawer = ref(false)

const links = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Papers', href: '/#papers' },
  { label: 'Awards', href: '/#awards' }
]
</script>

<template>
  <q-layout view="hHh lpR fff">
    <q-header class="pf-header pf-glass">
      <q-toolbar class="pf-container pf-toolbar">
        <NuxtLink to="/" class="pf-hex pf-logo" aria-label="Fatemehsadat Mousavinasab, home">FM</NuxtLink>
        <q-space />
        <div class="gt-sm row items-center q-gutter-x-xs">
          <q-btn v-for="l in links" :key="l.label" flat no-caps class="pf-btn" :label="l.label" :href="l.href" />
          <q-btn flat round dense class="pf-btn" icon="fa-brands fa-google-scholar" :href="SCHOLAR_PROFILE" target="_blank" aria-label="Google Scholar" />
          <q-btn v-if="CONTACT.linkedin" flat round dense class="pf-btn" icon="fa-brands fa-linkedin" :href="CONTACT.linkedin" target="_blank" aria-label="LinkedIn" />
          <q-btn v-if="CONTACT.email" flat round dense class="pf-btn" icon="mail" :href="`mailto:${CONTACT.email}`" aria-label="Email" />
        </div>
        <q-btn flat round dense class="q-ml-sm" :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'" aria-label="Toggle theme" @click="$q.dark.toggle()" />
        <q-btn flat round dense class="lt-md q-ml-xs" icon="menu" aria-label="Open menu" @click="drawer = true" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay behavior="mobile" class="pf-glass">
      <q-list padding>
        <q-item v-for="l in links" :key="l.label" clickable :href="l.href" @click="drawer = false">
          <q-item-section>{{ l.label }}</q-item-section>
        </q-item>
        <q-item clickable :href="SCHOLAR_PROFILE" target="_blank" @click="drawer = false">
          <q-item-section avatar><q-icon name="fa-brands fa-google-scholar" /></q-item-section>
          <q-item-section>Google Scholar</q-item-section>
        </q-item>
        <q-item v-if="CONTACT.linkedin" clickable :href="CONTACT.linkedin" target="_blank" @click="drawer = false">
          <q-item-section avatar><q-icon name="fa-brands fa-linkedin" /></q-item-section>
          <q-item-section>LinkedIn</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>

    <q-footer class="pf-footer">
      <div class="pf-container row items-center justify-between q-py-lg text-caption pf-muted">
        <span>© 2026 Fatemehsadat Mousavinasab · Atlanta, GA</span>
        <span class="pf-mono">built with Nuxt + Quasar</span>
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped lang="scss">
.pf-header { color: var(--pf-text); border-width: 0; border-radius: 0; box-shadow: var(--pf-header-shadow); }
.pf-footer { background: transparent; border-top: 1px solid var(--pf-line); }
.pf-logo {
  width: 36px; height: 40px; background: var(--pf-text); color: var(--pf-bg);
  font-family: var(--pf-display); font-size: 13px; font-weight: 700; letter-spacing: 0.04em; text-decoration: none;
}
.pf-toolbar { min-height: var(--pf-header-h); }
</style>
