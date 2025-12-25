import aboutImage from './assets/IMG_7034 2.jpg';
import mriPosterPdf from './assets/mri_poster.pdf';
import beyondArgentinaImage from './assets/arg.jpg';
import beyondSoccerImage from './assets/soccer.jpg';
import beyondSkiImage from './assets/ski.jpg';
import { useEffect, useRef, useState } from 'react';

type Project = {
  title: string;
  keywords: string;
  description: string;
  details?: string;
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
        'As part of Professor Satish Nair\'s lab and alongside a PhD student, I worked on applying machine learning to study the neural correlates of nicotine dependence. The project focused on using multimodal MRI data to better understand how structural and functional brain features relate to addiction severity, and whether combining these modalities could improve predictive performance.\n\nWe showed that non-linear models such as SVMs and random forests consistently outperformed traditional GLM-based analyses, while also uncovering additional brain regions linked to addiction through model agnostic feature importance methods. These results suggest that standard linear approaches misses meaningful structure in neuroimaging data.\n\nBuilding on this, we are exploring more detailed feature importance analyses to better understand how predictive signals are distributed across brain regions and subjects. We are also expending the dataset to improve statistical power and model stability, and investigating latent space representations. Through this we aim to move beyond prediction alone toward deeper interpretability and generalization.  ',
      links: [{ label: 'SfN 2025 poster (PDF)', href: mriPosterPdf }],
    },
    {
      title: 'English Premier League Analytics App',
      keywords: 'Database Design · API Development · Data Visualization',
      description:
        'iOS app that provides analytics for the English Premier League.',
      details:
        'As a lifelong soccer fan, I wanted to build something that combined my love for the game with my obsession with stats. It also served as a hands-on way to practice full-stack development and data modeling without the complexity of live data ingestion or deployment. The focus was on understanding how data flows through a system. From storage, through an API, to a client rather than on building a production ready pipeline.\n\nThe application is centered around a MySQL relational database that models teams, matches, and results using representative sample data entered manually. On top of this, I implemented a backend service in Python using Flask that exposes analytics through a REST API and handles data access and aggregation. The backend is designed to be extended as additional data or features are added.\n\nThe frontend is an iOS application written in Swift that connects to this API to display match-level information and derived insights, completing the loop from stored data to user-facing output. Although the system runs locally and operates on a static dataset, it mirrors the structure of a larger production pipeline by maintaining clear separation between the database layer, application logic, and presentation layer.',
      links: [{ label: 'GitHub repo', href: 'https://github.com/pl8n4/EPL-Database-Application' }],
    },
    {
      title: 'Filmfiend',
      keywords: 'Backend Development · Authentication · Deployed',
      description:
        'A movie discovery platform that lets users explore films, save personalized watchlists, and access live movie data.',
      details:
        'Filmfiend was a team-based project built as part of my Web Development II (CS4830) course, where I worked primarily as a backend engineer on a movie discovery platform. The goal of the project was to design a full-stack web application that allowed users to search for movies, manage personal watchlists, and persist user data securely.\n\nI was responsible for designing and implementing the backend architecture using Node.js and Express. This included building a RESTful API to handle user authentication, movie data retrieval, and watchlist management. The application integrated the OMDB API to fetch real-time movie information, which was then processed and served to the frontend in a consistent format.\n\nOn the data side, I designed the MongoDB schema to support user accounts and persistent watchlists, and implemented JWT-based authentication to secure API endpoints and manage user sessions. I worked closely with the frontend team to define API contracts and request/response structures, ensuring smooth data flow and secure communication with the Angular client.\n\nThis project gave me experience working within a team environment, translating frontend requirements into backend interfaces, and building authenticated APIs that connect third-party services with application-specific data models.',
      links: [{ label: 'GitHub repo', href: 'https://github.com/ketchuppacket02/MEAN-Stack-Final-Project' }],
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [embeddedHref, setEmbeddedHref] = useState<string | null>(null);
  const [beyondPreviewSrc, setBeyondPreviewSrc] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const openProject = (project: Project) => {
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
    setEmbeddedHref(null);
  };

  const closeBeyondPreview = () => setBeyondPreviewSrc(null);

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  useEffect(() => {
    if (activeProject) {
      closeButtonRef.current?.focus();
      return;
    }
    lastFocusRef.current?.focus?.();
  }, [activeProject]);

  useEffect(() => {
    setEmbeddedHref(null);
  }, [activeProject?.title]);

  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 650, letterSpacing: '-0.02em' }}>PL</div>
        <nav style={{ display: 'flex', gap: 16 }}>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#work">Work</a>
          <a href="#beyond">Beyond</a>
        </nav>
      </header>

      <main style={{ marginTop: 48, display: 'grid', gap: 24 }}>
        <section className="panel" style={{ padding: 32 }} id="about">
          <div className="aboutLayout">
            <div>
              <h1>Pablo Lasarte</h1>
              <p className="muted" style={{ marginTop: 16, maxWidth: 70 * 8 }}>
                Computer Science senior focused on backend systems, data engineering, and applied machine learning. I
                enjoy building reliable pipelines and APIs, working with messy real-world data, and turning complex
                problems into maintainable systems.
              </p>

              <div id="contact" style={{ marginTop: 18 }}>
                <div className="muted" style={{ marginBottom: 10 }}>
                  Contact me →{' '}
                  <a
                    href="mailto:pablo.lasarte1283@gmail.com"
                    title="Email me"
                    aria-label="Email pablo.lasarte1283@gmail.com"
                    style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}
                  >
                    pablo.lasarte1283@gmail.com
                  </a>
                </div>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>
                    <a href="https://github.com/pl8n4">GitHub</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/pablo-lasarte-a0a68b204/">LinkedIn</a>
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

        <section id="work" className="panel" style={{ padding: 32 }}>
          <h2>Projects</h2>
          <p className="muted" style={{ marginTop: 10 }}>Here are some of the projects I've worked on both in and out of class. Click on them to learn more!</p>

          <div className="projectsGrid" style={{ marginTop: 20 }}>
            {selectedWork.map((project) => (
              <button
                key={project.title}
                type="button"
                className="panel projectCard"
                onClick={() => openProject(project)}
              >
                <h3 style={{ fontSize: 16, marginBottom: 8 }}>{project.title}</h3>
                <p className="muted" style={{ margin: '0 0 8px', fontSize: 13 }}>{project.keywords}</p>
                <p className="muted" style={{ margin: 0 }}>{project.description}</p>
              </button>
            ))}
          </div>
        </section>

        <section id="beyond" className="panel beyondSection" style={{ padding: 32 }}>
          <h2>Beyond the Code</h2>
          <p className="muted" style={{ marginTop: 10 }}>
            A few things I care about outside of engineering.
          </p>

          <div className="projectsGrid" style={{ marginTop: 20 }}>
            <article className="panel beyondCard">
              <button
                type="button"
                className="beyondThumb"
                onClick={() => setBeyondPreviewSrc(beyondArgentinaImage)}
                aria-label="Open Argentina photo"
              >
                <img className="beyondImage" src={beyondArgentinaImage} alt="Argentina" loading="lazy" decoding="async" />
              </button>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>Argentine Roots</h3>
              <p className="muted" style={{ margin: 0 }}>
                While I love the U.S., I can't ignore my Argentine roots... I was born and partially raised in Buenos
                Aires, and I'm a passionate advocate for Argentine culture - ask me about the secret to a perfect asado
                or why the 2022 World Cup was up there as one of the greatest moments of my life.
              </p>
            </article>

            <article className="panel beyondCard">
              <button
                type="button"
                className="beyondThumb"
                onClick={() => setBeyondPreviewSrc(beyondSoccerImage)}
                aria-label="Open soccer photo"
              >
                <img className="beyondImage" src={beyondSoccerImage} alt="Soccer" loading="lazy" decoding="async" />
              </button>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>Matchday Rituals</h3>
              <p className="muted" style={{ margin: 0 }}>
                My English Premier League app wasn't just a coding exercise, it was born from a genuine obsession with
                the game. If it's Saturday morning, I'm probably watching the Premier League or my favorite team,
                Barcelona.
              </p>
            </article>

            <article className="panel beyondCard">
              <button
                type="button"
                className="beyondThumb"
                onClick={() => setBeyondPreviewSrc(beyondSkiImage)}
                aria-label="Open ski photo"
              >
                <img className="beyondImage" src={beyondSkiImage} alt="Skiing" loading="lazy" decoding="async" />
              </button>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>Active Lifestyle</h3>
              <p className="muted" style={{ margin: 0 }}>
                Whether it's lifting, hiking, or pickup soccer, staying active is a non-negotiable part of my day. 
                I love the simple, honest challenge of pushing myself and the consistency required to keep moving forward. 
                There’s something rewarding about just putting in the work and seeing where it takes you.
              </p>
            </article>
          </div>

          <div className="chips" style={{ marginTop: 18 }}>
            <span className="chip">Travel</span>
            <span className="chip">Soccer</span>
            <span className="chip">Pool</span>
            <span className="chip">Lifting</span>
            <span className="chip">Coffee</span>
            <span className="chip">Cooking</span>
            <span className="chip">Asado</span>

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
                  <h3 id="project-modal-title" style={{ fontSize: 18, marginBottom: 6 }}>
                    {activeProject.title}
                  </h3>
                  <p className="muted" style={{ margin: 0, fontSize: 13 }}>{activeProject.keywords}</p>
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

              <p className="muted modalDetails" style={{ marginTop: 16 }}>
                {activeProject.details ?? activeProject.description}
              </p>

              {activeProject.links?.length ? (
                <div className="modalLinks">
                  {activeProject.links.map(({ label, href }) =>
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
