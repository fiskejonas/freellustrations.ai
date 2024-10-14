import React from "react";
import UploadButton from "@/components/ui/UploadButton";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold tracking-tighter">Home Page</h1>
      <div className="flex items-center w-full">
        <h2 className="font-bold text-6xl w-full tracking-tighter">
          Liked Creations
        </h2>
        <UploadButton>Upload</UploadButton>
      </div>
    </div>
  );
};

export default HomePage;
