import AnchorButton from "../common/anchor-button";
import Button from "../common/button";
import Footer from "./footer";

export interface AboutProps {
  onClickContact: () => void;
}

export const aboutTestIds = {
  dynamicYear: "dynamic-year",
};

export default function About({ onClickContact }: AboutProps) {
  const yearsExperience = new Date().getFullYear() - 2019;
  return (
    <section
      aria-label="About"
      className="max-md:col-span-2 flex flex-col justify-between p-6 md:pr-2"
    >
      <article>
        <h2 className="mb-3 ps-5">Hello World!</h2>
        <p data-testid={aboutTestIds.dynamicYear}>
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
            <AnchorButton text="Résumé" href="./Resume-Josh-Spence.pdf" />
            <Button text="Contact" onClick={onClickContact} />
            <AnchorButton
              text="LinkedIn"
              href="https://www.linkedin.com/in/joshua-spence-1835b8103/"
            />
            <AnchorButton text="GitHub" href="https://github.com/jspence12" />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
