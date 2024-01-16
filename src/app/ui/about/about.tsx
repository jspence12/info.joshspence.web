import Button from "../common/button";
import Footer from "../nav/footer";

export interface AboutProps {}

export default function About() {
  const yearsExperience = new Date().getFullYear() - 2019;
  return (
    <section
      aria-label="About"
      className="max-md:col-span-2 flex flex-col justify-between p-6"
    >
      <article>
        <h4 className="text-5xl mb-2 ps-5 font-bold pb-1 text-yellow-100">
          Hello World!
        </h4>
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
      </article>
      <div className="flex flex-wrap justify-center gap-2 my-8">
        <Button text="Résumé" disabled onClick={() => {}} />
        <Button text="Contact" onClick={() => {}} />
      </div>
      <Footer />
    </section>
  );
}
