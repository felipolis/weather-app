import { Routes, Route } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'

const App = () => {
  return (
    <main>
      <Routes>
        {/* public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App