import React from "react";
import SolutionCard from "./SolutionCard";

const Solutions = () => {
  return (
    <div className="flex">
      <SolutionCard
        imageUrl={"images/letslink_1.webp"}
        title={"Tester"}
        description="Light up your event with thousands of color-changing bracelets pulsing in unison."
      />
    </div>
  );
};

export default Solutions;
