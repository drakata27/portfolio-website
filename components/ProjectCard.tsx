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
import { ExternalLink, Github } from "lucide-react";

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
    <div className="m-2 h-full">
      <Card className="p-4 mt-3 text-center flex flex-col items-center h-full">
        <Image
          src={imageSrc}
          alt={title}
          height={200}
          width={200}
          className="rounded-xl mt-3"
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
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <Link href={source} target="blank">
              <Button variant="link" className="font-bold border">
                Source <Github />
              </Button>
            </Link>

            <Link href={demo} target="blank">
              <Button className="hover-animation">
                Demo <ExternalLink />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
