import { Link } from "react-router-dom";

function formatWeeks(weeks) {
  if (!weeks) return "";
  return `${weeks} week${weeks === 1 ? "" : "s"}`;
}

export function CourseCard({ course }) {
  const {
    id,
    title,
    category,
    level,
    instructor,
    durationWeeks,
    duration,
    studentsEnrolled,
    students,
    rating,
    thumbnail, 
  } = course;

  const weeksLabel = formatWeeks(durationWeeks || duration);
  const studentsLabel = (studentsEnrolled || students || 0).toLocaleString();

  return (
    <Link
      to={`/courses/${id}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
      {/* Image container with overlay badge */}
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden bg-gray-200">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gray-300 text-sm font-medium">
              {category || "TECH COURSE"}
            </div>
          )}
        </div>

   
        {level && (
          <span className="absolute right-3 top-3 rounded-full  px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md backdrop-blur-sm">
            {level}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
          {category || "Category"}
        </div>

      
        <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-tight text-gray-900 group-hover:text-orange-700">
          {title}
        </h3>

      
        <p className="mb-4 text-sm text-gray-600">
          Instructor:{" "}
          <span className="font-medium text-gray-800">
            {instructor || "TBA"}
          </span>
        </p>

       
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <span className="text-base">⏱</span>
            <span>{weeksLabel || "—"}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-base">👥</span>
            <span>{studentsLabel}</span>
          </div>

          <div className="flex items-center gap-1.5 font-semibold text-yellow-600">
            <span className="text-lg leading-none">★</span>
            <span>{rating || "—"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
