import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, Video, Bell, Archive, Trash2 } from 'lucide-react';
import friendsData from '../data/friends.json';
import { useTimeline } from '../context/useTimeline';
import Toast from '../components/Toast';

const FriendDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addInteraction } = useTimeline();

  const friend = useMemo(() => {
    const friendId = parseInt(id, 10);
    return friendsData.find((f) => f.id === friendId) || null;
  }, [id]);

  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!friend) {
      navigate('/404');
    }
  }, [friend, navigate]);


  const handleQuickCheckIn = (type) => {
    if (!friend) return;


    addInteraction(type, friend.name);


    setToast(`${type} logged successfully with ${friend.name}`);


    setTimeout(() => {
      setToast(null);
    }, 3000);
  };


  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-700 rounded-full animate-spin mx-auto"></div>
          <p className="mt-6 text-gray-600">Loading friend details...</p>
        </div>
      </div>
    );
  }


  const getStatusColor = (status) => {
    if (status === 'overdue') return 'bg-red-500';
    if (status === 'almost due') return 'bg-amber-500';
    return 'bg-emerald-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


          <div className="lg:col-span-4 space-y-6">


            <div className="bg-white rounded-3xl p-5 shadow-sm text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-40 h-40 rounded-full mx-auto mb-6 border-8 border-white shadow-md object-cover"
              />
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">{friend.name}</h2>

              <div className="flex justify-center gap-3 mb-6">
                <span className={`${getStatusColor(friend.status)} text-white text-sm font-medium px-6 py-1.5 rounded-full`}>
                  {friend.status.toUpperCase().replace('-', ' ')}
                </span>
              </div>

              <p className="text-gray-600 italic mb-6 px-4">"{friend.bio}"</p>
              <p className="text-gray-500 text-sm">{friend.email}</p>
            </div>


            <div className="lg:col-span-4 space-y-5">

              <div className="space-y-3">
                {/* Snooze 2 Weeks */}
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow transition-all cursor-pointer">
                  <button className="w-full flex items-center gap-4 text-left">
                    <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                      <Bell size={24} className="text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-800 text-lg">Snooze 2 Weeks</span>
                  </button>
                </div>

                {/* Archive */}
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow transition-all cursor-pointer">
                  <button className="w-full flex items-center gap-4 text-left">
                    <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                      <Archive size={24} className="text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-800 text-lg">Archive</span>
                  </button>
                </div>

                {/* Delete */}
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow transition-all cursor-pointer">
                  <button className="w-full flex items-center gap-4 text-left text-red-600">
                    <div className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <Trash2 size={24} className="text-red-500" />
                    </div>
                    <span className="font-medium text-lg">Delete</span>
                  </button>
                </div>
              </div>

            </div>



          </div>


          <div className="lg:col-span-8 space-y-8">


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-4xl font-semibold text-gray-900">{friend.days_since_contact}</div>
                <p className="text-gray-500 mt-3">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-4xl font-semibold text-gray-900">{friend.goal}</div>
                <p className="text-gray-500 mt-3">Goal (Days)</p>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-3xl font-semibold text-gray-900">{friend.next_due_date}</div>
                <p className="text-gray-500 mt-3">Next Due</p>
              </div>
            </div>


            <div className="bg-white rounded-3xl p-8 shadow-sm flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-1">Relationship Goal</h3>
                <p className="text-gray-600">
                  Connect every <span className="font-semibold">{friend.goal} days</span>
                </p>
              </div>
              <button className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-2xl text-sm font-medium transition-colors">
                Edit
              </button>
            </div>


            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-8">Quick Check-In</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <button
                  onClick={() => handleQuickCheckIn('Call')}
                  className="flex flex-col items-center gap-4 py-10 cursor-pointer bg-gray-50 hover:bg-emerald-50 rounded-xl transition-all active:scale-95"
                >
                  <Phone size={42} className="text-[#244D3F]" />
                  <span className="font-semibold text-lg">Call</span>
                </button>

                <button
                  onClick={() => handleQuickCheckIn('Text')}
                  className="flex flex-col items-center gap-4 py-10 cursor-pointer bg-gray-50 hover:bg-emerald-50 rounded-xl transition-all active:scale-95"
                >
                  <MessageSquare size={42} className="text-[#244D3F]" />
                  <span className="font-semibold text-lg">Text</span>
                </button>

                <button
                  onClick={() => handleQuickCheckIn('Video')}
                  className="flex flex-col items-center gap-4 py-10 cursor-pointer bg-gray-50 hover:bg-emerald-50 rounded-xl transition-all active:scale-95"
                >
                  <Video size={42} className="text-[#244D3F]" />
                  <span className="font-semibold text-lg">Video</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>


      {toast && <Toast message={toast} />}
    </div>
  );
};

export default FriendDetail;