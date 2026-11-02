const S = 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=VbdflxgAAAAJ&citation_for_view=VbdflxgAAAAJ:'

export const SCHOLAR_PROFILE = 'https://scholar.google.com/citations?user=VbdflxgAAAAJ&hl=en'

export const CONTACT = {
  email: 'fatemeh.kmls@gmail.com',
  emailUniversity: 'fmousavinasab1@gsu.edu',
  linkedin: 'https://www.linkedin.com/in/fatemehsadat-mousavinasab'
}

import type { AreaKey } from './areas'

export type ProjectBlock = string | { cite: string }

export interface Project {
  slug: string
  name: string
  meta?: string
  area: AreaKey
  icon?: string
  // First paragraph is always shown; the rest opens with "Read more".
  body: ProjectBlock[]
  tags: string[]
  link?: { label: string; href: string }
}

export const skills = [
  {
    group: 'Laboratory',
    items: [
      ['Immunology & cell biology', 'Multicolor flow cytometry (FlowJo) and adjusting compensation matrix, FACS/MACS cell sorting, primary cell culture, dendritic cell generation, T-cell hybridoma generation and peptide testing.'],
      ['Molecular biology', 'DNA/RNA isolation, PCR, real-time qPCR, primer design, cDNA synthesis, gel electrophoresis'],
      ['Protein & assays', 'ELISA, Western blot, SDS-PAGE, BCA, exosome isolation'],
      ['Histology & imaging', 'Tissue processing, H&E staining, immunohistochemistry, immunofluorescence, ImageJ'],
      ['In vivo models', 'Mouse colony management, disease induction, injections, gavage, surgery, organ isolation'],
      ['Microbiology', 'Gram staining of bacteria, Capsule staining of bacteria, Biochemical tests: catalase, oxidase, coagulase, Colony count, Disc diffusion, and well diffusion tests for antibacterial resistance'],
      ['Quality (QC/QA)', 'ISO 17025 quality control, laboratory documentation and standards, instrument operation and training, analytical result interpretation']
    ]
  },
  {
    group: 'Computer',
    items: [
      ['Data & software', 'GraphPad Prism, SPSS, REST, FlowJo, ImageJ, Adobe Photoshop, EndNote; NCBI/BLAST, genome and protein databases']
    ]
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
    name: 'Doctoral Research: Defining the Role of Peripheral Regulatory T Cells in Oral Tolerance to Gluten',
    meta: 'Georgia State University · 2022 – present',
    area: 'tcell',
    body: [
      'Celiac disease begins where oral tolerance fails: an ordinary dietary protein is treated as a threat. Regulatory T cells are central to that tolerance, but they come in two kinds — those generated in the thymus and those induced in the periphery, at the mucosal surfaces where food antigens are actually encountered. Separating the contribution of the second group has been the longstanding difficulty, because conventional models remove both at once. My doctoral work addresses this with a novel humanized mouse model in which peripheral regulatory T cell generation is selectively disabled while the thymic compartment remains intact, making it possible to ask directly what peripheral tolerance contributes to protection from gluten-driven enteropathy.',
      'I designed and ran the in vivo studies across the model’s genotype and dietary groups, from study design through to analysis. Gut immune populations were profiled in depth — activated CD4⁺ T cells, regulatory T cells, the Th17/Treg balance, and cytokine production — using multicolor flow cytometry of more than ten parameters, alongside histological assessment and functional assays of regulatory capacity. The work required managing the mouse colonies and performing the full range of in vivo procedures myself, including injections, oral gavage, blood sampling, surgery, and organ isolation. The primary manuscript from this work is currently under review:',
      { cite: 'Mousavinasab F, Szurek EA, Kuczma MP, Cebula A, Murray JA, Marietta E, Ignatowicz L. Investigating the role of peripheral regulatory T cells in oral tolerance to gluten through the development of a novel mouse model of celiac disease. Frontiers in Immunology (under review).' },
      'In parallel, I built a second tool to study antigen recognition directly. I established T-cell hybridomas specific for human class II MHC–peptide complexes, using a thymoma fusion partner and co-culture with HLA-DQ8 dendritic cells for peptide testing — a system that makes gluten peptide presentation measurable in a humanized setting. Because the method is useful well beyond this project, I published it as a step-by-step protocol (Bio-protocol, 2026) so that other laboratories can reproduce it. Throughout, I also trained new students in the core laboratory techniques underlying this work.'
    ],
    tags: ['Celiac disease', 'pTregs', 'HLA-DQ8 mice', 'Nur77-GFP', 'Hybridomas', 'Flow cytometry'],
    link: { label: 'Read the paper', href: S + '5nxA0vEk-isC' }
  },
  {
    slug: 'iso',
    name: 'Laboratory Quality Systems (ISO/IEC 17025)',
    meta: 'GenIran Research Lab, Tehran, Iran · 2020 – 2022',
    area: 'lab',
    body: [
      'ISO/IEC 17025 is the international standard for the competence of testing and calibration laboratories; accreditation against it requires a laboratory to demonstrate not only technical capability but a fully documented quality management system covering method validation, equipment calibration and maintenance, personnel competency, sample handling and traceability, and the control of records and nonconforming work. I was responsible for preparing the documentation package that this standard requires. Working through the laboratory’s workflows, I drafted and compiled the standard operating procedures, quality manual sections, equipment and calibration records, and competency and traceability documentation needed to bring the laboratory’s practices in line with the standard and ready for assessment.',
      'The laboratory had not yet completed accreditation during my time there, so the role was documentation and readiness rather than a formal quality management appointment. The experience gave me a working understanding of how regulated and accredited environments operate: writing procedures that another scientist can follow without ambiguity, keeping records that withstand external review, and treating documentation as part of the experiment rather than an afterthought — a mindset I carry into research work.'
    ],
    tags: ['ISO/IEC 17025', 'SOPs', 'Quality systems', 'Documentation']
  },
  {
    slug: 'training',
    name: 'Building an Immunoassay Training Program',
    meta: 'GenIran Research Lab, Tehran, Iran · 2020 – 2022',
    area: 'lab',
    body: [
      'The laboratory I joined ran an established training program in molecular and cell-based techniques: PCR, animal handling, and a range of cell culture methods, but had no immunoassay capability: no antibody-based techniques were taught, and no projects requiring them were run. Over my two years there I built that section from the ground up. I established the immunology techniques in the laboratory, developed the course and internship curriculum around them, and trained many students in ELISA, Western blot, immunohistochemistry, fluorescence microscopy, and tissue preparation and processing.',
      'The teaching covered the full logic of antibody-based work rather than isolated protocols: how an antibody behaves as a reagent, how to select and validate one, the role of controls, blocking, titration, and specificity, and how to troubleshoot when a result is ambiguous, so that students could reason their way through a new antibody-based assay rather than follow a fixed procedure. This work also gave the laboratory a capability it had not previously had, opening it to projects that depend on immunological techniques.'
    ],
    tags: ['Immunoassays', 'ELISA', 'Western blot', 'Immunohistochemistry', 'Fluorescence microscopy', 'Curriculum design']
  },
  {
    slug: 'ibd',
    name: 'Researcher — Macrophage Polarization in Inflammatory Bowel Disease',
    meta: 'Research Institute for Gastroenterology & Liver Diseases, Tehran, Iran · May – Dec 2019',
    area: 'gut',
    body: [
      'At the institute I worked on the immunological basis of inflammatory bowel disease, focusing on macrophage polarization during acute inflammation and following treatment. The main output of my time there was a full research proposal I designed and wrote: Investigating the effect of tofacitinib on infliximab non-responder patients with ulcerative colitis, by evaluating monocyte polarization toward M1/M2 macrophages in vitro. The question matters clinically — a substantial proportion of ulcerative colitis patients fail to respond to anti-TNF therapy, and whether a JAK inhibitor shifts the macrophage balance in those specific patients is both a mechanistic question and a practical one for treatment selection. The proposal did not move into the experimental phase, as I left the institute before it could be carried out.',
      'What I took from the project was the skill of building a research proposal from the ground up. Writing it meant working through the literature on IBD immunopathology, anti-TNF resistance, JAK inhibition, and macrophage biology closely enough to find a question that was genuinely open, then shaping it into a study with a clear rationale, a feasible in vitro design, defined readouts, and a justification for why the work was worth funding. That was effectively my training in grant writing, and it is a skill I have used in every project since.'
    ],
    tags: ['IBD', 'Macrophage polarization', 'Tofacitinib', 'Grant writing']
  },
  {
    slug: 'supervisor',
    name: 'Laboratory Supervisor — Teaching Laboratory',
    meta: 'Shahid Beheshti University of Medical Sciences, Tehran, Iran · 2017 – 2019',
    area: 'lab',
    body: [
      'For two years I supervised the immunology teaching laboratory for master’s students. The course was taught by a faculty instructor, and I ran the laboratory side of it: organizing students into working groups, setting up and assigning the practical exercises for each session, checking their results, and administering their practical examinations. I also handled the day-to-day running of the laboratory itself — keeping the instruments in working order, showing students how to operate them correctly, managing access and scheduling, and maintaining order and safety in a busy shared space.',
      'The role taught me how a teaching laboratory actually works. I learned to anticipate where a procedure would go wrong before a room full of students got to that step, to keep standards consistent across many pairs of hands, and to give clear, practical guidance to students who were using an instrument or a technique for the first time. It also sharpened how I explain things: when someone is learning a method from scratch, you have to be clear about the principle behind it, not just the steps. That experience is the basis of the mentoring I have done since.'
    ],
    tags: ['Teaching laboratory', 'Instrument training', 'Mentoring', 'Practical exams']
  },
  {
    slug: 'masters',
    name: 'Master’s Thesis — Regulatory T Cells in Pediatric Eosinophilic Esophagitis',
    meta: 'Shahid Beheshti University of Medical Sciences, Tehran, Iran · 2013 – 2016',
    area: 'gut',
    body: [
      'Eosinophilic esophagitis is a chronic, food antigen-driven inflammatory disease of the esophagus and a common cause of feeding difficulty and dysphagia in children. Its defining eosinophil infiltrate is well characterized, but far less is known about the regulatory arm of the local immune response.',
      'The strength of this project was that it was carried out in real patients rather than in a laboratory model. Working with esophageal biopsy specimens from pediatric patients, I profiled the immune cell populations within the inflamed mucosa and found regulatory T cells to be increased in the esophageal tissue, not depleted, as a simple loss-of-tolerance model would predict. An expanded regulatory population alongside persistent inflammation points either to a compensatory response that fails to resolve the disease, or to regulatory cells that are present but functionally insufficient in this microenvironment.',
      'Beyond the finding itself, the project gave me early experience with human clinical material and interpreting immunological data in a clinical context. It shaped the direction of my doctoral work, which asks a closely related question about regulatory T cells and oral tolerance in celiac disease.'
    ],
    tags: ['Eosinophilic esophagitis', 'Tregs', 'GERD', 'Human tissue'],
    link: { label: 'Read the paper', href: S + 'u-x6o8ySG0sC' }
  }
]

export const leadership: Project[] = [
  {
    slug: 'tbsa',
    name: 'Leadership and Management — Vice President, Translational Biomedical Sciences Student Association',
    meta: 'Georgia State University · 2024 – present',
    area: 'autoimmune',
    icon: 'fa-solid fa-people-group',
    body: [
      'I have served as Vice President of the Translational Biomedical Sciences Student Association since 2024. Over that time we organized two Research Days, each drawing 60–70 students and faculty, which gave students across the program a venue to present their work and see what their peers were doing — events that did a great deal to build a scientific community that is both serious and genuinely collegial, where students and faculty can share their work in the same room. Alongside these, we ran workshops for students and arranged scientific site visits, including to Takeda’s pharmaceutical facility, giving students exposure to how the science they are trained in is applied in industry. The program has continued into this year. The role has been one of the most useful experiences of my graduate training outside the laboratory: it taught me to plan events from the ground up, to organize and motivate a team, and to see a long project through from an idea to something people actually show up to.'
    ],
    tags: ['Student association', 'Event organizing', 'Team leadership', 'Workshops']
  }
]
