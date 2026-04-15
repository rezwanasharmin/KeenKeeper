import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTimeline } from '../context/useTimeline';

const Stats = () => {
  const { chartData, total } = useTimeline();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 mb-10 text-center">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-3xl shadow-sm p-10">
          <p className="text-center text-gray-600 mb-10">By Interaction Type</p>

          {total === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6"></div>
              <p className="text-xl text-gray-500">
                No interactions logged yet.<br />
                Go to a friend's detail page and use Quick Check-In.
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={420}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={110}
                    outerRadius={160}
                    dataKey="value"
                    paddingAngle={5}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend 
                    verticalAlign="bottom" 
                    align="center" 
                    iconType="circle"
                    wrapperStyle={{ paddingTop: '30px', fontSize: '16px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;