export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#0f172a] text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8 lg:gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="text-lg font-bold tracking-wide text-white">
              INFNOVA Academy
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Empowering learners worldwide with cutting-edge technology
              courses.
              <br />
              Start your journey to success with expert-led training.
            </p>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
              Support
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
              Stay in the loop
            </div>
            <p className="mb-4 text-sm text-gray-400">
              Get curated learning tips and updates in your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} INFNOVA Technologies. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
