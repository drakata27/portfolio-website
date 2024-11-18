import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import AboutPicture from "./AboutPicture";

const AboutCard = () => {
  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription className="flex">
            <div className="">
              <p className="">
                I am a Computer Science at the University of West London,
                currently working at NBCUniversal as a Media Technology Intern
              </p>
            </div>
            <AboutPicture />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Links</p>
          <div className="flex mt-2">
            <Link href="https://github.com/drakata27" target="blank">
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aleksandar-drakaliyski/"
              target="blank"
              className="ml-2"
            >
              <Linkedin />
            </Link>
          </div>
        </CardContent>
        <CardFooter>
          <p>📍London, United Kingdom</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AboutCard;
