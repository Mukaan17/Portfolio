"use client";
import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];

  const skills = [
    'Java', 'Python', 'C++', 'Swift', 'Rust', 'Spring', 'Flask', 'TensorFlow',
    'PostgreSQL', 'Oracle', 'MongoDB', 'MySQL', 'AWS', 'Kubernetes', 'Docker',
    'Git', 'VS Code', 'Node.js', 'Next.js', 'React', 'JavaScript', 'TypeScript',
    'Jenkins', 'Jira', 'Figma', 'Tailwind CSS', 'Vercel'
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          I&apos;m a passionate CS Grad Student at NYU focused on building sustainable AI solutions at scale. 
          With expertise in Generative AI, AI in Finance, Blockchain, and Offensive Security, I&apos;m dedicated to creating 
          innovative solutions that make a real impact. As a Competitive Gamer, ex-Professional Racer, and Offensive Security enthusiast,
          I bring a unique perspective to problem-solving and technology development.
        </Paragraph>

        <Heading as="h3" className="text-2xl font-semibold mt-8 mb-4">Education</Heading>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="text-blue-400 mr-2">📘</span>
            <div>
              <p className="font-medium">M.S. in Computer Science</p>
              <p className="text-gray-400">New York University (2024–2026)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-purple-400 mr-2">🎓</span>
            <div>
              <p className="font-medium">Post Graduate Diploma in AI/ML</p>
              <p className="text-gray-400">University of Texas at Austin & Great Lakes Institute of Technology (2022–2023)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-400 mr-2">🎓</span>
            <div>
              <p className="font-medium">B.Tech in Computer Science</p>
              <p className="text-gray-400">SRM Institute of Science and Technology (2018–2022)</p>
            </div>
          </div>
        </div>

        <Heading as="h3" className="text-2xl font-semibold mt-8 mb-4">Skills</Heading>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors text-gray-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <Paragraph className="mt-8">
          My journey in technology has been driven by a curiosity to understand and create solutions 
          that combine cutting-edge technology with practical applications. I&apos;m particularly 
          interested in Generative AI, AI in Finance, Blockchain, and Offensive Security. I&apos;m always excited 
          to take on new challenges that push the boundaries of what&apos;s possible, whether it&apos;s in gaming, 
          racing, or cybersecurity.
        </Paragraph>
      </div>
    </div>
  );
}
