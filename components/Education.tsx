import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <GraduationCap className="mr-2" />
        University of West London
      </CardContent>

      <CardDescription className="ml-[30px]">
        <p>2022 - 2026</p>
      </CardDescription>

      <CardFooter className="flex flex-col gap-2 items-start">
        <h1 className="col-1 mt-1">Curriculum</h1>
        <div className="col-1 space-x-2 space-y-[5.5px]">
          <Badge variant="outline">Algorithms and Data Types</Badge>
          <Badge variant="outline">OOP</Badge>
          <Badge variant="outline">Functional Programming</Badge>
          <Badge variant="outline">Database Systems</Badge>
          <Badge variant="outline">Mobile Development</Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Education;
