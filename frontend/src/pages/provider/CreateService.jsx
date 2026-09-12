import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, X, ArrowLeft, Send } from "lucide-react";

import { getCategories } from "../../services/categoryService";
import { createProviderService } from "../../services/providerService";

const CreateService = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const [certificates, setCertificates] = useState([]);

  const [formData, setFormData] = useState({
    category: "",
    serviceName: "",
    description: "",
    price: "",
    priceType: "fixed",
    experience: "",
    serviceArea: "",
  });

  // Load categories
  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoadingCategories(true);

        const data = await getCategories();

        setCategories(data);
      } catch (error) {
        console.error(error);

        setError("Unable to load service categories.");
      } finally {
        setLoadingCategories(false);
      }
    };

    loadCategories();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleCertificateChange = (event) => {
    const files = Array.from(event.target.files);

    setCertificates((previous) => [...previous, ...files]);
  };

  const removeCertificate = (index) => {
    setCertificates((previous) =>
      previous.filter((_, certificateIndex) => {
        return certificateIndex !== index;
      }),
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.category) {
      setError("Please select a service category.");
      return;
    }

    if (!formData.serviceName.trim()) {
      setError("Please enter your service name.");
      return;
    }

    if (!formData.description.trim()) {
      setError("Please enter your service description.");
      return;
    }

    if (formData.price === "" || Number(formData.price) < 0) {
      setError("Please enter a valid price.");
      return;
    }

    if (!formData.serviceArea.trim()) {
      setError("Please enter your service area.");
      return;
    }

    try {
      setSubmitting(true);

      /*
       * Certificate file upload will be connected
       * to the file-storage backend in the next step.
       *
       * For now we send certificate metadata only.
       */

      const certificateData = certificates.map((file) => ({
        name: file.name,
        url: "",
      }));

      await createProviderService({
        category: formData.category,
        serviceName: formData.serviceName.trim(),
        description: formData.description.trim(),
        price: Number(formData.price),
        priceType: formData.priceType,
        experience: Number(formData.experience || 0),
        serviceArea: formData.serviceArea.trim(),
        certificates: certificateData,
        images: [],
      });

      setSuccess("Service submitted successfully for admin approval.");

      setTimeout(() => {
        navigate("/provider/services");
      }, 1200);
    } catch (error) {
      console.error(error);

      setError(error.message || "Unable to submit your service.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate("/provider/dashboard")}
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>

          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Provider Portal
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            List a New Service
          </h1>

          <p className="mt-2 text-gray-500">
            Tell customers what service you provide. Your service will be
            reviewed by QuickServe before it becomes publicly available.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Error */}
          {error && (
            <div className="mb-6 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mb-6 rounded-xl border border-green-100 bg-green-50 p-4 text-sm font-medium text-green-600">
              {success}
            </div>
          )}

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Service Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              disabled={loadingCategories}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
            >
              <option value="">
                {loadingCategories
                  ? "Loading categories..."
                  : "Select a category"}
              </option>

              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Service Name */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Service Name
            </label>

            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              placeholder="e.g. Professional Home Deep Cleaning"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Service Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Explain what you provide, what is included, and what customers can expect..."
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Price */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Price
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-gray-500">
                  ₹
                </span>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  placeholder="1499"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Price Type
              </label>

              <select
                name="priceType"
                value={formData.priceType}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="fixed">Fixed Price</option>

                <option value="starting_from">Starting From</option>

                <option value="hourly">Per Hour</option>
              </select>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Experience
            </label>

            <div className="relative">
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                min="0"
                placeholder="3"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                years
              </span>
            </div>
          </div>

          {/* Service Area */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Service Area
            </label>

            <input
              type="text"
              name="serviceArea"
              value={formData.serviceArea}
              onChange={handleChange}
              placeholder="e.g. Pune, Pimpri-Chinchwad"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-gray-400">
              Mention the areas where you currently provide this service.
            </p>
          </div>

          {/* Certificates */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Certificates
              <span className="ml-2 font-normal text-gray-400">Optional</span>
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50/30">
              <Upload size={28} className="text-gray-400" />

              <span className="mt-3 text-sm font-semibold text-gray-700">
                Upload certificates
              </span>

              <span className="mt-1 text-xs text-gray-400">
                PDF, JPG or PNG
              </span>

              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleCertificateChange}
                className="hidden"
              />
            </label>

            {/* Selected files */}
            {certificates.length > 0 && (
              <div className="mt-4 space-y-2">
                {certificates.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <span className="truncate text-sm text-gray-700">
                      {file.name}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeCertificate(index)}
                      className="ml-4 rounded-lg p-1 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notice */}
          <div className="mt-8 rounded-xl bg-blue-50 p-4">
            <p className="text-sm leading-6 text-blue-700">
              <strong>Important:</strong> After submission, your service will
              remain pending until a QuickServe administrator reviews and
              approves it.
            </p>
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />

              {submitting ? "Submitting..." : "Submit for Approval"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateService;
