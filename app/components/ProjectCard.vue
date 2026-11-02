<script setup lang="ts">
import type { Project } from '~/data/portfolio'
import { areaByKey as skillByKey, areaColor as skillColor } from '~/data/areas'
import { tagHueOf } from '~/data/tags'

const props = defineProps<{ project: Project }>()
const skill = computed(() => skillByKey(props.project.area))
const icon = computed(() => props.project.icon ?? skill.value.icon)
const first = computed(() => props.project.body[0])
const rest = computed(() => props.project.body.slice(1))
const open = ref(false)

// The half-hexagon is as tall as the card, so its width follows the card's height.
const card = ref<HTMLElement>()
const cardHeight = ref(220)
let observer: ResizeObserver | undefined

onMounted(() => {
  observer = new ResizeObserver(([entry]) => {
    cardHeight.value = entry!.borderBoxSize[0]!.blockSize
  })
  observer.observe(card.value!)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="card"
    class="pf-project"
    :style="{ '--c': skillColor(project.area), '--card-h': `${cardHeight}px` }"
  >
    <div class="pf-project__badge gt-xs" aria-hidden="true">
      <q-icon :name="icon" class="pf-project__badge-icon" />
    </div>

    <div class="pf-project__body column q-gutter-y-sm">
      <div class="row items-center no-wrap q-gutter-x-sm">
        <div class="pf-hex pf-hex--tint xs">
          <q-icon :name="icon" size="18px" />
        </div>
        <div class="pf-project__name">{{ project.name }}</div>
      </div>

      <div v-if="project.meta" class="pf-project__meta pf-mono">{{ project.meta }}</div>

      <p class="pf-project__summary pf-muted q-my-none">{{ first }}</p>
      <q-slide-transition>
        <div v-show="open">
          <template v-for="(b, i) in rest" :key="i">
            <blockquote v-if="typeof b !== 'string'" class="pf-project__cite pf-muted">{{ b.cite }}</blockquote>
            <p v-else class="pf-project__summary pf-muted q-my-none">{{ b }}</p>
          </template>
        </div>
      </q-slide-transition>

      <div class="pf-tags">
        <q-chip
          v-for="tag in project.tags"
          :key="tag"
          dense
          class="pf-tag"
          :style="{ '--h': tagHueOf(tag) }"
          :label="tag"
        />
      </div>

      <div class="row items-center justify-between">
        <q-btn
          v-if="rest.length"
          flat
          no-caps
          class="pf-btn"
          :label="open ? 'Show less' : 'Read more'"
          :icon-right="open ? 'expand_less' : 'expand_more'"
          :aria-expanded="open"
          @click="open = !open"
        />
        <span v-else />
        <q-btn
          v-if="project.link"
          unelevated
          no-caps
          class="pf-btn pf-btn--accent"
          :label="project.link.label"
          icon-right="open_in_new"
          :href="project.link.href"
          target="_blank"
          rel="noopener"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* why-no-Quasar: card with a card-height half hexagon tucked under its left edge */
.pf-project {
  // Capped so a long, expanded card does not stretch the badge (and squeeze the text) in a loop.
  --badge-h: min(var(--card-h), 360px);
  --badge-w: calc(var(--badge-h) * 0.577);
  position: relative;
  overflow: hidden;
  background: var(--pf-surface);
  border: 1px solid var(--pf-line);
  border-radius: var(--pf-radius-card);
  box-shadow: var(--pf-shadow);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  // Right half of a flat-top hexagon: the left half is "hidden" behind the card edge.
  &__badge {
    position: absolute;
    left: 0;
    top: 0;
    height: var(--badge-h);
    width: var(--badge-w);
    display: flex;
    align-items: center;
    padding-left: calc(var(--badge-w) * 0.22);
    color: var(--c);
    background: color-mix(in srgb, var(--c) 14%, var(--pf-surface));
    clip-path: polygon(0 0, 50% 0, 100% 50%, 50% 100%, 0 100%);
  }

  &__badge-icon {
    font-size: calc(var(--badge-w) * 0.36);
  }

  &__body {
    padding: 28px 32px 28px calc(var(--badge-w) + 24px);
  }

  &__name {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  &__meta {
    font-size: 12px;
    letter-spacing: 0.04em;
    color: var(--pf-muted);
  }

  &__cite {
    margin: 0 0 16px;
    padding-left: 16px;
    border-left: 3px solid var(--c);
    font-family: var(--pf-reading);
    font-size: 16px;
    line-height: 1.6;
  }

  &__summary {
    font-family: var(--pf-reading);
    font-size: 17px;
    line-height: 1.65;
    max-width: 68ch;
    padding-bottom: 12px;
  }

  @media (max-width: 599px) {
    &__body {
      padding: 20px;
    }
  }
}
</style>
