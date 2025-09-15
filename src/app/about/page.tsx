"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { PageTransition } from "@/components/PageTransition";
import { useEffect, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";


export default function AboutPage() {
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
        <span className="text-4xl">💬</span>
        <Heading className="font-black">About Me</Heading>
        <About />
      </Container>
    </PageTransition>
  );
}
