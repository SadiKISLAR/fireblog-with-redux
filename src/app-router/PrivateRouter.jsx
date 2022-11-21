import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRouter = () => {
    const { currentUser } = useAuth();
    return <div>{currentUser ? <Outlet /> : <Navigate to="/login" />} </div>;
};

export default PrivateRouter;