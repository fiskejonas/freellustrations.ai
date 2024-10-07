import React, { useState } from "react";
import ContentFilterTab from "@/components/ui/ContentFilterTab";
import UploadButton from "@/components/ui/UploadButton";

const BrowsePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("popular");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Implement the filtering logic based on the activeTab
    console.log(`Active Tab: ${tab}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Explore The Community Feed</h1>
      <div className="flex w-full items-center">
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-6xl flex w-fit tracking-tighter">
            {activeTab === "popular" ? "Popular" : "New"}
          </h2>
        </div>
        <div className="flex ml-auto items-center gap-2">
          <ContentFilterTab onTabChange={handleTabChange} />
          <UploadButton className="ml-auto">Upload</UploadButton>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === "popular" ? (
          <p>Displaying popular content...</p>
        ) : (
          <p>Displaying new content...</p>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;
