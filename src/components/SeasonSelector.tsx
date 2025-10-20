import { Leaf, Snowflake, Flower2, Sun } from 'lucide-react';

type Season = 'autumn' | 'winter' | 'spring' | 'summer';

interface SeasonSelectorProps {
  currentSeason: Season;
  onSeasonChange: (season: Season) => void;
}

const seasons = [
  { name: 'autumn' as Season, icon: Leaf, label: 'Autumn', color: 'hsl(var(--autumn-primary))' },
  { name: 'winter' as Season, icon: Snowflake, label: 'Winter', color: 'hsl(var(--winter-primary))' },
  { name: 'spring' as Season, icon: Flower2, label: 'Spring', color: 'hsl(var(--spring-primary))' },
  { name: 'summer' as Season, icon: Sun, label: 'Summer', color: 'hsl(var(--summer-primary))' },
];

export const SeasonSelector = ({ currentSeason, onSeasonChange }: SeasonSelectorProps) => {
  return (
    <div className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-border/50">
      <div className="flex gap-2">
        {seasons.map((season) => {
          const Icon = season.icon;
          return (
            <button
              key={season.name}
              onClick={() => onSeasonChange(season.name)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                currentSeason === season.name
                  ? 'scale-110 shadow-lg'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
              style={{
                backgroundColor: currentSeason === season.name ? season.color : 'transparent',
              }}
              title={season.label}
            >
              <Icon 
                className={`w-6 h-6 ${currentSeason === season.name ? 'text-white' : ''}`}
                style={{ color: currentSeason === season.name ? 'white' : season.color }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
