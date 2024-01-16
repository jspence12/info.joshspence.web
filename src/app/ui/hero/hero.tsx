import { sleep } from "@/app/lib/util";
import { useState, useEffect } from "react";

export interface HeroProps {
  title: string;
  subtitle: string;
}

const isCapital = new RegExp(/[A-Z]/);

export default function Hero(props: HeroProps) {
  const { title, subtitle } = { ...props };
  const [header, setHeader] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const runConsole = async () => {
      const baseWaitTimeMs = 40;

      for (let cycle = 0; cycle < 4; cycle++) {
        setShowCursor(cycle % 2 === 1);
        await sleep(400);
      }

      for (let index = 0; index < title.length; index++) {
        let waitTime = baseWaitTimeMs + Math.floor(Math.random() * 30);
        if (title[index].match(isCapital) != null) {
          waitTime += 100;
        }
        await sleep(waitTime);
        setHeader(title.slice(0, index + 1));
      }

      setShowCursor(false);

      await sleep(350);
      setShowSubtitle(true);
    };

    runConsole().catch(console.error);
  }, [title, subtitle]);

  return (
    <div className="y-center bg-zinc-900 shadow-lg py-12">
      <div className="x-center w-full">
        <header className="hero flex text-white mx-12 max-md:justify-center max-w-screen-3xl w-full">
          <hgroup>
            <h1
              className=" text-6xl sm:text-7xl lg:text-8xl mb-3 transition min-h-16 lg:h-24"
              aria-label={title}
            >
              {header}
              {showCursor && "_"}
            </h1>
            <p
              role="doc-subtitle"
              className={`max-sm:text-3xl sm:text-4xl lg:text-6xl max-md:text-center ${
                showSubtitle ? "visible" : "invisible"
              }`}
            >
              {subtitle}
            </p>
          </hgroup>
        </header>
      </div>
    </div>
  );
}
