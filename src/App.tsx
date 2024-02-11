import { Routes, Route } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import Home from './_home/Home'
import History from './_root/pages/History'
import Search from './_root/pages/Search'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return (
    <main>
      {/* TOAST */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />

      {/* ROTAS */}
      <Routes>
        <Route index element={<Home />} />
        <Route element={<RootLayout />}>
          <Route path="search" element={<Search />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App