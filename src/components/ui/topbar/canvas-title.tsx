import React, { useState } from "react";

const CanvasTitle: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  return (
    <input
      type="text"
      placeholder="Enter Workspace Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="p-2 rounded-md border border-black/40 bg-transparent text-gray-700"
    />
  );
};

export default CanvasTitle;
