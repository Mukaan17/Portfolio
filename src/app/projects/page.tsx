"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { PageTransition } from "@/components/PageTransition";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
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
        <span className="text-3xl"></span>
        <Heading className="font-black mb-10">
          My Projects
        </Heading>

        <Products />
      </Container>
    </PageTransition>
  );
}
