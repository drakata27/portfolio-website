import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Building } from "lucide-react";

const ExperienceCard = () => {
  return (
    <div className="mt-4 flex flex-wrap">
      <Card className="flex w-full flex-wrap sm:flex-nowrap">
        <Avatar className="size-[125px] border hidden sm:block mt-3 ml-5">
          <AvatarImage src="/images/profile-pic.jpeg" />
          <AvatarFallback>
            <Building className="mt-2" />
          </AvatarFallback>
        </Avatar>

        <div className="flex-grow">
          <CardHeader>
            <CardTitle>NBCUniversal</CardTitle>
            <CardDescription className="flex">
              July 2024 - Present
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside">
              <li>Unit testing React application with Jest and RTL</li>
              <li>Unit testing React application with Jest and RTL</li>
              <li>Unit testing React application with Jest and RTL</li>
              <li>Unit testing React application with Jest and RTL</li>
            </ul>
          </CardContent>
          <CardFooter className="text-sm">
            <p>London, United Kingdom</p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ExperienceCard;
