import React, { useState } from "react";
import ContentFilterTabs from "@/components/ui/ContentFilterTab";
import ImageCard from "@/components/layout/card/ImageCard";

// Sample data; remember to delete when database is ready
const popularImages = [
  {
    id: 1,
    title: "Beautiful Sunset",
    src: "/placeholder.svg?height=200&width=300",
    user: {
      name: "JaneDoe123",
      avatar: "/placeholder.svg?height=32&width=32",
      joined: "Joined December 2021",
    },
    tags: ["#nature", "#sunset", "#photography"],
    stats: {
      likes: "2.5k",
      comments: "100",
      views: "10.2k",
      uploaded: "2d ago",
    },
  },
];

const newImages = [
  {
    id: 2,
    title: "Morning Dew",
    src: "/placeholder.svg?height=200&width=300",
    user: {
      name: "JaneSmith49",
      avatar: "/placeholder.svg?height=32&width=32",
      joined: "Joined January 2022",
    },
    tags: ["#morning", "#dew", "#nature"],
    stats: {
      likes: "1.8k",
      comments: "80",
      views: "8.5k",
      uploaded: "2h ago",
    },
  },
];

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
          <ContentFilterTabs onTabChange={handleTabChange} />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activeTab === "popular"
          ? popularImages.map((image) => (
              <ImageCard key={image.id} {...image} />
            ))
          : newImages.map((image) => <ImageCard key={image.id} {...image} />)}
      </div>
    </div>
  );
};

export default BrowsePage;
