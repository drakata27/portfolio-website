import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type ProjectProps = {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
};

const ProjectCard = ({
  title,
  imageSrc,
  description,
  skills,
  demo,
  source,
}: ProjectProps) => {
  return (
    <div className="m-3 hover-animation">
      <Card className="p-4">
        <Image
          src={imageSrc}
          alt={title}
          height={200}
          width={200}
          className="rounded-xl"
        />

        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-x-3 mb-3 ml-3">
            {skills.map((skill, id) => (
              <Badge key={id} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link href={source} target="blank">
            <Button variant="link" className="font-bold">
              Source
            </Button>
          </Link>
          <Link href={demo} target="blank">
            <Button className="font-bold">Demo</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
