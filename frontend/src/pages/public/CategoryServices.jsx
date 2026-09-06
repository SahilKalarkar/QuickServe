import { useParams } from "react-router-dom";

const CategoryServices = () => {
  const { slug } = useParams();

  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Service Category
        </p>

        <h1 className="mt-3 text-4xl font-bold capitalize text-gray-900">
          {slug.replaceAll("-", " ")}
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          Approved QuickServe providers offering services in this category will
          appear here.
        </p>
      </div>
    </section>
  );
};

export default CategoryServices;
