import { sleep } from "@/app/lib/util";
import { useState, useEffect } from "react";

export interface ConsoleHeaderProps {
  title: string;
  subtitle: string;
}

const isCapital = new RegExp(/[A-Z]/);

export default function ConsoleHeader(props: ConsoleHeaderProps) {
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
    <div className="bg-zinc-900 max-sm:h-50 h-80 min-h-full max-sm:pt-10 pt-20 font-mono shadow-lg">
      <header className="hero max-w-screen-xl flex items-center text-white mx-12">
        <hgroup>
          <h1
            className="max-sm:text-6xl sm:text-7xl lg:text-8xl mb-3 ease-in-out transition"
            aria-label={title}
          >
            {header}
            {showCursor && "_"}
          </h1>
          <p
            role="doc-subtitle"
            className={`max-sm:text-3xl sm:text-4xl lg:text-6xl ${
              showSubtitle ? "visible" : "invisible"
            }`}
          >
            {subtitle}
          </p>
        </hgroup>
      </header>
    </div>
  );
}
