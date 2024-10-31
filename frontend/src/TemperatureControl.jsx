import React from 'react';

const TemperatureControl = () => {
  const percentage = 33; // Example: 33% progress
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-40 h-40">
      {/* Temperature display in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl font-bold">21°C</div>
      </div>
      
      {/* SVG Circle */}
      <svg className="w-full h-full -rotate-90 transform">
        {/* Background circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          className="stroke-gray-100"
          fill="none"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          className="stroke-pink-500"
          fill="none"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Update the Card component to use the new TemperatureControl
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

// Temperature Control Card
const TemperatureControlCard = () => (
  <Card>
    <CardContent>
      <h3 className="font-semibold mb-4">Device limit</h3>
      <div className="flex items-center justify-center">
        <TemperatureControl />
      </div>
    </CardContent>
  </Card>
);

export default TemperatureControlCard;