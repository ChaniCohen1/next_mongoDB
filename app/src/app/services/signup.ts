import axios from "axios";
import IUser from "../types/User";


export const signUp = (username: string, email: string, password: string): Promise<IUser | null> => {
    return axios
        .post('/api/signup', {
            username,
            email,
            password,
        })
        .then(response => response.data) // במקרה של הצלחה, החזרת הנתונים מהשרת
        .catch(error => {
            console.error('Signup error:', error);
            return null;
        });
};