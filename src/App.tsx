import aboutImage from './assets/headshot.jpg';
import mriPosterPdf from './assets/mri_poster.pdf';
import beyondArgentinaImage from './assets/arg.jpg';
import beyondSoccerImage from './assets/soccer.jpg';
import beyondSkiImage from './assets/ski.jpg';
import eplErdImage from './assets/EPL_ERD.png';
import filmfiendSystemArchImage from './assets/FilmfiendSystemArch.png';
import focusPredictDiagramImage from './assets/FocusPredict_system_diagram.png';
import { useEffect, useRef, useState } from 'react';

type Project = {
  title: string;
  keywords: string;
  description: string;
  details?: string;
  media?: { src: string; alt: string; caption?: string };
  links?: Array<{ label: string; href: string }>;
};

function App() {
  const selectedWork: Project[] = [
    {
      title: 'MRI Pipeline for Nicotine Dependence Prediction',
      keywords: 'Data Engineering · Applied ML · Research Project',
      description:
        'End-to-end pipeline that processes multimodal MRI data and trains predictive models to estimate nicotine dependence.',
      details:
        'As part of Professor Satish Nair\'s lab and alongside a PhD student, I worked on applying machine learning to study the neural correlates of nicotine dependence. The project focused on using multimodal MRI data to better understand how structural and functional brain features relate to addiction severity, and whether combining these modalities could improve predictive performance.\n\nWe showed that non-linear models such as SVMs and random forests consistently outperformed traditional GLM-based analyses, while also uncovering additional brain regions linked to addiction through model agnostic feature importance methods. These results suggest that standard linear approaches miss meaningful structure in neuroimaging data.\n\nBuilding on this, we are exploring more detailed feature importance analyses to better understand how predictive signals are distributed across brain regions and subjects. We are also expanding the dataset to improve statistical power and model stability, and investigating latent space representations. Through this, we aim to move beyond prediction alone toward deeper interpretability and generalization.  ',
      links: [{ label: 'SfN 2025 poster (PDF)', href: mriPosterPdf }],
    },
    {
      title: 'English Premier League Analytics App',
      keywords: 'Database Design · API Development · Data Visualization',
      description:
        'iOS app that provides analytics for the English Premier League.',
      details:
        'As a lifelong soccer fan, I wanted to build something that combined my love for the game with my obsession with stats. It also served as a hands-on way to practice full-stack development and data modeling without the complexity of live data ingestion or deployment. The focus was on understanding how data flows through a system. From storage, through an API, to a client rather than on building a production ready pipeline.\n\nThe application is centered around a MySQL relational database that models teams, matches, and results using representative sample data entered manually. On top of this, I implemented a backend service in Python using Flask that exposes analytics through a REST API and handles data access and aggregation. The backend is designed to be extended as additional data or features are added.\n\nThe frontend is an iOS application written in Swift that connects to this API to display match-level information and derived insights, completing the loop from stored data to user-facing output. Although the system runs locally and operates on a static dataset, it mirrors the structure of a larger production pipeline by maintaining clear separation between the database layer, application logic, and presentation layer.',
      media: {
        src: eplErdImage,
        alt: 'Entity relationship diagram for the English Premier League analytics app database schema',
        caption: 'Database ERD',
      },
      links: [{ label: 'GitHub repo', href: 'https://github.com/pl8n4/EPL-Database-Application' }],
    },
    {
      title: 'FocusPredict AI',
      keywords: 'Applied ML · Cloud Architecture · Healthcare · UX',
      description:
        'Diagnostic tool that uses machine learning on neuroimaging data to provide objective ADHD assessments.',
      details:
        'Current ADHD diagnosis relies heavily on subjective methods like the Connors rating scale and observations made from parents and teachers. These methods are context-depndent, inconsistent across children, and lack objective biological signals, leaving 7.1 million U.S. children diagnosed without biological validation and countless others waiting years for answers.\n\nThe working system takes preprocessed fMRI-derived features and performs clinical inference through a React-based dashboard. I trained custom models on the ADHD-200 dataset to distinguish ADHD from neurotypical patterns, then deployed them as managed endpoints on Azure Machine Learning for real-time inference. To address the models being ‘black boxes’, I integrated SHAP feature importance analysis with a PubMed-based knowledge retrieval system that generates evidence-backed clinical interpretations using Azure OpenAI. The dashboard visualizes ADHD likelihood scores, confidence intervals, and highlights which brain regions contributed most to each prediction, with citations linking back to peer-reviewed literature. While this is a prototype, the full system would automate the entire pipeline from raw fMRI scans to actionable diagnosis and insights.\n\nKey areas for expansion include: (1) implementing the automated preprocessing pipeline to enable true clinical deployment, (2) moving beyond binary classification to dimensional ADHD subtype prediction, (3) validating against prospective clinical data rather than retrospective research datasets, and (4) exploring transfer learning to generalize the framework to other neurodevelopmental conditions. While significant regulatory and clinical validation hurdles remain, the prototype demonstrates that objective neuroimaging biomarkers combined with interpretable AI could meaningfully complement traditional behavioral assessments.',
      media: {
        src: focusPredictDiagramImage,
        alt: 'System diagram for FocusPredict AI',
        caption: 'System diagram',
      },
    },
    {
      title: 'Filmfiend',
      keywords: 'Backend Development · Authentication · Deployed',
      description:
        'A movie discovery platform that lets users explore films, save personalized watchlists, and access live movie data.',
      details:
        'Filmfiend was a team-based project built as part of my Web Development II (CS4830) course, where I worked primarily as a backend engineer on a movie discovery platform. The goal of the project was to design a full-stack web application that allowed users to search for movies, manage personal watchlists, and persist user data securely.\n\nI was responsible for designing and implementing the backend architecture using Node.js and Express. This included building a RESTful API to handle user authentication, movie data retrieval, and watchlist management. The application integrated the OMDB API to fetch real-time movie information, which was then processed and served to the frontend in a consistent format.\n\nOn the data side, I designed the MongoDB schema to support user accounts and persistent watchlists, and implemented JWT-based authentication to secure API endpoints and manage user sessions. I worked closely with the frontend team to define API contracts and request/response structures, ensuring smooth data flow and secure communication with the Angular client.\n\nThis project gave me experience working within a team environment, translating frontend requirements into backend interfaces, and building authenticated APIs that connect third-party services with application-specific data models.',
      media: {
        src: filmfiendSystemArchImage,
        alt: 'System architecture diagram for the Filmfiend application',
        caption: 'System architecture',
      },
      links: [{ label: 'GitHub repo', href: 'https://github.com/ketchuppacket02/MEAN-Stack-Final-Project' }],
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [embeddedHref, setEmbeddedHref] = useState<string | null>(null);
  const [showEmbeddedMedia, setShowEmbeddedMedia] = useState(false);
  const [beyondPreviewSrc, setBeyondPreviewSrc] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const preloadedImageSrcRef = useRef<Set<string>>(new Set());

  const preloadImage = (src: string) => {
    if (preloadedImageSrcRef.current.has(src)) return;
    preloadedImageSrcRef.current.add(src);
    const img = new Image();
    img.src = src;
    img.decoding = 'async';
    img.decode?.().catch(() => {});
  };

  const openProject = (project: Project) => {
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    setEmbeddedHref(null);
    setShowEmbeddedMedia(false);
    setActiveProject(project);

    if (project.media?.src) {
      const schedule = (cb: () => void) => {
        const requestIdleCallback = (globalThis as unknown as { requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => void })
          .requestIdleCallback;
        if (typeof requestIdleCallback === 'function') {
          requestIdleCallback(cb, { timeout: 1500 });
          return;
        }
        setTimeout(cb, 0);
      };

      schedule(() => preloadImage(project.media!.src));
    }
  };

  const closeProject = () => {
    setActiveProject(null);
    setEmbeddedHref(null);
    setShowEmbeddedMedia(false);
  };

  const closeBeyondPreview = () => setBeyondPreviewSrc(null);

  useEffect(() => {
    if (!activeProject && !beyondPreviewSrc) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProject();
        closeBeyondPreview();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject, beyondPreviewSrc]);

  useEffect(() => {
    if (!activeProject && !beyondPreviewSrc) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject, beyondPreviewSrc]);

  useEffect(() => {
    if (activeProject) {
      closeButtonRef.current?.focus();
      return;
    }
    if (beyondPreviewSrc) return;
    lastFocusRef.current?.focus?.();
  }, [activeProject, beyondPreviewSrc]);

  return (
    <div className="container">
      <header className="header">
        <div className="logo">PL</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#work">Work</a>
          <a href="#beyond">Beyond</a>
        </nav>
      </header>

      <main style={{ marginTop: 48, display: 'grid', gap: 28 }}>
        <section className="panel heroSection" id="about">
          <div className="aboutLayout">
            <div>
              <h1 className="heroTitle">Pablo Lasarte</h1>
              <p className="heroBio">
                I'm a senior studying Computer Science at Mizzou focused on backend systems, data engineering, and applied machine learning. I
                enjoy building reliable pipelines and APIs, working with messy real-world data, and turning complex
                problems into maintainable systems.
              </p>

              <div id="contact" className="contactSection">
                <div className="contactLabel">Get in touch</div>
                <a
                  href="mailto:pablo.lasarte1283@gmail.com"
                  title="Email me"
                  aria-label="Email pablo.lasarte1283@gmail.com"
                  className="contactEmail"
                >
                  pablo.lasarte1283@gmail.com
                </a>
                <ul className="socialLinks">
                  <li>
                    <a href="https://github.com/pl8n4" className="socialLink">GitHub</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/pablo-lasarte-a0a68b204/" className="socialLink">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>

            <img
              className="aboutImage"
              src={aboutImage}
              alt="Pablo Lasarte"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section id="work" className="panel projectsSection">
          <div className="sectionHeader">
            <span className="sectionNumber">01</span>
            <h2>Projects</h2>
          </div>
          <p className="muted" style={{ marginBottom: 24 }}>Here are some of the projects I've worked on both in and out of class. Click on them to learn more!</p>

          <div className="projectsGrid">
            {selectedWork.map((project) => (
              <button
                key={project.title}
                type="button"
                className="panel projectCard"
                onClick={() => openProject(project)}
              >
                <h3 className="projectCardTitle">{project.title}</h3>
                <p className="projectKeywords">{project.keywords}</p>
                <p className="projectDescription">{project.description}</p>
              </button>
            ))}
          </div>
        </section>

        <section id="beyond" className="panel beyondSection">
          <div className="sectionHeader">
            <span className="sectionNumber">02</span>
            <h2>Beyond the Code</h2>
          </div>
          <p className="muted" style={{ marginBottom: 24 }}>
            A few things I care about outside of engineering.
          </p>

          <div className="projectsGrid">
            <article className="panel beyondCard">
              <button
                type="button"
                className="beyondThumb"
                onClick={(e) => {
                  lastFocusRef.current = e.currentTarget;
                  setBeyondPreviewSrc(beyondArgentinaImage);
                }}
                aria-label="Open Argentina photo"
              >
                <img className="beyondImage" src={beyondArgentinaImage} alt="Argentina" loading="lazy" decoding="async" />
              </button>
              <h3 className="beyondCardTitle">Argentine Roots</h3>
              <p className="beyondCardText">
                While I love the U.S., I can't ignore my Argentine roots... I was born and partially raised in Buenos
                Aires, and I'm a passionate advocate for Argentine culture - ask me about the secret to a perfect asado
                or why the 2022 World Cup was up there as one of the greatest moments of my life.
              </p>
            </article>

            <article className="panel beyondCard">
              <button
                type="button"
                className="beyondThumb"
                onClick={(e) => {
                  lastFocusRef.current = e.currentTarget;
                  setBeyondPreviewSrc(beyondSoccerImage);
                }}
                aria-label="Open soccer photo"
              >
                <img className="beyondImage" src={beyondSoccerImage} alt="Soccer" loading="lazy" decoding="async" />
              </button>
              <h3 className="beyondCardTitle">Matchday Rituals</h3>
              <p className="beyondCardText">
                My English Premier League app wasn't just a coding exercise, it was born from a genuine obsession with
                the game. If it's Saturday morning, I'm probably watching the Premier League or my favorite team,
                FC Barcelona.
              </p>
            </article>

            <article className="panel beyondCard">
              <button
                type="button"
                className="beyondThumb"
                onClick={(e) => {
                  lastFocusRef.current = e.currentTarget;
                  setBeyondPreviewSrc(beyondSkiImage);
                }}
                aria-label="Open ski photo"
              >
                <img className="beyondImage" src={beyondSkiImage} alt="Skiing" loading="lazy" decoding="async" />
              </button>
              <h3 className="beyondCardTitle">Active Lifestyle</h3>
              <p className="beyondCardText">
                Whether it's lifting, hiking, or pickup soccer, staying active is a non-negotiable part of my day.
                I love the simple, honest challenge of pushing myself and the consistency required to keep moving forward.
                There's something rewarding about just putting in the work and seeing where it takes you.
              </p>
            </article>
          </div>

          <div className="chips">
            <span className="chip">Travel</span>
            <span className="chip">Soccer</span>
            <span className="chip">Pool</span>
            <span className="chip">Lifting</span>
            <span className="chip">Coffee</span>
            <span className="chip">Cooking</span>
            <span className="chip">Asado</span>
            <span className="chip">Skiing</span>
          </div>

          {beyondPreviewSrc ? (
            <div className="beyondModalOverlay" onClick={closeBeyondPreview} role="presentation">
              <div className="panel beyondModal" role="dialog" aria-modal="true" onClick={closeBeyondPreview}>
                <img className="beyondModalImg" src={beyondPreviewSrc} alt="" />
              </div>
            </div>
          ) : null}
        </section>

        {activeProject && (
          <div className="modalOverlay" onClick={closeProject} role="presentation">
            <div
              className="panel modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modalHeader">
                <div>
                  <h3 id="project-modal-title" className="modalTitle">
                    {activeProject.title}
                  </h3>
                  <p className="modalKeywords">{activeProject.keywords}</p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="modalClose"
                  onClick={closeProject}
                  aria-label="Close project details"
                >
                  ×
                </button>
              </div>

              <p className="muted modalDetails">
                {activeProject.details ?? activeProject.description}
              </p>

              {activeProject.media || activeProject.links?.length ? (
                <div className="modalLinks">
                  {activeProject.media ? (
                    <button
                      type="button"
                      className="modalLinkPill"
                      onClick={() => setShowEmbeddedMedia((current) => !current)}
                    >
                      {showEmbeddedMedia
                        ? `Hide ${activeProject.media.caption ?? 'image'}`
                        : activeProject.media.caption ?? 'View image'}
                    </button>
                  ) : null}
                  {(activeProject.links ?? []).map(({ label, href }) =>
                    href.toLowerCase().endsWith('.pdf') ? (
                      <button
                        key={href}
                        type="button"
                        className="modalLinkPill"
                        onClick={() => setEmbeddedHref((current) => (current === href ? null : href))}
                      >
                        {embeddedHref === href ? `Hide ${label}` : label}
                      </button>
                    ) : (
                      <a key={href} className="modalLinkPill" href={href} target="_blank" rel="noreferrer">
                        {label}
                      </a>
                    ),
                  )}
                </div>
              ) : null}

              {showEmbeddedMedia && activeProject.media ? (
                <figure className="modalMedia" aria-label={activeProject.media.caption ?? 'Project media'}>
                  <img
                    className="modalMediaImg"
                    src={activeProject.media.src}
                    alt={activeProject.media.alt}
                    fetchPriority="high"
                    loading="lazy"
                    decoding="async"
                  />
                  {activeProject.media.caption ? (
                    <figcaption className="muted" style={{ marginTop: 10, fontSize: 13 }}>
                      {activeProject.media.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}

              {embeddedHref ? (
                <div className="pdfEmbed" aria-label="Embedded PDF viewer">
                  <iframe className="pdfFrame" title="Project PDF" src={embeddedHref} />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
