import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const emojiToNumeric = {
  '😊': 6,
  '😔': 5,
  '😡': 4,
  '😢': 3,
  '😂': 2,
  '😐': 1,
};

const numericToEmoji = {
  6: '😊',
  5: '😔',
  4: '😡',
  3: '😢',
  2: '😂',
  1: '😐',
};

const MoodChart = ({ moods }) => {
  const data = {
    labels: Object.keys(moods),
    datasets: [
      {
        label: 'Mood over Time',
        data: Object.values(moods).map((mood) => emojiToNumeric[mood]),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#4CAF50',
        pointBackgroundColor: 'rgba(255,255,255,1)',
        pointRadius: 6,
      },
    ],
  };

  return (
    <div className="mood-chart-container">
      <h2 className="mood-chart-title">Mood Chart</h2>
      <div className="chart-wrapper">
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                  callback: function (value) {
                    return numericToEmoji[value] || '';
                  },
                },
                min: 1,
                max: 6,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default MoodChart;
