import { Heart, MessageCircle, Eye, CalendarDays } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { Button } from "@/components/ui/shadcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/shadcn/hover-card";

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

export default function ImageCard({
  title,
  src,
  user,
  tags,
  stats,
}: ImageCardProps) {
  return (
    <Card className="max-w-sm overflow-hidden">
      <div className="relative group">
        <img
          alt={title}
          className="w-full h-48 object-cover"
          height="200"
          src={src}
          width="300"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4 text-white">
            <Button variant="ghost" size="sm" className="p-0 flex items-center">
              <Heart className="w-5 h-5 mr-1" />
              {stats.likes}
            </Button>
            <Button variant="ghost" size="sm" className="p-0 flex items-center">
              <MessageCircle className="w-5 h-5 mr-1" />
              {stats.comments}
            </Button>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-1" />
              <span>{stats.views}</span>
            </div>
          </div>
        </div>
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <HoverCard>
            <HoverCardTrigger asChild>
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
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={user.avatar} alt={`@${user.name}`} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@{user.name}</h4>
                  <p className="text-sm">
                    Professional photographer with a passion for capturing
                    nature's beauty.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      {user.joined}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-muted">
        <span className="text-xs text-muted-foreground">{stats.uploaded}</span>
      </CardFooter>
    </Card>
  );
}
