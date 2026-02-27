import React, { useState, useMemo } from "react";
import {TextInput} from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import type { CharacterCounterProps, TextStats } from "../../types";

const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime,
}) => {
  const [text, setText] = useState<string>("");

  const stats: TextStats = useMemo(() => {
    const characterCount = text.length;

    const wordsArray = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = wordsArray.length;

    // Average reading speed: 200 words per minute
    const readingTime = wordCount / 200;

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  }, [text]);

  const isBelowMin = stats.wordCount < minWords;
  const isAboveMax = stats.wordCount > maxWords;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <TextInput onTextChange={setText} />

      <StatsDisplay stats={stats} showReadingTime />

      {/* Word Goals */}
      <div className="mt-4">
        <p className="text-sm">
          Min: {minWords} | Max: {maxWords}
        </p>

        {isBelowMin && (
          <p className="text-red-500 text-sm mt-1">
            You need {minWords - stats.wordCount} more words.
          </p>
        )}

        {isAboveMax && (
          <p className="text-yellow-600 text-sm mt-1">
            You exceeded the maximum word count.
          </p>
        )}
      </div>

      {/* Optional Target Reading Time */}
      {targetReadingTime && (
        <div className="mt-4 text-sm">
          Target Reading Time: {targetReadingTime} min
        </div>
      )}
    </div>
  );
};

export default CharacterCounter;
