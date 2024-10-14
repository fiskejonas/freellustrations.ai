import React from "react";

const LikedPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold tracking-tighter">
        All Your Favorite Stuff
      </h1>
      <div className="flex items-center w-full">
        <h2 className="font-bold text-6xl w-full tracking-tighter">
          Recent Likes
        </h2>
      </div>
    </div>
  );
};

export default LikedPage;
