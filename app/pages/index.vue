<script setup lang="ts">
import {
  SCHOLAR_PROFILE, CONTACT, projects, skills, publications,
  presentations, peerReview, judging, awards
} from '~/data/portfolio'

useHead({ title: 'Fatemehsadat Mousavinasab, Ph.D. | Immunology' })

const hasContact = CONTACT.email || CONTACT.linkedin || CONTACT.other
</script>

<template>
  <div>
    <header class="hero">
      <svg class="dots" width="100%" height="100%" aria-hidden="true">
        <defs>
          <pattern id="p" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="3" fill="#fff" />
            <circle cx="40" cy="30" r="5" fill="none" stroke="#fff" stroke-width="1.5" />
            <circle cx="22" cy="50" r="2" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p)" />
      </svg>
      <h1>Fatemehsadat Mousavinasab, Ph.D.</h1>
      <p class="tagline">
        Immunologist studying how T lymphocytes develop, are tolerized, and go wrong in autoimmunity.
      </p>
    </header>

    <nav class="nav">
      <div class="inner">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#papers">Papers</a>
        <a href="#awards">Awards</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <section id="projects" class="sec">
      <h2>Projects</h2>
      <p class="lead">Research I have worked on, with links to the published papers.</p>
      <div v-for="p in projects" :key="p.title" class="card">
        <h3>{{ p.title }}</h3>
        <div class="meta">{{ p.place }} · {{ p.period }}</div>
        <ul><li v-for="pt in p.points" :key="pt">{{ pt }}</li></ul>
        <a v-if="p.link" class="more" :href="p.link.href" target="_blank" rel="noopener">{{ p.link.label }} →</a>
      </div>
    </section>

    <section id="skills" class="sec">
      <h2>Skills</h2>
      <div class="grid2" style="margin-top: 22px">
        <div v-for="g in skills" :key="g.group" class="card">
          <h3 style="margin-bottom: 10px">{{ g.group }}</h3>
          <div v-for="[label, text] in g.items" :key="text" class="skill-row">
            <b v-if="label">{{ label }}: </b>{{ text }}
          </div>
        </div>
      </div>
    </section>

    <section id="papers" class="sec">
      <h2>Papers, peer review and judging</h2>
      <p class="lead">
        11 publications. Each title links to its Google Scholar entry.
        <a :href="SCHOLAR_PROFILE" target="_blank" rel="noopener">See the full Google Scholar profile →</a>
      </p>
      <div class="card">
        <div v-for="p in publications" :key="p.title" class="pub">
          <a :href="p.href" target="_blank" rel="noopener">{{ p.title }}</a>
          <div class="sub">{{ p.authors }} {{ p.venue }}, {{ p.year }}</div>
        </div>
      </div>

      <div class="grid2">
        <div class="card">
          <h3 style="margin-bottom: 8px">Conference presentations (6)</h3>
          <ul><li v-for="c in presentations" :key="c">{{ c }}</li></ul>
        </div>
        <div class="card">
          <h3 style="margin-bottom: 8px">Peer review</h3>
          <p style="margin: 0 0 6px">{{ peerReview.summary }}:</p>
          <ul><li v-for="t in peerReview.topics" :key="t">{{ t }}</li></ul>
          <h3 style="margin: 14px 0 8px">Judging</h3>
          <ul><li v-for="j in judging" :key="j">{{ j }}</li></ul>
        </div>
      </div>
    </section>

    <section id="awards" class="sec">
      <h2>Awards, grants and certificates</h2>
      <div class="card" style="margin-top: 22px">
        <div v-for="a in awards" :key="a.text" class="award">
          <div>{{ a.text }}</div>
          <div class="when">{{ a.when }}</div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <h2 style="color: var(--navy); margin: 0 0 12px">Contact</h2>
      <div v-if="hasContact">
        <p v-if="CONTACT.email"><a :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a></p>
        <p v-if="CONTACT.linkedin"><a :href="CONTACT.linkedin" target="_blank" rel="noopener">LinkedIn</a></p>
      </div>
      <p v-else class="empty">Contact details coming soon.</p>
      <p><a :href="SCHOLAR_PROFILE" target="_blank" rel="noopener">Google Scholar</a></p>
    </section>

    <footer class="foot">© Fatemehsadat Mousavinasab</footer>
  </div>
</template>
