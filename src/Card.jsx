const Card = ({ id, name, avatar, userID, followers, following }) => {
    return (
        <div id={id} className="border rounded-lg shadow-lg p-4 max-w-sm mx-auto bg-white">
            <div className="flex items-center mb-4">
                <img 
                    src={avatar} 
                    alt={`${name}'s avatar`} 
                    className="w-16 h-16 rounded-full mr-4" 
                />
                <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">@{userID}</p>
                </div>
            </div>
            <div className="flex justify-between text-gray-700">
                <div>
                    <p className="font-bold">{followers}</p>
                    <p>Followers</p>
                </div>
                <div>
                    <p className="font-bold">{following}</p>
                    <p>Following</p>
                </div>
            </div>
        </div>
    );
};

export default Card;

