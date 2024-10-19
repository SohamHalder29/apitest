import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
    const [userID, setUserID] = useState("");
    const [data, setData] = useState({
        id: '',
        userId: '',
        name: '',
        avatar: '',
        followers: 0,
        following: 0
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchData = async () => {
        if (!userID) return;
        setLoading(true);
        setError("");

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/${userID}`);
            if (response.status === 200) {
                const { _id, login_id, name, avatar, followers, following } = response.data;
                setData({
                    id: _id,
                    userId: login_id,
                    name,
                    avatar,
                    followers,
                    following,
                });
            } else {
                setError("Failed to fetch data. Please check the user ID.");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError("Failed to fetch data. Please check the user ID.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userID) {
            fetchData();
        }
    }, []);

    const handleClick = () => {
        fetchData();
    };

    const { id, userId, name, avatar, followers, following } = data;

    return (
        <div className={"flex flex-col justify-center items-center gap-8 w-full h-full"}>
            <div className={"flex flex-col justify-center items-center"}>
                <input
                    type={"text"}
                    placeholder={"Please enter your id"}
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                    className="border rounded px-2 py-1"
                />
                <button onClick={handleClick} className={"px-4 py-2 rounded-2xl bg-slate-500"}>Submit</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {id && (
                <Card
                    id={id}
                    userId={userId}
                    name={name}
                    avatar={avatar}
                    followers={followers}
                    following={following}
                />
            )}
        </div>
    );
}

export default App;
