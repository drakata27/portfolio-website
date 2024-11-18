import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const AboutPicture = () => {
  return (
    <Avatar className="size-20 border">
      <AvatarImage src="/images/profile-pic.jpeg" />
      <AvatarFallback>
        <User className="mt-2" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AboutPicture;
