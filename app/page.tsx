export default function Home() {
  return (
    <main>
      <div className="grain" />
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">LD</span>
          <p className="brand-name">Lam Ngoc Dao - Portfolio</p>
        </div>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="section">
        <div className="section-header">
          <h2>About</h2>
        </div>
        <div className="panel-card about-hero">
          <p className="eyebrow">AI Software Engineer · Applied AI Developer</p>
          <h3>Building agentic AI systems that work in the real world.</h3>
          <p>
            I am an AI Software Engineer focused on agentic AI, LLM systems, and
            multimodal applications that solve real-world problems. I bring a mix
            of research and production delivery, combining RAG architectures,
            computer vision, and scalable APIs to build practical, high-impact
            AI products. My career spans AI development, university teaching, and
            technology leadership across large-scale ICT systems.
          </p>
          <p>
            I design production-grade LLM applications, multimodal agents, and RAG
            pipelines that turn complex data into usable workflows. Backed by an
            M.S. in Computer Systems and Engineering (AI and Data Science), 27+ years
            in ICT, and 3+ years in AI delivery.
          </p>
        </div>
      </section>

      <section className="hero">
        <div className="hero-panel">
          <div className="panel-card">
            <p className="eyebrow">Focus Areas</p>
            <ul>
              <li>Agentic AI and LLM orchestration</li>
              <li>RAG pipelines with vector search</li>
              <li>Multimodal AI apps (text, image, audio, video)</li>
              <li>FastAPI, Streamlit, and modern web stacks</li>
              <li>Cloud + DevOps delivery (AWS, GCP, Docker, K8s)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-header">
          <h2>Projects</h2>
          <p>AI products and research-driven prototypes from GitHub.</p>
        </div>
        <div className="grid cards">
          <article className="card">
            <div className="card-header">
              <h3>CSTU AI Chatbot</h3>
              <span>Python · RAG · Streamlit</span>
            </div>
            <p>
              Full-stack GenAI chatbot for university knowledge retrieval with
              function calling, Pinecone vector database, and multimodal inputs.
            </p>
            <a
              href="https://github.com/dnlamvhit/CSTU-AI-Chatbot-Project"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </article>
          <article className="card">
            <div className="card-header">
              <h3>Matchder Multimodal AI Chatbot</h3>
              <span>Python · LLM · Supabase</span>
            </div>
            <p>
              Commercial product search and retrieval app using semantic mapping,
              image inputs, and location-aware filtering.
            </p>
            <a
              href="https://github.com/dnlamvhit/Matchder-Chatbot"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </article>
          <article className="card">
            <div className="card-header">
              <h3>Cupertino Stories Generator</h3>
              <span>Python · Multimodal · NLP</span>
            </div>
            <p>
              Storytelling application that transforms PDFs, Word, PowerPoint,
              images, audio, and video into structured narratives.
            </p>
            <a
              href="https://github.com/dnlamvhit/Cupertino-Stories"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </article>
          <article className="card">
            <div className="card-header">
              <h3>Weather Flow</h3>
              <span>Next.js · FastAPI · SQLite</span>
            </div>
            <p>
              Real-time weather forecasting app with CRUD backend, data export,
              and mobile-friendly UI.
            </p>
            <a
              href="https://github.com/dnlamvhit/PMA-WeatherForcast"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </article>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <h2>Experience</h2>
          <p>Leadership in AI delivery, teaching, and large-scale ICT operations.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-role">
              <h3>AI Software & Application Developer</h3>
              <p>Matchder Startup and CSTU Startup Project Team</p>
              <span>04/2024 - Present · 03/2025 - Present</span>
            </div>
            <ul>
              <li>Built production-grade RAG chatbot with FastAPI, Gemini API, and FAISS.</li>
              <li>Delivered multimodal pipelines for text, image, audio, and video extraction.</li>
              <li>Architected AI robotics workflows for automated e-waste sorting.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-role">
              <h3>Graduate Teaching Assistant in AI</h3>
              <p>California Science and Technology University</p>
              <span>07/2024 - Present</span>
            </div>
            <ul>
              <li>Taught full-stack AI development, CV, NLP, and agentic AI courses.</li>
              <li>Mentored GPT application projects and LLM system deployments.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-role">
              <h3>Department Manager</h3>
              <p>Vietnam-Korea University / College of ICT</p>
              <span>10/2016 - 12/2022</span>
            </div>
            <ul>
              <li>Led international cooperation, science and technology programs.</li>
              <li>Managed HR operations, research reviews, and academic events.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-role">
              <h3>Senior Telecom Engineer · Technical Team Leader</h3>
              <p>Vietnam Telecom Network Company</p>
              <span>07/1994 - 06/2015</span>
            </div>
            <ul>
              <li>Built data analytics tools for network monitoring and anomaly detection.</li>
              <li>Led teams delivering large-scale telecom infrastructure projects.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <h2>Skills and Tooling</h2>
          <p>Core capabilities aligned to AI product delivery.</p>
        </div>
        <div className="grid chips">
          <span>Generative AI</span>
          <span>Agentic AI</span>
          <span>LLM</span>
          <span>RAG Systems</span>
          <span>LangChain</span>
          <span>Hugging Face</span>
          <span>Embeddings</span>
          <span>FAISS</span>
          <span>Pinecone</span>
          <span>FastAPI</span>
          <span>Streamlit</span>
          <span>Gradio</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>SQL / NoSQL</span>
          <span>PyTorch</span>
          <span>TensorFlow</span>
          <span>OpenCV</span>
          <span>YOLO</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>AWS</span>
          <span>GCP</span>
          <span>CI/CD</span>
          <span>Leadership</span>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Education</h2>
          <p>Advanced degrees and AI-focused training.</p>
        </div>
        <div className="grid cards">
          <article className="card">
            <h3>M.S. Computer System and Engineering (AI and Data Science)</h3>
            <p>California Science and Technology University, 03/2023 - 06/2024</p>
            <p>
              Capstone: RAG-based AI chatbot with GPT and Pinecone for university
              knowledge retrieval.
            </p>
          </article>
          <article className="card">
            <h3>PhD, Telecommunication Engineering</h3>
            <p>Vietnam Posts and Telecom Institute of Technology, 12/2008 - 08/2014</p>
          </article>
          <article className="card">
            <h3>M.S., Electronics Engineering</h3>
            <p>Vietnam Posts and Telecom Institute of Technology, 09/2005 - 09/2008</p>
          </article>
          <article className="card">
            <h3>B.S., Electronics Engineering</h3>
            <p>Danang University of Science and Technology, 09/1989 - 06/1994</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Certificates and Badges</h2>
          <p>Recent AI and cloud credentials.</p>
        </div>
        <div className="grid cards compact">
          <article className="card">
            <h3>LLM and GenAI</h3>
            <p>
              Architecting LLMs for Technical Solutions, OpenAI APIs,
              GenAI APIs for Practical Applications, GenAI & Azure Bot AI Service.
            </p>
          </article>
          <article className="card">
            <h3>NLP</h3>
            <p>Fundamentals of NLP, Advanced NLP with BERT, Prompt Engineering.</p>
          </article>
          <article className="card">
            <h3>Cloud and AI</h3>
            <p>
              AWS Cloud Practitioner (ML, AI, Data Analytics), Google Cloud
              Generative AI Fundamentals, Gemini for Application Developers.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-header">
          <h2>Contact</h2>
        </div>
        <div className="contact-card">
          <div>
            <h3>Lam Ngoc Dao</h3>
            <p>AI Software Engineer · Applied AI Developer</p>
          </div>
          <div>
            <p>Location: San Jose, CA 95127</p>
            <p>Phone: 858-933-6428</p>
          </div>
          <div>
            <p>
              Email: <a href="mailto:dnlamvhit@gmail.com">dnlamvhit@gmail.com</a>
            </p>
            <p>
              GitHub: <a href="https://github.com/dnlamvhit">github.com/dnlamvhit</a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/lam-dao-871508246/">
                lam-dao-871508246
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Lam Ngoc Dao. All rights reserved.
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/dnlamvhit"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lam-dao-871508246/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="mailto:dnlamvhit@gmail.com" aria-label="Email">
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
