import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Profile from "./pages/Profile.tsx"
import Account from "./pages/Account.tsx"
import Auth from "./pages/Auth.tsx"
import Onboarding from "./pages/Onboarding.tsx"
import Navbar from "./components/layout/Navbar.tsx"

function App() {

  return  (
  <BrowserRouter>
  <div className="min-h-screen flex flex-col">
    <main className="flex-1">
      <Navbar/>
    <Routes>
      <Route index element={<Home />} />  
      <Route path="/profile" element={<Profile />} />
      <Route path="/account/:pathname" element={<Account />} />
      <Route path="/auth/:pathname" element={<Auth />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
    </main>
    </div>
  </BrowserRouter>)
}

export default App
