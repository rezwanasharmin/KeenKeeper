import React, { useState, useEffect } from 'react';
import { TimelineContext } from './TimelineContextData';

const getSavedTimeline = () => {
  try {
    return JSON.parse(localStorage.getItem('timeline') || '[]');
  } catch {
    return [];
  }
};

const buildCountsFromTimeline = (savedTimeline) => {
  return savedTimeline.reduce(
    (acc, item) => {
      if (item.type === 'call') acc.Call += 1;
      if (item.type === 'text') acc.Text += 1;
      if (item.type === 'video') acc.Video += 1;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 }
  );
};

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(getSavedTimeline);
  const [interactions, setInteractions] = useState(() => buildCountsFromTimeline(getSavedTimeline()));

  useEffect(() => {
    localStorage.setItem('timeline', JSON.stringify(timeline));
  }, [timeline]);

  const addInteraction = (type, friendName) => {
    setInteractions(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));

    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const newEntry = {
      id: `${type.toLowerCase()}-${friendName}-${now.getTime()}`,
      type: type.toLowerCase(),
      title: `${type} with ${friendName}`,
      date: formattedDate,
    };

    setTimeline(prev => [newEntry, ...prev]);
  };

  const total = interactions.Call + interactions.Text + interactions.Video;

  const chartData = [
    { name: 'Call', value: interactions.Call, color: '#10b981' },
    { name: 'Text', value: interactions.Text, color: '#8b5cf6' },
    { name: 'Video', value: interactions.Video, color: '#15803d' },
  ].filter(item => item.value > 0); // Hide zero values

  return (
    <TimelineContext.Provider value={{ interactions, addInteraction, chartData, total, timeline }}>
      {children}
    </TimelineContext.Provider>
  );
};