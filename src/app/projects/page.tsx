import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Mukhil Sundararaj",
  description:
    "Explore Mukhil Sundararaj's projects in AI/ML, data visualization, full-stack development, and sustainable AI solutions.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-3xl"></span>
      <Heading className="font-black mb-10">
        My Projects
      </Heading>

      <Products />
    </Container>
  );
}
