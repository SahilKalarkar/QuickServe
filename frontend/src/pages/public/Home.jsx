import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  Sparkles,
  Zap,
  Home as HomeIcon,
  Car,
  Laptop,
  Paintbrush,
  Scissors,
  Hammer,
} from "lucide-react";

const categories = [
  {
    name: "Home Cleaning",
    description: "Professional cleaning services",
    icon: Sparkles,
  },
  {
    name: "Plumbing",
    description: "Reliable plumbing experts",
    icon: Wrench,
  },
  {
    name: "Electrical",
    description: "Qualified electricians",
    icon: Zap,
  },
  {
    name: "Home Repair",
    description: "Repairs for your home",
    icon: Hammer,
  },
  {
    name: "Painting",
    description: "Give your home a new look",
    icon: Paintbrush,
  },
  {
    name: "Beauty & Salon",
    description: "Salon services at home",
    icon: Scissors,
  },
  {
    name: "Car Services",
    description: "Care for your vehicle",
    icon: Car,
  },
  {
    name: "Tech Support",
    description: "Computer & device support",
    icon: Laptop,
  },
];

const popularServices = [
  {
    title: "Home Deep Cleaning",
    description:
      "Get your home professionally cleaned by verified service providers.",
    price: "Starting from ₹499",
    icon: Sparkles,
  },
  {
    title: "Plumbing Repair",
    description: "Book experienced plumbers for leaks, taps, pipes and more.",
    price: "Starting from ₹299",
    icon: Wrench,
  },
  {
    title: "Electrical Repair",
    description:
      "Find qualified electricians for safe and reliable electrical work.",
    price: "Starting from ₹249",
    icon: Zap,
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Hero Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                <Sparkles size={16} />
                Trusted services, right at your doorstep
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Your everyday services.
                <span className="block text-blue-600">Simplified.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                QuickServe connects you with trusted service providers near you.
                Book a service, track your provider and get the job done without
                leaving your home.
              </p>

              {/* Search Box */}
              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-blue-100/40 sm:flex sm:items-center">
                <div className="flex flex-1 items-center gap-3 px-3 py-3">
                  <Search size={21} className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>

                <Link
                  to="/services"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:mt-0"
                >
                  Find Services
                  <ArrowRight size={17} />
                </Link>
              </div>

              {/* Trust Points */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-green-500" />
                  Verified providers
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-green-500" />
                  Transparent pricing
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-green-500" />
                  Easy booking
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto h-125 max-w-md">
                {/* Main Card */}
                <div className="absolute left-10 top-8 w-80 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Your booking</p>

                      <h3 className="mt-1 text-lg font-bold text-gray-900">
                        Home Cleaning
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Sparkles size={22} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50">
                        <CheckCircle2 size={18} className="text-green-600" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Provider assigned
                        </p>

                        <p className="text-xs text-gray-500">
                          Verified professional
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                        <MapPin size={18} className="text-blue-600" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          On the way
                        </p>

                        <p className="text-xs text-gray-500">
                          Arriving in approximately 12 min
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50">
                        <Clock3 size={18} className="text-orange-500" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Service scheduled
                        </p>

                        <p className="text-xs text-gray-500">Today, 4:30 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Estimated price
                      </span>

                      <span className="text-xl font-bold text-gray-900">
                        ₹599
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating Card */}
                <div className="absolute -right-2 top-64 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50">
                      <Star
                        size={20}
                        className="text-yellow-500"
                        fill="currentColor"
                      />
                    </div>

                    <div>
                      <p className="font-bold text-gray-900">4.9/5</p>

                      <p className="text-xs text-gray-500">Customer rating</p>
                    </div>
                  </div>
                </div>

                {/* Provider Card */}
                <div className="absolute -bottom-2 left-0 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      AS
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Amit Sharma</p>

                      <p className="text-xs text-gray-500">
                        Verified service provider
                      </p>
                    </div>

                    <CheckCircle2 size={18} className="text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STATS */}
      {/* ========================================================= */}

      <section className="border-y bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-100 md:grid-cols-4">
          <div className="px-6 py-8 text-center">
            <p className="text-3xl font-bold text-gray-900">10K+</p>
            <p className="mt-1 text-sm text-gray-500">Services completed</p>
          </div>

          <div className="px-6 py-8 text-center">
            <p className="text-3xl font-bold text-gray-900">2K+</p>
            <p className="mt-1 text-sm text-gray-500">Verified providers</p>
          </div>

          <div className="px-6 py-8 text-center">
            <p className="text-3xl font-bold text-gray-900">4.9/5</p>
            <p className="mt-1 text-sm text-gray-500">Average rating</p>
          </div>

          <div className="px-6 py-8 text-center">
            <p className="text-3xl font-bold text-gray-900">24/7</p>
            <p className="mt-1 text-sm text-gray-500">Support available</p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CATEGORIES */}
      {/* ========================================================= */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Explore services
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                What do you need help with?
              </h2>

              <p className="mt-3 max-w-2xl text-gray-600">
                Choose from a growing range of professional services available
                through QuickServe.
              </p>
            </div>

            <Link
              to="/services"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all services
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  to="/services"
                  className="group rounded-2xl border border-gray-100 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 font-semibold text-gray-900">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY QUICKSERVE */}
      {/* ========================================================= */}

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Why QuickServe?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                A simpler way to get things done.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Finding a reliable professional shouldn't be complicated.
                QuickServe brings customers and verified service providers
                together in one convenient platform.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Verified service providers
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Providers go through our approval process before their
                      services become available.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Providers near you
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      QuickServe can find suitable nearby providers based on
                      availability and location.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Track your booking
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Follow your booking status and, when enabled, track your
                      provider's journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Card */}
            <div className="relative">
              <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-2xl shadow-blue-200">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <Users size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  Built for customers and professionals
                </h3>

                <p className="mt-4 leading-7 text-blue-100">
                  Customers get convenient services at home, while skilled
                  providers get opportunities to grow their work through
                  QuickServe.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-2xl font-bold">Easy</p>
                    <p className="mt-1 text-sm text-blue-100">
                      Booking experience
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-2xl font-bold">Local</p>
                    <p className="mt-1 text-sm text-blue-100">
                      Service providers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS */}
      {/* ========================================================= */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              How QuickServe works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From finding a service to completing the job, everything is
              designed to be simple.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="relative rounded-2xl border border-gray-100 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Choose a service
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Browse categories and select the service you need from approved
                providers.
              </p>
            </div>

            <div className="relative rounded-2xl border border-gray-100 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Book a provider
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Select your preferred schedule and location. QuickServe can
                match you with an available nearby provider.
              </p>
            </div>

            <div className="relative rounded-2xl border border-gray-100 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Relax, it's on the way
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Track your booking, get updates and receive your service at your
                doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* POPULAR SERVICES */}
      {/* ========================================================= */}

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Popular right now
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Services customers love
              </h2>
            </div>

            <Link
              to="/services"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600"
            >
              Explore all
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {popularServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to="/services"
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-44 items-center justify-center bg-blue-50">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-md">
                      <Icon size={36} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900">
                        {service.price}
                      </span>

                      <span className="flex items-center gap-1 text-sm font-semibold text-blue-600">
                        View
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROVIDER CTA */}
      {/* ========================================================= */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gray-900">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-400">
                  For service professionals
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Turn your skills into opportunities.
                </h2>

                <p className="mt-5 leading-7 text-gray-300">
                  List your services on QuickServe, reach customers around you
                  and grow your work.
                </p>

                <Link
                  to="/register"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                >
                  Become a Provider
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="hidden min-h-80 items-center justify-center bg-gray-800 lg:flex">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600 text-white">
                    <Wrench size={42} />
                  </div>

                  <p className="mt-5 text-lg font-semibold text-white">
                    Your skills. Your work. Your opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
            <HomeIcon size={28} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Need a service? We've got you covered.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Create your QuickServe account and find the right professional for
            your next service.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
            >
              Create Free Account
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
