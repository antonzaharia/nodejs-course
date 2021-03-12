import React from "react";
import ContestPreview from "./ContestPreview";
import PropTypes from "prop-types";

export default function ContestList({ contests, onContestClick }) {
  return (
    <div>
      {Object.keys(contests).map((contestId) => (
        <ContestPreview
          key={contestId}
          onClick={onContestClick}
          {...contests[contestId]}
        />
      ))}
    </div>
  );
}
ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func.isRequired,
};
