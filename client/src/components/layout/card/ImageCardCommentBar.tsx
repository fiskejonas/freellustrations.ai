import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";

interface CommentBarProps {
  onSubmit: (comment: string) => void;
  placeholder?: string;
}

export default function CommentBar({
  onSubmit,
  placeholder = "Add a comment...",
}: CommentBarProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <Input
        type="text"
        placeholder={placeholder}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="flex-1"
      />
      <Button
        type="submit"
        size="sm"
        variant="ghost"
        disabled={!comment.trim()}
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
