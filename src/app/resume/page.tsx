"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { PageTransition } from "@/components/PageTransition";

export default function Resume() {
  return (
    <PageTransition>
      <Container>
        <span className="text-4xl">💼</span>
        <Heading className="font-black">Professional Experience</Heading>
        <Paragraph className="max-w-xl mt-4">
          Software Engineer with expertise in <Highlight>enterprise applications</Highlight>,{" "}
          <Highlight>AI/ML solutions</Highlight>, and <Highlight>mobile development</Highlight>.
          Currently pursuing MS in Computer Science at NYU.
        </Paragraph>
        <WorkHistory />
      </Container>
    </PageTransition>
  );
}
