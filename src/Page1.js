import { Outlet } from "react-router-dom"

export default function page1() {
    return <div>
        this is page1
        <Outlet></Outlet>
    </div>
}