"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";

type ContentFilterTabsProps = {
  onTabChange: (tab: string) => void;
};

export default function ContentFilterTabs({
  onTabChange,
}: ContentFilterTabsProps) {
  const [activeTab, setActiveTab] = useState("popular");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onTabChange(value);
  };

  return (
    <div className="w-fit max-w-md mx-auto">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-fit">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
