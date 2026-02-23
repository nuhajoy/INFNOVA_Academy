import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCourse } from "../lib/api";

export function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const data = await fetchCourse(id);
        if (!cancelled) {
          setCourse(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to load course");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [id]);

  const level = course?.level ?? "Intermediate";
  const title = course?.title ?? "Cloud Engineering with AWS";
  const category = course?.category ?? "CLOUD COMPUTING";
  const instructor = course?.instructor ?? "Samuel Getachew";
  const duration = course?.durationWeeks ?? course?.duration ?? 9;
  const students = course?.studentsEnrolled ?? course?.students ?? 2015;
  const rating = course?.rating ?? 4.6;

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={() => navigate(-1)}
        className="mx-auto mt-5 mb-5 block w-full max-w-6xl px-4 text-left text-sm font-medium text-gray-600 hover:text-gray-900 sm:px-6 lg:px-8"
      >
        ← Back to Courses
      </button>

      {loading && (
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-gray-500 sm:px-6 lg:px-8">
          Loading course...
        </div>
      )}

      {error && !loading && (
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-red-700 sm:px-6 lg:px-8">
          {error}
        </div>
      )}

      {!loading && !error && course && (
        <>
        
          <section className="relative w-full bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 text-white">
            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-100">
                    {category}
                  </p>

                  <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {title}
                  </h1>

                  <p className="text-sm leading-relaxed text-orange-50 max-w-3xl lg:text-base">
                    {course?.description ||
                      "Learn how modern companies deploy and scale applications in the cloud. Build resilient infrastructure, automate deployments, and understand cost-efficient architecture."}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm">
                    <div className="inline-flex items-center gap-1.5">
                      <span>👤</span>
                      <span>Instructor: {instructor}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <span>⏱</span>
                      <span>{duration} weeks</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <span>👥</span>
                      <span>{students.toLocaleString()} enrolled</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <span>★</span>
                      <span>{rating} rating</span>
                    </div>
                  </div>

                  {level && (
                    <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-orange-800 shadow-sm sm:text-sm">
                      {level} Level
                    </div>
                  )}
                </div>

                <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-white/30 shadow-xl ">
                  {course?.thumbnail ? (
                    <img
                      src={course.thumbnail}
                      alt={title}
                      className="h-half w-half object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-black/60 text-orange-100 text-base font-medium">
                      Course Preview
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-10">
              <div className="space-y-8">
                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">
                    What You'll Learn
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {(
                      course?.learningOutcomes ?? [
                        "AWS",
                        "Docker",
                        "CI/CD",
                        "Infrastructure",
                        "System Design",
                      ]
                    ).map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-bold">
                          ✓
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">
                    Course Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {course?.description ||
                      "Learn how modern companies deploy and scale applications in the cloud. Build resilient infrastructure, automate deployments, and understand cost-efficient architecture."}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <h2 className="mb-5 text-xl font-bold text-gray-900">
                    Your Instructor
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                      {instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {instructor}
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        Expert in cloud architecture and DevOps with extensive
                        AWS experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Enroll Today
                  </h3>
                  <p className="mb-5 text-gray-600">
                    Join{" "}
                    <span className="font-semibold text-gray-900">
                      {students.toLocaleString()}
                    </span>{" "}
                    students already enrolled
                  </p>

                  <button className="mb-4 w-full rounded-xl bg-orange-600 py-3 text-base font-semibold text-white hover:bg-orange-700 transition">
                    Enroll Now
                  </button>

                  <button className="w-full rounded-xl border border-gray-300 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition">
                    Add to Wishlist
                  </button>

                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      {duration} weeks of content
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      Lifetime access
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      Certificate of completion
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      Access on mobile and desktop
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      Downloadable resources
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
