import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resume | Mukhil Sundararaj",
  description: "Mukhil Sundararaj's professional experience in software engineering, AI/ML, and iOS development.",
};

export default function Resume() {
  return (
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
  );
}
