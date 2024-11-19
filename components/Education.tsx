import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import curriculum from "../data/curriculum.json";

const Education = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <Code className="mr-2" />
        Computer Science
      </CardContent>
      <CardContent className="flex">
        <GraduationCap className="mr-2" />
        University of West London
      </CardContent>

      <CardDescription className="ml-[30px]">
        <p>2022 - 2026</p>
      </CardDescription>

      <CardFooter className="flex flex-col gap-2 items-start">
        <div className="col-1 space-x-2 space-y-[5.5px]">
          {curriculum.units.map((unit, id) => (
            <Badge key={id} variant="outline">
              {unit}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Education;
