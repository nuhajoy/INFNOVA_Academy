import { useEffect, useState } from 'react'
import { fetchCourses } from '../lib/api'
import { CourseCard } from '../components/courses/CourseCard'

export function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        const data = await fetchCourses()
        if (!cancelled) {
          setCourses(Array.isArray(data) ? data : data?.courses ?? [])
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load courses')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [])

  const filteredCourses = courses.filter((course) => {
    if (!query.trim()) return true
    const text = query.toLowerCase()
    return (
      course.title?.toLowerCase().includes(text) ||
      course.instructor?.toLowerCase().includes(text) ||
      course.category?.toLowerCase().includes(text)
    )
  })

  return (
    <>
      <section className="courses-hero-wrapper">
        <div className="courses-hero">
          <div className="hero-main">
            <p className="hero-label">INFNOVA ACADEMY</p>
            <h1 className="hero-title">Explore Our Courses</h1>
            <p className="hero-text">
              Master new skills with expert-led courses designed for the modern
              learner. Start your learning journey today with INFNOVA Academy.
            </p>
          </div>
         
        </div>
      </section>

      <section className="search-section">
        <div className="search-card">
          <div className="search-input-wrapper">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, instructors..."
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          <div className="search-filter-row">
            <div className="search-filter-box" />
            <div className="search-filter-box" />
          
          </div>
        </div>
      </section>

      <div className="courses-page">
        <section className="courses-filter-row">
          <p className="courses-count-text">
            Showing{' '}
            <span className="courses-count-strong">
              {filteredCourses.length}
            </span>{' '}
            of <span className="courses-count-strong">{courses.length}</span>{' '}
            courses
          </p>

          {loading && !error && (
            <div className="info-card">Loading courses...</div>
          )}

          {error && !loading && <div className="error-card">{error}</div>}

          {!loading && !error && (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  )
}

