import './ExcessChart.css';

const skills = [
  { label: "Knowledge", value: 8 },
  { label: "Charm", value: 7 },
  { label: "Creativity", value: 10 },
  { label: "Endurance", value: 5 },
  { label: "Proficiency", value: 9 }
];

const RadarChart = () => {
  const size = 200;
  const center = size / 2;
  const levels = 10; // max skill level
  const radius = size / 2 - 20;

  const angleStep = (Math.PI * 2) / skills.length;

  const getPoint = (level, index) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = (radius / levels) * level;
    return [
      center + r * Math.cos(angle),
      center + r * Math.sin(angle)
    ];
  };

  const skillPoints = skills.map((s, i) => getPoint(s.value, i));
  const outlinePoints = skills.map((_, i) => getPoint(levels, i));

  return (
    <div className="radar-wrapper">
        <svg width={size} height={size} className="radar-chart">
        {/* Polygon background */}
        <polygon
            points={outlinePoints.map(p => p.join(",")).join(" ")}
            fill= "black"
            stroke="red"
            strokeWidth="3"
        />

        {/* Filled skill polygon */}
        <polygon
            points={skillPoints.map(p => p.join(",")).join(" ")}
            fill="red"
            fillOpacity="0.85"
            stroke="yellow"
            strokeWidth="2"
        />

        {/* Labels */}
        {skills.map((s, i) => {
            const [x, y] = getPoint(levels + 0.5, i);
            return (
            <text
                key={s.label}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily='Segoe UI, sans-serif'
                fill="white"
                fontSize="16"
                fontWeight="bold"
                style={{ userSelect: 'none' }}
            >
                {s.label}
            </text>
            );
        })}
        </svg>
    </div>
  );
};

export default RadarChart;
