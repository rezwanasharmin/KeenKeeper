import React from 'react';
import { useNavigate } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const statusColor = {
    overdue: 'bg-red-500',
    'almost due': 'bg-amber-500',
    'on-track': 'bg-emerald-600'
  };

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white rounded-3xl p-6 cursor-pointer hover:shadow-lg transition-all border border-gray-100"
    >
      <div className="flex justify-center mb-5">
        <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow" />
      </div>

      <h3 className="text-xl font-semibold text-center mb-1">{friend.name}</h3>
      <p className="text-gray-500 text-center text-sm mb-4">{friend.days_since_contact}d ago</p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {friend.tags.map((tag, i) => (
          <span key={i} className="px-4 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-center">
        <span className={`px-6 py-2 text-white text-sm font-medium rounded-full ${statusColor[friend.status]}`}>
          {friend.status.replace('-', ' ').toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;