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
          CS Grad Student at NYU with expertise in <Highlight>Generative AI</Highlight>,{" "}
          <Highlight>AI in Finance</Highlight>, <Highlight>Blockchain</Highlight>, and{" "}
          <Highlight>Offensive Security</Highlight>. Focused on building sustainable AI solutions at scale.
        </Paragraph>
        <WorkHistory />
      </Container>
    </PageTransition>
  );
}
