const S = 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=VbdflxgAAAAJ&citation_for_view=VbdflxgAAAAJ:'

export const SCHOLAR_PROFILE = 'https://scholar.google.com/citations?user=VbdflxgAAAAJ&hl=en'

export const CONTACT = {
  email: 'fatemeh.kmls@gmail.com',
  emailUniversity: 'fmousavinasab1@gsu.edu',
  linkedin: 'https://www.linkedin.com/in/fatemehsadat-mousavinasab'
}

import type { AreaKey } from './areas'

export interface Project {
  slug: string
  name: string
  area: AreaKey
  summary: string
  tags: string[]
  link?: { label: string; href: string }
}

export const skills = [
  {
    group: 'Laboratory',
    items: [
      ['Molecular biology', 'DNA/RNA isolation, primer design, PCR, ARMS-PCR, Tetra-ARMS PCR, RFLP, electrophoresis, cDNA synthesis, real-time qPCR'],
      ['Protein work', 'Protein and exosome isolation, BCA assay, SDS-PAGE, Western blot, ELISA'],
      ['Histology', 'Tissue processing, H&E staining, immunohistochemistry, immunofluorescence'],
      ['Cell biology', 'Cell culture, dendritic cell induction, cell sorting (MACS, FACS), multicolor flow cytometry and compensation, hybridoma creation and peptide testing'],
      ['Animal models', 'Colony management, injection, blood sampling, gavage, mouse surgery, organ isolation, disease induction (celiac disease, colitis)']
    ]
  },
  {
    group: 'Computer',
    items: [
      ['Bioinformatics', 'NCBI, BLAST, protein databases, genome browsers, multiple alignments'],
      ['Software', 'EndNote, Microsoft Office, SPSS, GraphPad Prism, FlowJo, ImageJ, Adobe Photoshop']
    ]
  },
  {
    group: 'Soft skills',
    items: [['', 'Collaboration, adaptability, motivating others, problem-solving, time management, critical thinking, public speaking, project management']]
  },
  {
    group: 'Teaching and leadership',
    items: [['', 'Teaching assistant (2017–2019), course instructor, vice president of the Translational Biomedical Sciences Student Association (TBSA)']]
  }
]

export const publications = [
  { authors: 'Mousavinasab F, et al.', venue: 'Bio-protocol', year: 2026, title: 'Improved protocol for CD4⁺ hybridomas', href: S + '5nxA0vEk-isC' },
  { authors: 'Khatami S, et al.', venue: 'Iran J Immunol', year: 2026, title: 'Eosinophilic granules in colonic biopsies', href: S + '8k81kl-MbHgC' },
  { authors: 'Ebrahimi S, et al.', venue: 'Pediatr Gastroenterol Hepatol Nutr', year: 2025, title: 'Eosinophilic granules in esophageal biopsies', href: S + 'hqOjcs7Dif8C' },
  { authors: 'Salehi-Sardoei A, et al.', venue: 'Elsevier (book chapter)', year: 2024, title: 'Endophytic fungi and microbial engineering', href: S + 'Se3iqnhoufwC' },
  { authors: 'Mousavinasab F, et al.', venue: 'Cancer Cell Int', year: 2023, title: 'Microbiome modulation in inflammatory diseases', href: S + 'roLk4NBRz8UC' },
  { authors: 'Aghaei-Zarch SM, et al.', venue: 'Biomed Pharmacother', year: 2023, title: 'Particulate matter and apoptosis', href: S + 'WF5omc3nYNoC' },
  { authors: 'Hoorzad P, et al.', venue: 'Diabetes Res Clin Pract', year: 2023, title: 'lncRNA/miRNA-NFκB network in diabetes', href: S + 'ufrVoPGSRksC' },
  { authors: 'Mousavinasab F, Razani E.', venue: 'Iran J Blood Cancer', year: 2023, title: 'Vesicular stomatitis virus for cancer therapy', href: S + '_FxGoFyzp5QC' },
  { authors: 'Al-Zaidi H, et al.', venue: 'Cell Mol Biomed Rep', year: 2023, title: 'GJB2 and SLC26A4 in Pendred syndrome', href: S + 'eQOLeE2rZwMC' },
  { authors: 'Abdolahy M, et al.', venue: 'Gastroenterol Hepatol Bed Bench', year: 2021, title: 'Tregs in the peripheral blood of children with EoE', href: S + 'W7OEmFMy1HYC' },
  { authors: 'Mousavinasab F, et al.', venue: 'Allergol Immunopathol', year: 2019, title: 'Tregs in eosinophilic esophagitis tissue', href: S + 'u-x6o8ySG0sC' }
]

