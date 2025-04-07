import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Java",
      src: "/images/logos/java.png",
      className: "h-12 w-12",
    },
    {
      title: "Python",
      src: "/images/logos/python.png",
      className: "h-12 w-12",
    },
    {
      title: "Spring Boot",
      src: "/images/logos/spring.png",
      className: "h-12 w-12",
    },
    {
      title: "Docker",
      src: "/images/logos/docker.png",
      className: "h-12 w-12",
    },
    {
      title: "OpenShift",
      src: "/images/logos/openshift.png",
      className: "h-12 w-12",
    },
    {
      title: "TensorFlow",
      src: "/images/logos/tensorflow.png",
      className: "h-12 w-12",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
    },
    {
      title: "MySQL",
      src: "/images/logos/mysql.png",
      className: "h-12 w-12",
    },
    {
      title: "Swift",
      src: "/images/logos/swift.png",
      className: "h-12 w-12",
    }
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
