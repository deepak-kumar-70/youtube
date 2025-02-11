import  { useState } from 'react';

const Description = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="h-auto bg-slate-200 rounded-xl mt-2 p-3">
      <div
        className={`overflow-hidden ${
          expanded ? '' : 'overflow-ellipsis'
        }`}
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: expanded ? 'unset' : 3,
        }}
      >
        Welcome to Sheryians Coding School transformative journey!
        🚀 Join us for 7 Days Discipline where we master JavaScript, cultivate
        a winning attitude, ace interviews, and shift perspectives. Elevate
        your coding game and life in just one week! 🌟 Welcome to Sheryians
        Coding School transformative journey! 🚀 Join us for 7 Days Discipline
        where we master JavaScript, cultivate a winning attitude, ace
        interviews, and shift perspectives. Elevate your coding game and life
        in just one week! 🌟 Welcome to Sheryians Coding School transformative
        journey! 🚀 Join us for 7 Days Discipline where we master JavaScript,
        cultivate a winning attitude, ace interviews, and shift perspectives.
        Elevate your coding game and life in just one week! 🌟
      </div>
      {!expanded && (
        <button onClick={toggleExpand} className="text-blue-500">
          Read More
        </button>
      )}
    </div>
  );
};

export default Description;
