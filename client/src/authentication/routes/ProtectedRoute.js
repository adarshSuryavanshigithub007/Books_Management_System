
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { setUser } from '../../redux/feature/userSlice';
import {  getUserinfo } from '../../utils/service/Apis';

export default function ProtectedRoute({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);
console.log(user)
    const token = localStorage.getItem('token');

    const getUser = async () => {
        try {
            const response = await getUserinfo(token);
            console.log(response);
            if (response.success) {
                dispatch(setUser(response.data));
            } else {
                localStorage.clear();
                navigate('/login');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            localStorage.clear();
            navigate('/login');
        }
    };

    useEffect(() => {
        if (token && !user) {
            getUser();
        } else if (!token) {
            navigate('/login');
        }
    }, [token, user, navigate]);
    if (!user) {
        return null;
    }

    return children;
}