import React from "react";
import ContestPreview from "./ContestPreview";
import PropTypes from "prop-types";

export default function ContestList({ contests, onContestClick }) {
  return (
    <div>
      {contests.map((contest) => (
        <ContestPreview
          key={contest.id}
          onClick={onContestClick}
          {...contest}
        />
      ))}
    </div>
  );
}
ContestList.propTypes = {
  contests: PropTypes.array,
  onContestClick: PropTypes.func.isRequired,
};
