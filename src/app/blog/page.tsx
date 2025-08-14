import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Mukhil Sundararaj",
  description:
    "Mukhil Sundararaj writes about AI/ML, technology, and sustainable AI solutions.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about AI/ML and technology</Heading>
      <Paragraph className="pb-10">
        Sharing insights on <Highlight>Generative AI</Highlight>, <Highlight>AI in Finance</Highlight>, 
        <Highlight>Blockchain</Highlight>, and <Highlight>Offensive Security</Highlight>.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
