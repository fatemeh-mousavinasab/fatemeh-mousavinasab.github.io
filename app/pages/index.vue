<script setup lang="ts">
import {
  SCHOLAR_PROFILE, CONTACT, projects, skills, publications,
  presentations, peerReview, judging, awards
} from '~/data/portfolio'

useHead({ title: 'Fatemehsadat Mousavinasab, Ph.D. | Immunology' })
</script>

<template>
  <q-page>
    <section class="pf-container q-pt-lg">
      <div class="pf-hero pf-dark-panel">
        <div class="pf-hero__glow" aria-hidden="true" />
        <div class="row items-center q-col-gutter-xl pf-hero__content">
          <div class="col-12 col-md-6 column q-gutter-y-lg">
            <div>
              <h1 class="pf-hero__name q-my-none">Fatemehsadat Mousavinasab, Ph.D.</h1>
              <div class="pf-hero__role">Immunologist</div>
              <div class="pf-hero__location pf-glass pf-mono q-mt-md">
                <q-icon name="place" size="16px" />
                <span>Atlanta, Georgia</span>
              </div>
            </div>

            <p class="pf-hero__lede q-mb-none">
              Studying how T lymphocytes develop, are tolerized, and go wrong in autoimmunity. Celiac disease,
              regulatory T cells, and gut inflammation. 11 publications.
            </p>

            <div class="row q-gutter-sm q-pt-sm">
              <q-btn unelevated no-caps class="pf-btn pf-btn--solid" label="Google Scholar" icon="fa-brands fa-google-scholar" :href="SCHOLAR_PROFILE" target="_blank" />
              <q-btn v-if="CONTACT.linkedin" flat round class="pf-btn" icon="fa-brands fa-linkedin" :href="CONTACT.linkedin" target="_blank" aria-label="LinkedIn" />
              <q-btn v-if="CONTACT.email" flat round class="pf-btn" icon="mail" :href="`mailto:${CONTACT.email}`" aria-label="Email" />
            </div>
          </div>

          <div class="col-12 col-md-6">
            <AreaPentagon />
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="pf-container q-py-xl">
      <div class="text-h5 text-weight-bold q-mb-lg">Projects</div>
      <div class="column q-gutter-y-lg">
        <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
      </div>
    </section>

    <section id="skills" class="pf-container q-pb-xl">
      <div class="text-h5 text-weight-bold q-mb-lg">Skills</div>
      <div class="row q-col-gutter-md">
        <div v-for="g in skills" :key="g.group" class="col-12 col-md-6">
          <q-card flat bordered class="pf-card full-height">
            <q-card-section>
              <div class="text-subtitle1 text-weight-bold q-mb-sm">{{ g.group }}</div>
              <div v-for="[label, text] in g.items" :key="text" class="q-mb-sm pf-reading">
                <b v-if="label">{{ label }}: </b><span class="pf-muted">{{ text }}</span>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <section id="papers" class="pf-container q-pb-xl">
      <div class="text-h5 text-weight-bold">Papers, peer review and judging</div>
      <p class="pf-muted q-mt-sm q-mb-lg">
        11 publications. Each title opens its Google Scholar page.
        <a :href="SCHOLAR_PROFILE" target="_blank" rel="noopener">See the full profile →</a>
      </p>
      <q-card flat bordered class="pf-card">
        <q-list separator>
          <q-item v-for="p in publications" :key="p.title" clickable :href="p.href" target="_blank" rel="noopener">
            <q-item-section avatar class="gt-xs">
              <div class="pf-hex pf-hex--tint pf-hex--outlined" style="--c: var(--pf-lab)">
                <q-icon name="fa-solid fa-file-lines" size="16px" />
              </div>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-bold">{{ p.title }}</q-item-label>
              <q-item-label caption>{{ p.authors }} {{ p.venue }}, {{ p.year }}</q-item-label>
            </q-item-section>
            <q-item-section side><q-icon name="open_in_new" size="18px" /></q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <div class="row q-col-gutter-md q-mt-xs">
        <div class="col-12 col-md-6">
          <q-card flat bordered class="pf-card full-height">
            <q-card-section>
              <div class="text-subtitle1 text-weight-bold q-mb-sm"><q-icon name="fa-solid fa-chalkboard-user" class="q-mr-sm" />Conference presentations (6)</div>
              <ul class="q-my-none pf-muted"><li v-for="c in presentations" :key="c" class="q-mb-xs">{{ c }}</li></ul>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card flat bordered class="pf-card full-height">
            <q-card-section>
              <div class="text-subtitle1 text-weight-bold q-mb-sm"><q-icon name="fa-solid fa-pen-ruler" class="q-mr-sm" />Peer review</div>
              <p class="pf-muted q-mb-xs">{{ peerReview.summary }}:</p>
              <ul class="q-mt-none pf-muted"><li v-for="t in peerReview.topics" :key="t">{{ t }}</li></ul>
              <div class="text-subtitle1 text-weight-bold q-mb-sm q-mt-md"><q-icon name="fa-solid fa-scale-balanced" class="q-mr-sm" />Judging</div>
              <ul class="q-my-none pf-muted"><li v-for="j in judging" :key="j">{{ j }}</li></ul>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <section id="awards" class="pf-container q-pb-xl">
      <div class="text-h5 text-weight-bold q-mb-lg">Awards, grants and certificates</div>
      <q-card flat bordered class="pf-card">
        <q-list separator>
          <q-item v-for="a in awards" :key="a.text">
            <q-item-section avatar class="gt-xs">
              <div class="pf-hex pf-hex--tint pf-hex--outlined" style="--c: var(--pf-gut)">
                <q-icon name="fa-solid fa-award" size="16px" />
              </div>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ a.text }}</q-item-label>
              <q-item-label caption>{{ a.when }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
#projects, #skills, #papers, #awards { scroll-margin-top: var(--pf-header-h); }
.pf-card { background: var(--pf-surface); border-color: var(--pf-line); border-radius: var(--pf-radius-card); box-shadow: var(--pf-shadow); }
.pf-reading { font-family: var(--pf-reading); line-height: 1.6; }

.pf-hero {
  position: relative; overflow: hidden; border-radius: var(--pf-radius-card); padding: 56px;
  @media (max-width: 599px) { padding: 28px 20px; }
  &__glow { position: absolute; right: -10%; top: -20%; width: 60%; height: 140%; background: radial-gradient(closest-side, rgba(255, 255, 255, 0.07), transparent); }
  &__content { position: relative; }
  &__name { font-family: var(--pf-display); font-size: clamp(28px, 3.6vw, 42px); line-height: 1.15; font-weight: 600; letter-spacing: 0.02em; }
  &__role { margin-top: 8px; font-size: clamp(18px, 2.2vw, 22px); font-weight: 500; color: var(--pf-muted); }
  &__location { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: var(--pf-radius-control); font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--pf-text); }
  &__lede { font-size: clamp(17px, 1.7vw, 20px); line-height: 1.55; font-weight: 500; max-width: 42ch; color: var(--pf-text); }
}
</style>
