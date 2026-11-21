import { Navigate, Route, Routes } from 'react-router-dom'
import PageShell from './components/layout/PageShell'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageShell>
  )
}
