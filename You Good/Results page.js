import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const SleepTracker = () => {
  const [activeView, setActiveView] = useState('overview');

  const weeklyData = [
    {
      week: 'Nov 10-17',
      days: [
        { day: 1, tiredness: 1, narcolepsy: 2 },
        { day: 2, tiredness: 2, narcolepsy: 1 },
        { day: 3, tiredness: 0, narcolepsy: 1 },
        { day: 4, tiredness: 2, narcolepsy: 3 },
        { day: 5, tiredness: 3, narcolepsy: 2 }
      ],
      totalTiredness: 8,
      totalNarcolepsy: 9,
      avgTiredness: 1.6,
      avgNarcolepsy: 1.8
    },
    {
      week: 'Nov 17-24',
      days: [
        { day: 1, tiredness: 3, narcolepsy: 1 },
        { day: 2, tiredness: 1, narcolepsy: 1 },
        { day: 3, tiredness: 0, narcolepsy: 3 },
        { day: 4, tiredness: 1, narcolepsy: 1 },
        { day: 5, tiredness: 3, narcolepsy: 3 }
      ],
      totalTiredness: 8,
      totalNarcolepsy: 9,
      avgTiredness: 1.6,
      avgNarcolepsy: 1.8
    },
    {
      week: 'Nov 24-Dec 1',
      days: [
        { day: 1, tiredness: 1, narcolepsy: 2 },
        { day: 2, tiredness: 3, narcolepsy: 3 },
        { day: 3, tiredness: 2, narcolepsy: 1 },
        { day: 4, tiredness: 0, narcolepsy: 3 },
        { day: 5, tiredness: 3, narcolepsy: 2 }
      ],
      totalTiredness: 9,
      totalNarcolepsy: 11,
      avgTiredness: 1.8,
      avgNarcolepsy: 2.2
    },
    {
      week: 'Dec 1-8',
      days: [
        { day: 1, tiredness: 1, narcolepsy: 1 },
        { day: 2, tiredness: 3, narcolepsy: 3 },
        { day: 3, tiredness: 2, narcolepsy: 1 },
        { day: 4, tiredness: 1, narcolepsy: 0 },
        { day: 5, tiredness: 1, narcolepsy: 3 }
      ],
      totalTiredness: 8,
      totalNarcolepsy: 8,
      avgTiredness: 1.6,
      avgNarcolepsy: 1.6
    },
    {
      week: 'Dec 8-15',
      days: [
        { day: 1, tiredness: 3, narcolepsy: 3 },
        { day: 2, tiredness: 1, narcolepsy: 2 },
        { day: 3, tiredness: 0, narcolepsy: 0 },
        { day: 4, tiredness: 3, narcolepsy: 3 },
        { day: 5, tiredness: 2, narcolepsy: 2 }
      ],
      totalTiredness: 9,
      totalNarcolepsy: 10,
      avgTiredness: 1.8,
      avgNarcolepsy: 2.0
    }
  ];

  const weeklyAverages = weeklyData.map(week => ({
    week: week.week,
    tiredness: week.avgTiredness,
    narcolepsy: week.avgNarcolepsy
  }));

  const dayComparison = [
    { day: 'Day 1', w1: 1, w2: 3, w3: 1, w4: 1, w5: 3 },
    { day: 'Day 2', w1: 2, w2: 1, w3: 3, w4: 3, w5: 1 },
    { day: 'Day 3', w1: 0, w2: 0, w3: 2, w4: 2, w5: 0 },
    { day: 'Day 4', w1: 2, w2: 1, w3: 0, w4: 1, w5: 3 },
    { day: 'Day 5', w1: 3, w2: 3, w3: 3, w4: 1, w5: 2 }
  ];

  const radarData = weeklyData.map((week, idx) => ({
    week: `W${idx + 1}`,
    tiredness: week.avgTiredness,
    narcolepsy: week.avgNarcolepsy
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-purple-600 mb-2">Sleep & Narcolepsy Tracker</h1>
          <p className="text-gray-600">Tracking your sleep patterns from Nov 10 - Dec 15, 2025</p>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['overview', 'trends', 'days', 'comparison'].map(view => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                activeView === view
                  ? 'bg-purple-400 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-purple-100'
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeView === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl p-6 shadow-lg">
                <h3 className="text-white font-semibold mb-2">Avg Tiredness</h3>
                <p className="text-4xl font-bold text-white">1.68</p>
                <p className="text-pink-50 text-sm">Out of 3.0</p>
              </div>
              <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl p-6 shadow-lg">
                <h3 className="text-white font-semibold mb-2">Avg Narcolepsy</h3>
                <p className="text-4xl font-bold text-white">1.88</p>
                <p className="text-purple-50 text-sm">Out of 3.0</p>
              </div>
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 shadow-lg">
                <h3 className="text-white font-semibold mb-2">Best Week</h3>
                <p className="text-2xl font-bold text-white">Dec 1-8</p>
                <p className="text-blue-50 text-sm">Lowest combined score</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Averages Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyAverages}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="week" stroke="#666" />
                  <YAxis domain={[0, 3]} stroke="#666" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0' }} />
                  <Legend />
                  <Line type="monotone" dataKey="tiredness" stroke="#ec4899" strokeWidth={3} name="Tiredness" />
                  <Line type="monotone" dataKey="narcolepsy" stroke="#8b5cf6" strokeWidth={3} name="Narcolepsy" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Key Insights</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700"><strong>Increasing trend:</strong> Week of Nov 24-Dec 1 showed highest symptoms (Avg 1.8 tiredness, 2.2 narcolepsy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <span className="text-gray-700"><strong>Best week:</strong> Dec 1-8 had lowest combined impact (1.6 for both metrics)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <span className="text-gray-700"><strong>Pattern:</strong> Day 5 consistently shows higher tiredness across most weeks</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Trends */}
        {activeView === 'trends' && (
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Total Scores</h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="week" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0' }} />
                  <Legend />
                  <Bar dataKey="totalTiredness" fill="#f9a8d4" name="Total Tiredness" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="totalNarcolepsy" fill="#c4b5fd" name="Total Narcolepsy" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Week-by-Week Pattern</h2>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e0e0e0" />
                  <PolarAngleAxis dataKey="week" stroke="#666" />
                  <PolarRadiusAxis domain={[0, 3]} stroke="#666" />
                  <Radar name="Tiredness" dataKey="tiredness" stroke="#ec4899" fill="#f9a8d4" fillOpacity={0.6} />
                  <Radar name="Narcolepsy" dataKey="narcolepsy" stroke="#8b5cf6" fill="#c4b5fd" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Days Comparison */}
        {activeView === 'days' && (
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tiredness by Day Across All Weeks</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dayComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis domain={[0, 3]} stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0' }} />
                <Legend />
                <Bar dataKey="w1" fill="#fbbf24" name="Nov 10-17" radius={[4, 4, 0, 0]} />
                <Bar dataKey="w2" fill="#f472b6" name="Nov 17-24" radius={[4, 4, 0, 0]} />
                <Bar dataKey="w3" fill="#a78bfa" name="Nov 24-Dec 1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="w4" fill="#60a5fa" name="Dec 1-8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="w5" fill="#34d399" name="Dec 8-15" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-gray-700"><strong>💡 Insight:</strong> Day 5 tends to have higher tiredness levels (3 out of 3) in 3 out of 5 weeks, suggesting end-of-tracking-period fatigue.</p>
            </div>
          </div>
        )}

        {/* Detailed Comparison */}
        {activeView === 'comparison' && (
          <div className="space-y-6">
            {weeklyData.map((week, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{week.week}</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={week.days}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="day" stroke="#666" label={{ value: 'Day', position: 'insideBottom', offset: -5 }} />
                    <YAxis domain={[0, 3]} stroke="#666" />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0' }} />
                    <Legend />
                    <Line type="monotone" dataKey="tiredness" stroke="#ec4899" strokeWidth={2} name="Tiredness" />
                    <Line type="monotone" dataKey="narcolepsy" stroke="#8b5cf6" strokeWidth={2} name="Narcolepsy" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-pink-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Avg Tiredness</p>
                    <p className="text-2xl font-bold text-pink-600">{week.avgTiredness}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Avg Narcolepsy</p>
                    <p className="text-2xl font-bold text-purple-600">{week.avgNarcolepsy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SleepTracker;