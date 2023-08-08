import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <><nav>
            <ul>
                <li>
                    <Link to="/">Homes</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Layout