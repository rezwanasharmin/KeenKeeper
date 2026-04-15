import React, { useState } from 'react';
import { Phone, MessageSquare, Video } from 'lucide-react';
import { useTimeline } from '../context/useTimeline';

const Timeline = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? timeline
    : timeline.filter((item) => item.type === filter.toLowerCase());

  const getIcon = (type) => {
    if (type === 'call') return <Phone size={24} />;
    if (type === 'text') return <MessageSquare size={24} />;
    return <Video size={24} />;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-semibold">Timeline</h1>
        
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white border border-gray-200 rounded-2xl px-5 py-3"
        >
          <option value="all">All Interactions</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20">No interactions yet. Start by checking in with a friend!</p>
        ) : (
          filtered.map(item => (
            <div key={item.id} className="bg-white rounded-3xl p-6 flex gap-6 items-center border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                {getIcon(item.type)}
              </div>
              <div className="flex-1">
                <p className="font-medium text-lg">{item.title}</p>
                <p className="text-gray-500">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;