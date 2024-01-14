export default function About() {
  const yearsExperience = new Date().getFullYear() - 2019;
  return (
    <section aria-label="About">
      <article>
        <p>
          I'm Josh, a back-end engineer with full stack chops! For{" "}
          {yearsExperience} years and counting, I've helped companies write
          maintainable software at scale. I've worked on applications with
          architectures ranging from massive, on-premises-hosted monoliths to
          complex, cloud-based microservices.
        </p>
        <br />
        <p>
          I love seeing the projects and teams I work with on thrive. Who knows
          — maybe that next team will be yours! Let's talk:
        </p>
        <div className="flex justify-center mt-4 gap-4">
          <button>Download Résumé</button>|<button>Contact</button>
        </div>
      </article>
    </section>
  );
}
