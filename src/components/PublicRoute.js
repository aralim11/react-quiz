import { useAuth } from './../contexts/AuthContext';
import { Navigate } from "react-router-dom";

function PublicRoute({children}){

    const { currentUser } = useAuth();

    return !currentUser ? children : <Navigate to="/"/>
}

export default PublicRoute;