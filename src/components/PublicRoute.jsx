const { Outlet } = require("react-router-dom")

const PublicRoute = ()=>{
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default PublicRoute