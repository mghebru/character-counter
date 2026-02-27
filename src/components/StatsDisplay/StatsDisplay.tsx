import React from "react";
import type { StatsDisplayProps } from "../../types";

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  const minutes = Math.floor(stats.readingTime);
  const seconds = Math.round((stats.readingTime - minutes) * 60);

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="p-4 border rounded-md text-center">
        <h3 className="text-lg font-semibold">Characters</h3>
        <p className="text-2xl">{stats.characterCount}</p>
      </div>

      <div className="p-4 border rounded-md text-center">
        <h3 className="text-lg font-semibold">Words</h3>
        <p className="text-2xl">{stats.wordCount}</p>
      </div>

      {showReadingTime && (
        <div className="col-span-2 p-4 border rounded-md text-center">
          <h3 className="text-lg font-semibold">Reading Time</h3>
          <p className="text-xl">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
        </div>
      )}
    </div>
  );
};

export default StatsDisplay;