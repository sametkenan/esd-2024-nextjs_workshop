export default function TailwindExample() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-start text-white p-10">
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
        Tailwind CSS Showcase
      </h1>
      <p className="text-lg mb-10 text-center max-w-3xl leading-relaxed">
        Explore the power of Tailwind CSS with this showcase, featuring
        gradients, animations, shadows, responsive grids, and interactive
        elements—all built with utility-first classes.
      </p>

      {/* Spacing and Layout Section */}
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-4">Spacing & Layout</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
            <p className="text-base">
              Tailwind provides responsive padding, margin, and spacing
              utilities to quickly adjust layout and spacing for different
              screen sizes.
            </p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
            <p className="text-base">
              You can use the <code>p</code>, <code>m</code>, and other utility
              classes to control the space inside or around elements.
            </p>
          </div>
        </div>
      </div>

      {/* Grid System Section */}
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-4">Grid System</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Grid 1</h3>
            <p className="text-sm">
              This is a 1-column layout on small screens.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Grid 2</h3>
            <p className="text-sm">Adjusts to 2 columns on medium screens.</p>
          </div>
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Grid 3</h3>
            <p className="text-sm">Expands to 4 columns on large screens.</p>
          </div>
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Grid 4</h3>
            <p className="text-sm">Responsive grid utilities.</p>
          </div>
        </div>
      </div>

      {/* Typography and Borders Section */}
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-4">Typography & Borders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-2xl underline">Typography</h3>
            <p className="text-sm mt-2">
              Tailwind provides utilities for font size, weight, line height,
              letter spacing, and text transformations like{" "}
              <span className="uppercase">uppercase</span> or{" "}
              <span className="italic">italic</span>.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md border-4 border-green-500">
            <h3 className="font-bold text-2xl">Borders</h3>
            <p className="text-sm mt-2">
              Use border utilities to style your elements with different border
              widths, colors, and rounded corners.
            </p>
          </div>
        </div>
      </div>

      {/* Flexbox Section */}
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-4">Flexbox</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Flexbox Layout 1</h3>
            <p className="text-sm">
              Tailwind provides flexible box model utilities to control
              alignment and spacing within flex containers.
            </p>
          </div>
          <div className="flex-1 bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Flexbox Layout 2</h3>
            <p className="text-sm">
              With Flex utilities, you can align items both horizontally and
              vertically with ease.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Elements Section */}
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-4">Interactive Elements</h2>
        <div className="grid grid-cols-2 gap-6">
          <button className="bg-purple-500 text-white py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            Hover Me!
          </button>
          <button className="bg-white text-green-500 border-2 border-green-500 py-3 px-6 rounded-full hover:bg-green-500 hover:text-white transition duration-300">
            Focus Button
          </button>
        </div>
      </div>

      {/* Animations Section */}
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-4">Animations</h2>
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full overflow-hidden shadow-lg animate-pulse">
            <img
              src="/images/photo1.jpg"
              alt="Pulsing Animation"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-6xl mb-12 bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Dive into Tailwind CSS?
        </h3>
        <p className="text-lg text-center max-w-md mb-6">
          Tailwind CSS is a versatile tool for building fast and responsive
          interfaces. Explore its utility-first approach and make your
          development experience smoother.
        </p>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
