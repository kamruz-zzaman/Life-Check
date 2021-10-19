import { useContext } from "react"
import { AuthContext } from "../Component/context/Authprovider";

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;