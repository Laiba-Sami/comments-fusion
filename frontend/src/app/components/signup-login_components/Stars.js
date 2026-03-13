// src/components/signup-login_components/Stars.jsx

import PropTypes from "prop-types";

export default function Stars({ count }) {
  return (
    <div className="flex space-x-1 m-0 p-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-xl ${i < count ? "text-yellow-400" : "text-white/50"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};
