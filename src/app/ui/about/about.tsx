import Button from "../common/button";
import Footer from "./footer";

export interface AboutProps {
  onClickContact: () => void;
}

export default function About({ onClickContact }: AboutProps) {
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
          I&apos;m Josh, a back-end engineer with full stack chops! For{" "}
          {yearsExperience} years and counting, I&apos;ve helped companies write
          maintainable software at scale. I&apos;ve worked on applications with
          architectures ranging from massive, on-premises-hosted monoliths to
          complex, cloud-based microservices.
        </p>
        <br />
        <p>
          I love seeing the projects and teams I work with on thrive. Who knows
          — maybe that next team will be yours! Let&apos;s talk:
        </p>
      </article>

      <div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-2 my-8 w-full lg:w-3/4">
            <Button text="Résumé" href="#" disabled />
            <Button text="Contact" onClick={onClickContact} />
            <Button
              text="LinkedIn"
              href="https://www.linkedin.com/in/joshua-spence-1835b8103/"
            />
            <Button text="GitHub" href="https://github.com/jspence12" />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
