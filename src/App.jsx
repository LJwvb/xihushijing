import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ScenicSpotsPage from './pages/ScenicSpots/ScenicSpotsPage'
import ScenicSpotDetail from './pages/ScenicSpots/ScenicSpotDetail'
import NewsPage from './pages/News/NewsPage'
import ContactPage from './pages/Contact/ContactPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/scenic-spots" element={<ScenicSpotsPage />} />
        <Route path="/scenic-spots/:slug" element={<ScenicSpotDetail />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}
