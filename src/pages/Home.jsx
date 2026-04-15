import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import friendsData from '../data/friends.json';
import FriendCard from '../components/FriendCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 800); // Simulated loading
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;
  const needAttention = friends.filter(f => f.status === 'overdue').length;
  const interactionsThisMonth = 42; // Static for demo

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Banner */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-xl text-gray-600  mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
        </p>
        <button className="bg-[#244D3F] text-white px-8 py-3.5 rounded-2xl flex items-center gap-3 mx-auto hover:bg-emerald-800 transition">
          <Plus size={22} /> Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
          <div className="text-5xl font-semibold text-[#244D3F]">{totalFriends}</div>
          <p className="text-gray-600 mt-2">Total Friends</p>
        </div>
        <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
          <div className="text-5xl font-semibold text-[#244D3F]">{onTrack}</div>
          <p className="text-gray-600 mt-2">On Track</p>
        </div>
        <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
          <div className="text-5xl font-semibold text-[#244D3F]">{needAttention}</div>
          <p className="text-gray-600 mt-2">Need Attention</p>
        </div>
        <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
          <div className="text-5xl font-semibold text-[#244D3F]">{interactionsThisMonth}</div>
          <p className="text-gray-600 mt-2">Interactions This Month</p>
        </div>
      </div>

      {/* Your Friends Section */}
      <h2 className="text-3xl font-semibold mb-8">Your Friends</h2>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;