import { Routes, Route } from 'react-router-dom'
import './App.css'
import { CoursesPage } from './pages/CoursesPage'
import { CourseDetailPage } from './pages/CourseDetailPage'
import { SiteHeader } from './components/layout/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter'

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />

      <main>
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
