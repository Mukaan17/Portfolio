"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { PageTransition } from "@/components/PageTransition";
import { useEffect, useState } from "react";

export default function Resume() {
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
        <Heading className="font-black">Professional Experience</Heading>
        <Paragraph className="max-w-xl mt-4">
          CS Grad Student at NYU with expertise in <Highlight>Generative AI</Highlight>,{" "}
          <Highlight>AI in Finance</Highlight>, <Highlight>Blockchain</Highlight>, and{" "}
          <Highlight>Offensive Security</Highlight>. Focused on building sustainable AI solutions at scale.
        </Paragraph>
        <WorkHistory />
      </Container>
    </PageTransition>
  );
}
