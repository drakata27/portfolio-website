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
import { Badge } from "./ui/badge";

type ExperienceProps = {
  organisation: string;
  role: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
  location: string;
  skills: string[];
};

const ExperienceCard = ({
  organisation,
  role,
  startDate,
  endDate,
  experiences,
  imageSrc,
  location,
  skills,
}: ExperienceProps) => {
  return (
    <div className="mt-4 flex flex-wrap transform transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg">
      <Card className="flex w-full flex-wrap sm:flex-nowrap">
        <Avatar className="size-[125px] border hidden sm:block mt-3 ml-5">
          <AvatarImage src={imageSrc} />
          <AvatarFallback>
            <Building className="mt-2" />
          </AvatarFallback>
        </Avatar>

        <div className="flex-grow">
          <CardHeader>
            <CardTitle>{organisation}</CardTitle>
            <CardTitle className="text-sm mt-1">{role}</CardTitle>
            <CardDescription className="flex">
              {startDate} - {endDate}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside">
              {experiences.map((experience, id) => (
                <li key={id}>{experience}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="text-sm space-x-2">
            {location === "Remote" ? <>💻</> : <>📍</>}
            <p className="font-bold text-gray-500 ml-2">{location}</p>
          </CardFooter>
          <div className="space-x-3 mb-3 ml-3">
            {skills.map((skill, id) => (
              <Badge key={id} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExperienceCard;
