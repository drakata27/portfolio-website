import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import AboutPicture from "./AboutPicture";

const AboutCard = () => {
  return (
    <div className="flex hover-animation">
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription className="flex">
            <div className="">
              <p className="">
                I am a <strong>Computer Science</strong> student at the{" "}
                <strong>University of West London</strong>, currently working at{" "}
                <strong>NBCUniversal</strong> as a{" "}
                <strong>Media Technology Intern</strong>
              </p>
            </div>
            <AboutPicture />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contact</p>
          <div className="flex mt-2 space-x-3">
            <Link href="https://github.com/drakata27" target="blank">
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aleksandar-drakaliyski/"
              target="blank"
            >
              <Linkedin />
            </Link>
            <Link href="mailto:aleks.draka02@gmail.com" target="blank">
              <Mail />
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
