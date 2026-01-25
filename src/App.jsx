import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import CalculatorPage from './pages/CalculatorPage'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calculator/:id" element={<CalculatorPage />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
