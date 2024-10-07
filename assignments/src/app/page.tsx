import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Workshop Logo
        <Image
          className="dark:invert"
          src="/nextjs-workshop-logo.svg" // Replace this with your workshop logo if needed
          alt="Next.js Workshop Logo"
          width={180}
          height={38}
          priority
        /> */}

        {/* Instructions */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-mono">
          <li className="mb-2">
            Start by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/pages/index.tsx
            </code>
            .
          </li>
          <li className="mb-2">Learn the basics by completing the assignments below.</li>
          <li>Check the browser for live updates as you save your changes.</li>
        </ol>

        {/* Links to Assignments */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <a
            className="rounded-lg border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/assignments/routing"
          >
            File-Based Routing Assignment
          </a>
          <a
            className="rounded-lg border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/assignments/static-generation"
          >
            Static Generation Assignment
          </a>
          <a
            className="rounded-lg border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/assignments/api-routes"
          >
            API Routes Assignment
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Next.js Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Next.js →
        </a>
      </footer>
    </div>
  );
}
