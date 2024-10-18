import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Instructions */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-mono space-y-6">
          <li className="mb-2">
            Create{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              /about.tsx
            </code>{" "}
            and{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              /contact.tsx
            </code>{" "}
            pages in{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app
            </code>.
            <ul className="list-disc list-inside ml-4">
              <li className="mb-1">
                <code>/about.tsx</code>: Write a brief introduction about yourself.
              </li>
              <li className="mb-1">
                <code>/contact.tsx</code>: Include a simple contact form with fields for name, email, and message.
              </li>
            </ul>

            <div className="flex flex-col gap-4 items-center sm:items-start mt-6">
              <a
                className="rounded-lg border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/about"
              >
                File-Based Routing Assignment
              </a>
            </div>
          </li>

          <li className="mb-2">
            Create a new directory{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              posts/
            </code>{" "}
            inside{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app
            </code>.
            <ul className="list-disc list-inside ml-4">
              <li className="mb-1">
                Create{" "}
                <code>[id].tsx</code> to display blog posts dynamically.
              </li>
              <li className="mb-1">
                Use <code>getStaticProps</code> to simulate fetching a post based on its <code>id</code>.
              </li>
            </ul>

            <div className="flex flex-col gap-4 items-center sm:items-start mt-6">
              <a
                className="rounded-lg border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/posts"
              >
                Dynamic Routes Assignment
              </a>
            </div>
          </li>

          <li className="mb-2">
            Mock a list of blog posts with <code>id</code>, <code>title</code>, and <code>content</code>.
            <ul className="list-disc list-inside ml-4">
              <li className="mb-1">
                Use <code>getStaticProps</code> and <code>getStaticPaths</code> to pre-generate post pages during the build.
              </li>
            </ul>

            <div className="flex flex-col gap-4 items-center sm:items-start mt-6">
              <a
                className="rounded-lg border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/assignments/static-generation"
              >
                Static Generation Assignment
              </a>
            </div>
          </li>
        </ol>

      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Next.js Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Go to Next.js →
        </a>
      </footer>
    </div>
  );
}