export const presentations = [
  'Immunology 2026 (AAI), Boston',
  'Digestive Disease Research Day 2026',
  '2025 Southeast Regional Clinical & Translational Science Conference',
  '4th and 3rd Annual Graduate Conferences for Research, Scholarship, and Creative Activity (2026 and 2025)',
  '2nd Research Day, Institute for Biomedical Sciences'
]

export const peerReview = {
  summary: 'Six manuscript reviews for Cellular, Molecular and Biomedical Reports (2023)',
  topics: ['Thalassemia liver enzymes (two reviews)', "Gut microbiota and Parkinson's disease", 'PCOS (two reviews)', 'Bee products in skin and hair care']
}

export const judging = [
  '19th Georgia State Undergraduate Research Conference (April 8, 2025)',
  '18th Georgia State Undergraduate Research Conference (April 11, 2024)'
]

export const awards = [
  { text: 'Poster presentation award, IMMUNOLOGY 2026 (AAI)', when: 'April 2026, Boston' },
  { text: "Dr. Suresh Sitaraman's award, top three abstracts at Digestive Disease Research Day", when: 'September 4, 2026' },
  { text: 'Best oral presentation award, Basic and Advanced Translational Immunology course', when: 'October 2019, Jaipur, India' },
  { text: 'FIMSA travel grant', when: 'October 2019, Jaipur, India' },
  { text: 'EFIS travel grant, SEEIS 2018', when: 'October 2018, Yerevan, Armenia' },
  { text: 'EAACI junior member travel grant', when: 'June 2017, Helsinki' }
]

export const projects: Project[] = [
  {
    slug: 'phd',
    name: 'PhD research: how Tregs keep us tolerant to gluten',
    area: 'tcell',
    summary:
      'Georgia State University, 2022 – present. Studying how T lymphocytes develop and work in autoimmune diseases such as celiac disease, using genetically manipulated mice. Built a new mouse model to test the role of peripheral regulatory T cells (pTregs) in oral tolerance to gluten, and found autoreactive CD4⁺Foxp3⁻ T-cell clones in humanized HLA-DQ8 mice using Nur77-GFP hybridomas. The hybridoma method is published as a Bio-protocol.',
    tags: ['Celiac disease', 'pTregs', 'HLA-DQ8 mice', 'Nur77-GFP', 'Hybridomas', 'Flow cytometry'],
    link: { label: 'Read the paper', href: S + '5nxA0vEk-isC' }
  },
  {
    slug: 'masters',
    name: "Master's dissertation: Tregs in eosinophilic esophagitis",
    area: 'gut',
    summary:
      'Shahid Beheshti University, 2013 – 2016. Counted regulatory T cells in the esophageal tissue of eosinophilic esophagitis patients and compared them with GERD and control groups.',
    tags: ['Eosinophilic esophagitis', 'Tregs', 'GERD', 'Human tissue'],
    link: { label: 'Read the paper', href: S + 'u-x6o8ySG0sC' }
  },
  {
    slug: 'rigld',
    name: 'IBD immunology projects',
    area: 'gut',
    summary:
      'Research Institute for Gastroenterology & Liver Diseases, Tehran, 2019. Designed projects on immunologic responses in IBD, including macrophage polarization during acute inflammation and after treatment.',
    tags: ['IBD', 'Macrophage polarization', 'Study design']
  },
  {
    slug: 'geniran',
    name: 'Immunoassay research, teaching and quality control',
    area: 'lab',
    summary:
      'GenIran Research Lab, Tehran, 2020 – 2022. Ran research projects that needed immunoassay techniques, founded a practical immunoassay course, taught a molecular genetics course, and managed quality control under ISO 17025.',
    tags: ['Immunoassays', 'ISO 17025', 'Teaching', 'Quality control']
  }
]
