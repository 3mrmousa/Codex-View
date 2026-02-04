const projects = [
  {
    title: "Pulse Health",
    description: "Redesigned patient onboarding flows that reduced drop-off by 28%.",
    tags: ["Product UX", "Design Systems", "Research"]
  },
  {
    title: "Lumen Wallet",
    description: "Created a cohesive mobile-to-web ecosystem for a fintech platform.",
    tags: ["Visual Design", "Motion", "Strategy"]
  },
  {
    title: "Atlas Workspace",
    description: "Brought modular UI patterns to a global team collaboration suite.",
    tags: ["Enterprise UX", "IA", "Prototyping"]
  }
];

const experience = [
  {
    role: "Lead Product Designer",
    company: "Northbound Studios",
    time: "2022 - Present",
    summary: "Guiding multidisciplinary teams to deliver AI-enabled workflow tools."
  },
  {
    role: "Senior Experience Designer",
    company: "Studio Meridian",
    time: "2019 - 2022",
    summary: "Scaled a design system used across 14 product squads."
  },
  {
    role: "Product Designer",
    company: "Brightside Labs",
    time: "2016 - 2019",
    summary: "Led MVP launches for healthcare and retail ventures."
  }
];

export default function Home() {
  return (
    <main>
      <nav>
        <div className="nav-shell">
          <strong>Nova Brooks</strong>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">
            Book a call
          </a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p>Product Designer • Strategy • Systems</p>
          <h1>
            Building digital products that feel effortless, intelligent, and alive.
          </h1>
          <p>
            I help startups and enterprise teams craft experiences that are premium,
            inclusive, and ready to scale. From early discovery to launch and
            beyond, I align vision with measurable outcomes.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View case studies
            </a>
            <a className="button ghost" href="#contact">
              Let&apos;s collaborate
            </a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Currently available for</h3>
          <ul>
            <li>• Product strategy + vision workshops</li>
            <li>• Design systems + component libraries</li>
            <li>• End-to-end UX for new product lines</li>
          </ul>
          <div className="pill-list">
            <span className="pill">Remote-first</span>
            <span className="pill">NYC</span>
            <span className="pill">Global teams</span>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-header">
          <h2>Selected Work</h2>
          <p>
            Every engagement is grounded in research, rapid prototyping, and a
            polished handoff to engineering teams.
          </p>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <span>Case Study</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="pill-list">
                {project.tags.map((tag) => (
                  <span className="pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-header">
          <h2>Design Partner &amp; Storyteller</h2>
          <p>
            With 9+ years across fintech, health, and enterprise platforms, I
            translate complex systems into experiences that earn trust.
          </p>
        </div>
        <div className="grid">
          <article className="card">
            <span>What I do</span>
            <h3>Strategy-led design</h3>
            <p>
              I partner with teams to define product vision, map journeys, and
              prioritize features that unlock growth.
            </p>
          </article>
          <article className="card">
            <span>How I work</span>
            <h3>Collaborative by default</h3>
            <p>
              Workshops, co-creation, and rapid feedback loops ensure every
              decision is grounded in data and user insight.
            </p>
          </article>
          <article className="card">
            <span>Outcomes</span>
            <h3>Polished execution</h3>
            <p>
              From prototype to production-ready assets, I deliver systems that
              designers and developers love to use.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-header">
          <h2>Process Snapshot</h2>
          <p>
            A structured, flexible approach that keeps teams aligned and
            accelerates product delivery.
          </p>
        </div>
        <div className="feature-strip">
          <div>
            <strong>01</strong>
            <p>Discover: research, audits, and stakeholder alignment.</p>
          </div>
          <div>
            <strong>02</strong>
            <p>Define: map journeys, clarify KPIs, and craft strategy.</p>
          </div>
          <div>
            <strong>03</strong>
            <p>Design: prototypes, design systems, and validation.</p>
          </div>
          <div>
            <strong>04</strong>
            <p>Deliver: developer-ready specs and launch support.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Experience</h2>
          <p>Senior roles across product, innovation, and scale-up teams.</p>
        </div>
        <div className="grid">
          {experience.map((item) => (
            <article className="card" key={item.company}>
              <span>{item.time}</span>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-header">
          <h2>Let&apos;s build what&apos;s next</h2>
          <p>
            Share a quick overview of your project and I&apos;ll follow up within two
            business days.
          </p>
        </div>
        <form>
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="email" />
          <textarea placeholder="Tell me about your product" rows={4} />
          <button className="button primary" type="button">
            Send message
          </button>
        </form>
      </section>

      <footer>© 2024 Nova Brooks. All rights reserved.</footer>
    </main>
  );
}
