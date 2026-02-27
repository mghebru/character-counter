import React, { useState } from "react";
import type { TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  const [text, setText] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText); // directly notify parent
  };

  return (
    <div className="w-full">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-4 border rounded-md resize-none h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

