import { Heart, MessageCircle } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";

import { Button } from "@/components/ui/shadcn/button";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/shadcn/card-variant-2";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/shadcn/context-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/shadcn/hover-card";

import ImageCardCommentBar from "@/components/layout/card/ImageCardCommentBar";

interface User {
  name: string;
  avatar: string;
  joined: string;
}

interface ImageCardProps {
  title: string;
  src: string;
  user: User;
  tags: string[];
  stats: {
    likes: string;
    comments: string;
    views: string;
    uploaded: string;
  };
}

export default function ImageCardWithContextMenu({
  title,
  src,
  user,
  stats,
}: ImageCardProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Card className="w-[250px] h-auto border-none bg-transparent shadow-none tracking-tight">
          <img
            alt={title}
            className="w-full rounded-lg h-auto object-cover bg-gray-200"
            height="375"
            src={src}
            width="250"
          />
          <CardHeader className="flex-row w-full">
            <div className="flex items-center w-fit justify-between mr-auto">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2 w-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 rounded-full"
                    >
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={user.avatar} alt={`@${user.name}`} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                    <div className="flex flex-col items-start">
                      <span className="text-sm leading-[1.2]">{user.name}</span>
                      <span className="font-light text-xs text-muted-foreground">
                        {stats.uploaded}
                      </span>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="">
                  <div className="flex justify-between space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={user.avatar} alt={`@${user.name}`} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{user.name}</h4>
                      <p className="text-sm">
                        Professional photographer with a passion for capturing
                        nature's beauty.
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          {user.joined}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="flex text-xs gap-2 w-fit text-foreground">
              <Button
                variant="ghost"
                size="sm"
                className="p-0 flex items-center"
              >
                <Heart strokeWidth={1.5} className="w-4 h-4 mr-1" />
                {stats.likes}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-0 flex items-center"
              >
                <MessageCircle strokeWidth={1.5} className="w-4 h-4 mr-1" />
                {stats.comments}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="">
            <ImageCardCommentBar
              onSubmit={(comment) => {
                // Handle the comment submission here
                console.log("New comment:", comment);
              }}
            />
          </CardContent>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Download Image</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
