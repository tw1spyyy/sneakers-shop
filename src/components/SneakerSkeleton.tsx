import React from "react";
import ContentLoader from "react-content-loader";

export const SneakerSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="78" y="436" rx="0" ry="0" width="4" height="0" />
      <rect x="30" y="40" rx="10" ry="10" width="152" height="91" />
      <rect x="30" y="149" rx="3" ry="3" width="152" height="15" />
      <rect x="30" y="168" rx="3" ry="3" width="94" height="15" />
      <rect x="150" y="197" rx="8" ry="8" width="32" height="32" />
      <rect x="17" y="12" rx="0" ry="0" width="4" height="1" />
      <rect x="30" y="206" rx="9" ry="9" width="81" height="24" />
    </ContentLoader>
  );
};
