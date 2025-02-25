import Image from "next/image";
import { ThemeToggle } from "@/app/components/theme-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-12 max-w-4xl w-full">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            III Dark Mode Next.js
          </h1>
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <section className="prose dark:prose-invert max-w-none">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-300">
            Ultimate Dark Mode Template
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A production-ready Next.js 15 boilerplate with seamless dark mode
            implementation, system preference detection, and zero flicker
            guarantees.
          </p>
        </section>

        {/* Implementation Details */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Core Implementation
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              {[
                {
                  title: "🛠 State Management",
                  description:
                    "Powered by Zustand with automatic localStorage persistence. Toggle survives page reloads and browser restarts.",
                },
                {
                  title: "🎨 Theming Engine",
                  description:
                    "Utilizes Tailwind CSS dark mode classes with system preference fallback. No CSS-in-JS runtime overhead.",
                },
                {
                  title: "⚡ Performance First",
                  description:
                    "Theme applied before hydration using smart script injection. Zero flicker, perfect Lighthouse scores.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Key Features
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              {[
                "System preference detection with manual override",
                "Zustand state management with TypeScript",
                "Tailwind CSS dark mode utilities",
                "Fully responsive design",
                "Jest testing configured",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 ${
                      index % 2 === 0 ? "bg-blue-500" : "bg-purple-500"
                    } rounded-full shrink-0`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Usage Example */}
        <section className="prose dark:prose-invert max-w-none">
          <h3 className="text-2xl font-semibold">Get Started</h3>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <code className="text-sm">
              npx create-next-app -e
              https://github.com/your-username/iii-dark-mode-nextjs
            </code>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Clone the template and start building with perfect dark mode out of
            the box. Customize colors in `tailwind.config.js` and add your own
            content while keeping the theming system intact.
          </p>
        </section>
        {/* Usage Example */}
        <section className="prose dark:prose-invert max-w-none">
          <h3 className="text-2xl font-semibold">Why no change global.css</h3>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <code className="text-sm">
              npx create-next-app -e
              https://github.com/your-username/iii-dark-mode-nextjs
            </code>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Why No Changes to globals.css? Tailwind’s dark: variants are
            compiled into your CSS at build time. The dark class is dynamically
            added/removed at runtime, so no custom CSS is needed. What If You
            Want Custom Dark Mode Styles? If you need custom styles outside of
            Tailwind’s utilities, you can still use the dark class in
            globals.css:
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold">Why no change global.css</h3>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <pre className="text-sm">
              <code>
                {`/* globals.css */
.custom-element {
  background: white;
  color: black;
}

.dark .custom-element {
  background: black;
  color: white;
}`}
              </code>
            </pre>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Why No Changes to globals.css? Tailwind’s dark: variants are
            compiled into your CSS at build time. The dark class is dynamically
            added/removed at runtime, so no custom CSS is needed. What If You
            Want Custom Dark Mode Styles? If you need custom styles outside of
            Tailwind’s utilities, you can still use the dark class in
            globals.css:
          </p>
        </section>

        <section>
      <h3 className="text-2xl font-semibold">Why no change global.css</h3>
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
        <pre className="text-sm">
          <code>
            {`/* globals.css */
.custom-element {
  background: white;
  color: black;
}

.dark .custom-element {
  background: black;
  color: white;
}`}
          </code>
        </pre>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        
        Why No Changes to globals.css? Tailwind &apos;s dark: variants are compiled into your CSS at build time.
        The dark class is dynamically added/removed at runtime, so no custom CSS is needed.
        What If You Want Custom Dark Mode Styles? If you need custom styles outside of Tailwind &apos;s utilities,
        you can still use the dark class in globals.css:
      </p>
    </section>
    <section>
    <h1>Using HTML Character Entities</h1>
    <p>To display a less than sign, use &lt;.</p>
    <p>To display a greater than sign, use &gt;.</p>
    <p>To display an ampersand, use &amp;.</p>
    <p>To display double quotes, use &quot;.</p>
    <p>To display single quotes, use &apos;.</p>
    
    <h2>Example Code Snippet</h2>
    <pre>
        <code>
            &lt;div&gt;This is a div&lt;/div&gt;
        </code>
    </pre>
      </section>
      </main>
    </div>
  );
}
