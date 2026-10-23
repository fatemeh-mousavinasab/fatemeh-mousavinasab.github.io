export type AreaKey = 'tcell' | 'autoimmune' | 'gut' | 'lab' | 'animal'

export interface Area {
  key: AreaKey
  label: string
  icon: string
}

// The five areas shown on the hero diagram. Icons come from Font Awesome (fa-solid) and Material.
export const areas: Area[] = [
  { key: 'tcell', label: 'T cells & Tregs', icon: 'fa-solid fa-virus' },
  { key: 'autoimmune', label: 'Autoimmunity', icon: 'fa-solid fa-dna' },
  { key: 'gut', label: 'Gut inflammation', icon: 'fa-solid fa-disease' },
  { key: 'lab', label: 'Lab methods', icon: 'fa-solid fa-microscope' },
  { key: 'animal', label: 'Mouse models', icon: 'fa-solid fa-vial' }
]

export const areaColor = (key: AreaKey) => `var(--pf-${key})`
export const areaByKey = (key: AreaKey) => areas.find((a) => a.key === key)!
