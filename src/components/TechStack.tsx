"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stack = [
    {
      title: "Java",
      src: "/images/logos/java.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Python",
      src: "/images/logos/python.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "C++",
      src: "/images/logos/cpp.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Swift",
      src: "/images/logos/swift.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Rust",
      src: "/images/logos/rust.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Spring",
      src: "/images/logos/spring.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Flask",
      src: "/images/logos/flask.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "TensorFlow",
      src: "/images/logos/tensorflow.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "PostgreSQL",
      src: "/images/logos/postgresql.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Oracle",
      src: "/images/logos/oracledb.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongodb.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "MySQL",
      src: "/images/logos/mysql.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Kubernetes",
      src: "/images/logos/kubernetes.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Docker",
      src: "/images/logos/docker.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Git",
      src: "/images/logos/git.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "VS Code",
      src: "/images/logos/vscode.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Node.js",
      src: "/images/logos/node.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Jenkins",
      src: "/images/logos/jenkins.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Jira",
      src: "/images/logos/jira.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Framer",
      src: "/images/logos/framer.webp",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Tailwind CSS",
      src: "/images/logos/tailwind.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
    },

    // --- Added for MediSense AI ---
    { title: "FastAPI", src: "/images/logos/fastapi.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "Pydantic", src: "/images/logos/pydantic.svg", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "Uvicorn", src: "/images/logos/uvicorn.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "WebSockets", src: "/images/logos/websockets.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "PyTorch", src: "/images/logos/pytorch.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "scikit-learn", src: "/images/logos/scikitlearn.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "pandas", src: "/images/logos/pandas.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "WhisperX", src: "/images/logos/whisperx.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    
    { title: "ChromaDB", src: "/images/logos/chromadb.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "Sentence-Transformers", src: "/images/logos/sentancetransformer.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "LangChain", src: "/images/logos/langchain.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "Groq", src: "/images/logos/groq.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "TypeScript", src: "/images/logos/typescript.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    { title: "React", src: "/images/logos/react.png", className: "h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" },
    
  ];

  // Prevent hydration mismatch by not rendering animation until mounted
  if (!isMounted) {
    return (
      <div className="mt-20">
        <Heading
          as="h2"
          className="font-black text-xl md:text-2xl lg:text-3xl mb-8 text-center"
        >
          Tech Stack
        </Heading>
        
        {/* Static version for SSR */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="flex">
            {stack.slice(0, 8).map((item, index) => (
              <div
                key={`${item.title}-static-${index}`}
                className="flex flex-col items-center justify-center mx-6 min-w-[120px] md:min-w-[140px] lg:min-w-[160px] group flex-shrink-0"
              >
                <div className="relative p-4 bg-white rounded-xl shadow-lg">
                  <Image
                    src={item.src}
                    width={200}
                    height={200}
                    alt={item.title}
                    className={twMerge("object-contain", item.className)}
                  />
                </div>
                <p className="mt-3 text-sm md:text-base font-medium text-gray-700 text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <Heading
        as="h2"
        className="font-black text-xl md:text-2xl lg:text-3xl mb-8 text-center"
      >
        Tech Stack
      </Heading>
      
      {/* Infinite scrolling gallery container */}
      <div className="relative overflow-hidden hover:overflow-x-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 scrollbar-hide">
        <div className="flex animate-infinite-scroll hover:pause-animation">
          {/* Two sets for seamless infinite scroll */}
          {stack.map((item, index) => (
            <div
              key={`${item.title}-1-${index}`}
              className="flex flex-col items-center justify-center mx-6 min-w-[120px] md:min-w-[140px] lg:min-w-[160px] group flex-shrink-0"
            >
              <div className="relative p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Image
                  src={item.src}
                  width={200}
                  height={200}
                  alt={item.title}
                  className={twMerge("object-contain transition-transform duration-300", item.className)}
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </p>
            </div>
          ))}
          {stack.map((item, index) => (
            <div
              key={`${item.title}-2-${index}`}
              className="flex flex-col items-center justify-center mx-6 min-w-[120px] md:min-w-[140px] lg:min-w-[160px] group flex-shrink-0"
            >
              <div className="relative p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Image
                  src={item.src}
                  width={200}
                  height={200}
                  alt={item.title}
                  className={twMerge("object-contain transition-transform duration-300", item.className)}
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
