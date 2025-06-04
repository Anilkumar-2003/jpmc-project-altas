import React, { ReactNode } from 'react';

interface Metric {
  title: string;
  value: string | number;
  change: number;
  icon: ReactNode; // 🔧 Accept JSX element
  color: string;
}

interface MetricCardProps {
  metric: Metric;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-card p-4 flex items-center space-x-4">
      <div className={`p-2 rounded-full bg-${metric.color}-100 text-${metric.color}-600`}>
        {metric.icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.title}</p>
        <p className="text-xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
        <p className={`text-sm font-medium ${metric.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {metric.change >= 0 ? '+' : ''}
          {metric.change}%
        </p>
      </div>
    </div>
  );
};

export default MetricCard;
