import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import curriculum from "../data/curriculum.json";

const Education = () => {
  return (
    <Card className="transform transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg">
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <Code className="mr-2" />
        Computer Science
      </CardContent>
      <CardContent className="">
        <div className="flex">
          <GraduationCap className="mr-2 mb-3" />
          University of West London
        </div>
        <p className="text-sm">2022 - 2026</p>
      </CardContent>

      <CardDescription className="flex flex-col gap-2 items-start ml-3 mt-[-15px] mb-2">
        <div className="col-1 space-x-2 space-y-[5.5px]">
          {curriculum.units.map((unit, id) => (
            <Badge key={id} variant="outline">
              {unit}
            </Badge>
          ))}
        </div>
      </CardDescription>
    </Card>
  );
};

export default Education;
