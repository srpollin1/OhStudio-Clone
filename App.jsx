import HomePage from "./pages/Home"
import ContactPage from "./pages/Contact"
import ProfilePage from "./pages/Profile"
import './index.css'
import { Router } from "./Router"
import Page404 from "./pages/404"

const appRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/Profile',
    component: ProfilePage
  },
  {
    path: '/Contact',
    component: ContactPage
  }
]


function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
