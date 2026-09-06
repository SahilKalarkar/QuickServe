import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Car,
  Grid3X3,
  Paintbrush,
  Scissors,
  Settings,
  Sparkles,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";

import { getCategories } from "../../services/categoryService";

const iconMap = {
  sparkles: Sparkles,
  wrench: Wrench,
  zap: Zap,
  snowflake: Snowflake,
  settings: Settings,
  scissors: Scissors,
  paintbrush: Paintbrush,
  car: Car,
  grid: Grid3X3,
};

const Services = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Category loading error:", error);

        setError("Unable to load services. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <section className="min-h-screen bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            QuickServe Marketplace
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Find the right service for you
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Browse our service categories and find trusted professionals for
            your everyday needs.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-52 animate-pulse rounded-2xl bg-white"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Categories */}
        {!loading && !error && (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Grid3X3;

              return (
                <Link
                  key={category._id}
                  to={`/services/${category.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <h2 className="mt-7 text-xl font-bold text-gray-900">
                    {category.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>

                  <div className="mt-6 text-sm font-semibold text-blue-600">
                    Explore services
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
