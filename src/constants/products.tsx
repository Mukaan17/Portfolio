const projectStrokeHAB = "/images/project-strokehab.png";
const projectChatbot = "/images/project-chatbot.png";
const projectFacialRecog = "/images/project-facial-recog.png";
const projectInstagram = "/images/project-instagram.png";
const projectSubway = "/images/project-subway.png";

export const products = [
  {
    href: "https://github.com/Mukaan17/Subway-Dashboard",
    title: "Subway Dashboard",
    description: "Interactive dashboard for subway system data visualization and analysis using JavaScript.",
    thumbnail: projectSubway,
    images: [projectSubway],
    stack: ["JavaScript", "HTML", "CSS", "Data Visualization"],
    slug: "subway-dashboard",
    content: (
      <div>
        <p>
          Developed an interactive dashboard for subway system data visualization and analysis.
          The project provides real-time insights into subway operations, passenger flow, and system performance.
        </p>
        <p>
          The dashboard features dynamic data visualization, interactive charts, and responsive design
          to help users understand complex transit data in an intuitive way. Built with modern JavaScript
          and web technologies for optimal performance and user experience.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Mukaan17/Stroke-Rehabilitation-Project",
    title: "StrokeHAB",
    description: "Classified upper-limb movements using Neural Networks for stroke rehabilitation assessment.",
    thumbnail: projectStrokeHAB,
    images: [projectStrokeHAB],
    stack: ["Python", "TensorFlow", "UNet"],
    slug: "strokehab",
    content: (
      <div>
        <p>
          StrokeHAB is an innovative project that leverages deep learning to assist in stroke rehabilitation.
          The system uses neural networks to classify and analyze upper-limb movements, providing valuable
          insights for both patients and healthcare providers.
        </p>
        <p>
          The project utilizes UNet architecture implemented in TensorFlow to achieve high accuracy in movement
          classification. This helps in tracking patient progress and adjusting rehabilitation programs
          for optimal recovery outcomes.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Mukaan17/Banking-sector-based-Chatbot",
    title: "Customer Service Chatbot",
    description: "Flask-based chatbot designed to handle banking queries with natural language processing capabilities.",
    thumbnail: projectChatbot,
    images: [projectChatbot],
    stack: ["Python", "Flask", "Docker", "MySQL"],
    slug: "banking-chatbot",
    content: (
      <div>
        <p>
          Developed a sophisticated chatbot system that streamlines customer service in the banking sector.
          The solution is built with Flask and containerized using Docker for easy deployment and scaling.
        </p>
        <p>
          The chatbot integrates with MySQL for persistent storage and uses natural language processing
          to understand and respond to customer queries effectively. The system is designed to handle
          common banking queries while maintaining security and user privacy.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Mukaan17/CNN-based-Facial-Recognition-tool",
    title: "Facial Recognition NCR",
    description: "Advanced facial recognition system using OpenCV and CNN for real-time face matching in video streams.",
    thumbnail: projectFacialRecog,
    images: [projectFacialRecog],
    stack: ["Python", "OpenCV", "TensorFlow"],
    slug: "facial-recognition",
    content: (
      <div>
        <p>
          Implemented a real-time facial recognition system using OpenCV for image processing and
          Convolutional Neural Networks (CNN) for accurate face matching. The system is designed
          to work efficiently with video streams.
        </p>
        <p>
          The project combines traditional computer vision techniques with modern deep learning
          approaches to achieve high accuracy in face detection and matching. The system is
          optimized for performance and can handle multiple faces simultaneously.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Mukaan17/IG-Clone",
    title: "Instagram Clone",
    description: "Full-stack social media platform built with the MERN stack, featuring core Instagram functionalities.",
    thumbnail: projectInstagram,
    images: [projectInstagram],
    stack: ["MongoDB", "Express", "React", "Node"],
    slug: "instagram-clone",
    content: (
      <div>
        <p>
          Created a comprehensive Instagram clone using the MERN (MongoDB, Express, React, Node.js) stack.
          The application implements core social media features including user authentication, post creation,
          likes, comments, and user profiles.
        </p>
        <p>
          The project demonstrates proficiency in full-stack development, including database design,
          RESTful API implementation, and modern front-end development practices. The application
          is built with scalability and performance in mind.
        </p>
      </div>
    ),
  },
];
