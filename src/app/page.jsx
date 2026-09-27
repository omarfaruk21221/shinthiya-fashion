import React from "react";
import Link from "next/link";
import Image from "next/image";
// import profilePic from ;

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-rose-200">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              class="rounded-full"
              src="/image/logo.png"
              alt="Logo"
              width={50}
              height={50}
              priority // লোগো হেডারে থাকায় দ্রুত লোড হওয়ার জন্য এটি দেওয়া ভালো
            />
            <span className="text-2xl font-serif text-rose-800 tracking-wide">
              Sinthiya Fashion
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <Link
              href="#collections"
              className="hover:text-rose-600 transition-colors"
            >
              Collections
            </Link>
            <Link
              href="#about"
              className="hover:text-rose-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="hover:text-rose-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <a
            href="https://www.facebook.com/sinthiyafashionbd1015/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-rose-700 transition-colors shadow-sm shadow-rose-200"
          >
            Shop on Facebook
          </a>
          <button className="md:hidden text-stone-600 hover:text-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-rose-50/50">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold tracking-wider uppercase mb-2">
              রুচির ছোঁয়ায় অনন্য
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
              Handcrafted Elegance for Your{" "}
              <span className="text-rose-600 italic">Everyday Beauty</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-lg mx-auto md:mx-0">
              Discover our exclusive collection of bespoke silk thread and stone
              bangles. Elevate your traditional and boutique look with premium,
              meticulously crafted accessories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="https://wa.me/8801768838715"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-rose-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200"
              >
                Order on WhatsApp
              </a>
              <a
                href="https://www.facebook.com/sinthiyafashionbd1015/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-stone-200 text-stone-700 px-8 py-3.5 rounded-full font-medium hover:border-rose-300 hover:text-rose-600 transition-colors"
              >
                Visit Facebook Page
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-stone-500 font-medium">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                100% Handcrafted
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Fast Delivery
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-transparent rounded-full blur-3xl opacity-60"></div>
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop"
              alt="Handcrafted Jewelry"
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="collections" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">
              Our Curated Collections
            </h2>
            <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full mb-6"></div>
            <p className="text-stone-600">
              Browse through our exclusive handcrafted pieces. Each item is made
              with love and precision to add that extra sparkle to your special
              moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="group rounded-2xl overflow-hidden border border-stone-100 bg-stone-50 hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599643477874-5c866f5c0b6b?q=80&w=2800&auto=format&fit=crop"
                  alt="Silk Thread Bangles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-1">
                  Silk Thread Bangles
                </h3>
                <p className="text-sm text-rose-600 font-medium mb-3">
                  সিল্ক থ্রেড চুড়ি
                </p>
                <p className="text-stone-600 mb-6 text-sm line-clamp-2">
                  Vibrant, colorful, and delicately wrapped silk thread bangles
                  perfect for weddings, haldi, and festive occasions.
                </p>
                <a
                  href="https://wa.me/8801768838715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-stone-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-rose-600 transition-colors"
                >
                  Order Now
                </a>
              </div>
            </div>

            {/* Category 2 */}
            <div className="group rounded-2xl overflow-hidden border border-stone-100 bg-stone-50 hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2787&auto=format&fit=crop"
                  alt="Stone Bangles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-1">
                  Stone Bangles
                </h3>
                <p className="text-sm text-rose-600 font-medium mb-3">
                  স্টোন বা কাস্টমাইজড চুড়ি
                </p>
                <p className="text-stone-600 mb-6 text-sm line-clamp-2">
                  Elegant stone-studded bangles and customized designs that
                  bring a luxurious touch to any traditional attire.
                </p>
                <a
                  href="https://wa.me/8801768838715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-stone-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-rose-600 transition-colors"
                >
                  Order Now
                </a>
              </div>
            </div>

            {/* Category 3 */}
            <div className="group rounded-2xl overflow-hidden border border-stone-100 bg-stone-50 hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=2787&auto=format&fit=crop"
                  alt="Boutique & Traditional Jewelry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-1">
                  Boutique Jewelry
                </h3>
                <p className="text-sm text-rose-600 font-medium mb-3">
                  গহনা ও বুটিক কালেকশন
                </p>
                <p className="text-stone-600 mb-6 text-sm line-clamp-2">
                  A premium collection of traditional boutique jewelry,
                  necklaces, and earrings carefully curated for the modern
                  woman.
                </p>
                <a
                  href="https://wa.me/8801768838715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-stone-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-rose-600 transition-colors"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-rose-50/50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-rose-100/50 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2815&auto=format&fit=crop"
                alt="Craftsmanship"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 space-y-6">
              <h2 className="text-3xl font-serif text-stone-900">
                Crafting Beauty with Passion
              </h2>
              <p className="text-stone-600 leading-relaxed">
                At <strong className="text-rose-700">Shinthiya Fashion</strong>,
                we believe that true elegance lies in the details. Based in
                Dhaka, Bangladesh, we specialize in creating exquisite handmade
                jewelry that blends traditional artistry with contemporary
                designs.
              </p>
              <p className="text-stone-600 leading-relaxed">
                From our signature silk thread bangles to our premium stone
                collections, every piece is meticulously crafted to ensure the
                highest quality. We take pride in our attention to detail and
                our commitment to absolute customer satisfaction.
              </p>
              <div className="pt-4 flex gap-4">
                <div className="text-center px-4 py-3 bg-rose-50 rounded-lg">
                  <p className="text-2xl font-semibold text-rose-700">100%</p>
                  <p className="text-xs text-stone-600 uppercase tracking-wider mt-1">
                    Handmade
                  </p>
                </div>
                <div className="text-center px-4 py-3 bg-rose-50 rounded-lg">
                  <p className="text-2xl font-semibold text-rose-700">5k+</p>
                  <p className="text-xs text-stone-600 uppercase tracking-wider mt-1">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-stone-900 text-stone-300 py-16 border-t-4 border-rose-600"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Legal Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white tracking-wide mb-2">
              Shinthiya Fashion
            </h3>
            <p className="text-sm text-stone-400">রুচির ছোঁয়ায় অনন্য</p>
            <div className="pt-4 space-y-2 text-sm">
              <p>
                <strong className="text-stone-200">Legal Business Name:</strong>{" "}
                Shinthiya Fashion
              </p>
              <p>
                <strong className="text-stone-200">Business Address:</strong>{" "}
                Mirpur, Dhaka, Bangladesh
              </p>
              <p>
                <strong className="text-stone-200">Phone:</strong>{" "}
                +8801768838715
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#collections"
                  className="hover:text-rose-400 transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-rose-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sinthiyafashionbd1015/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors"
                >
                  Facebook Page
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801768838715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors"
                >
                  WhatsApp Order
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-rose-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-rose-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-rose-400 transition-colors"
                >
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Shinthiya Fashion. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
