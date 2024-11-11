import axios from "axios";
import IUser from "../types/User";

export const fetchUsers = async () : Promise<IUser[]> =>
    axios
    .get('https://dummyjson.com/users')
    .then(response => response.data.users)
    .catch(error => {
        console.error(error);
        return null;
    });
    
