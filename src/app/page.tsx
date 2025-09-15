"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { PageTransition } from "@/components/PageTransition";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [shouldReverse, setShouldReverse] = useState(false);

  useEffect(() => {
    // Check if we're coming back from a reverse navigation
    const isReversing = sessionStorage.getItem('pageTransitionReversing') === 'true';
    if (isReversing) {
      setShouldReverse(true);
      // Clear the flag after the animation completes
      setTimeout(() => {
        sessionStorage.removeItem('pageTransitionReversing');
        setShouldReverse(false);
      }, 400); // Match the animation duration
    }
  }, []);

  return (
    <PageTransition reverse={shouldReverse}>
      <Container>
        <span className="text-4xl">👋</span>
        <Heading className="font-black">Hi, I&apos;m Mukhil</Heading>
        <Paragraph className="max-w-xl mt-4">
          I&apos;m a <Highlight>Software Engineer</Highlight> and{" "}
          <Highlight>AI/ML Enthusiast</Highlight> pursuing my Master&apos;s in Computer Science at NYU
        </Paragraph>
        <Paragraph className="max-w-xl mt-4">
          With a strong foundation in software development and a passion for artificial intelligence,
          I combine technical expertise with innovative problem-solving skills to create impactful solutions.
        </Paragraph>
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/Mukaan17"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mukhilsundararaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md text-white"
          >
            LinkedIn
          </a>
        </div>
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
        >
          What I&apos;ve been working on
        </Heading>
        <Products />
        <TechStack />
      </Container>
    </PageTransition>
  );
}
