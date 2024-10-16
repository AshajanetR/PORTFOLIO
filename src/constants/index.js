import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate MERN stack developer with 3 years of hands-on experience in building dynamic and scalable web applications. I have honed my skills in front-end technologies like React and Tailwind CSS, and back-end technologies like Node.js and Express.js, with MongoDB for database management. Additionally, I have expertise in PostgreSQL, Docker, Git, and OAuth for secure authentication and streamlined development processes. My goal is to leverage these technologies to create innovative solutions that deliver exceptional user experiences and drive success.`;

export const ABOUT_TEXT = `I am a dedicated and versatile MERN stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of hands-on experience, I have developed expertise in technologies like React, Tailwind CSS, Node.js, Express.js, MongoDB, and PostgreSQL. My journey in web development started with a deep curiosity for building dynamic solutions, and I have since embraced challenges that push me to continuously learn and grow. I thrive in collaborative settings, enjoy tackling complex problems, and am committed to delivering high-quality applications. Beyond coding, I explore new technologies, stay active, and am always keen to contribute to impactful projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "The Complete Web Development Bootcamp 2023",
    company: "Udemy",
    description: `Currently advancing my skills in web development, focusing on complex topics such as responsive design, advanced JavaScript techniques, and full-stack development using the MERN stack. Engaging in hands-on projects that cover modern frameworks, state management, API integration, and deploying scalable web applications.`,
    technologies: ["Node.js", "React.js", "Express.js", "mongoDB","Postgresql","Bootstrap"],
  },
  {
    year: "2022 - 2023",
    role: "Problem Solving Through C Programming",
    company: "NPTEL Elite Certificate",
    description: `Earned an NPTEL Elite Certificate by demonstrating proficiency in algorithmic thinking and coding using the C programming language. Gained expertise in solving computational problems efficiently with a focus on logic, control structures, and data manipulation.`,
    technologies: ["C Programming"],
  },
  {
    year: "2022 - 2023",
    role: "Star Performer Award",
    company: "Empower Softkills,Vertical Eye",
    description: `Excelled in leadership and communication skills during the training program, recognized as a Star Performer for outstanding contributions and effective collaboration in team settings.`,
    technologies: ["SoftSkill","TeamWork","Time Mangagement","Leadership"],
  },
  {
    year: "2022 - 2023",
    role: "Health Record mangagement using Blockchain",
    company: "Vidhya Incubation Center",
    description: `Awarded a cash prize of ₹10,000 for my contributions as part of a team of three, focusing on the front-end development of a blockchain-based health record management system.`,
    technologies: ["React.js","Tailwind css"],
  },
];

export const PROJECTS = [
  {
    title: "Realtime Chat Application",
    image: project1,
    description:
      "A real-time chat application that allows users to communicate seamlessly, featuring user authentication and dynamic messaging capabilities using Socket.io.",
    technologies: ["Docker", "Express.js", "React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Dynamic To-Do List",
    image: project2,
    description:
      "A dynamic to-do list application with user authentication via OAuth, allowing users to add, edit, and delete tasks in real time. It features smooth animations for an engaging user experience.",
    technologies: ["React js", "Node.js", "Express.js", "PostgreSql","Tailwind Css"],
  },
  {
    title: "Anonymous Secrets Website",
    image: project3,
    description:
      "A website that allows users to anonymously share their secrets, implemented using Passport.js and Google OAuth 2.0 for secure user authentication.",
    technologies: ["EJS", "Node.js", "Express.js", "MongoDB","Passport.js"],
  },
  {
    title: "Travel Tracker Website",
    image: project4,
    description:
      "A Travel-Tracker that helps users visually monitor the countries they have visited on a world map, providing an engaging way to track and display their travel history. It allows users to easily mark and organize their travels for better insights into their global journeys.",
    technologies: ["EJS", "HTML", "CSS", "Express", "Postgresql"],
  },
];

export const CONTACT = {
  address: "Feel free to reach out via email for any inquiries or collaborations.",
  phoneNo: "You can also connect with me on my social media profiles for more updates!",
  email: "ashajanet7@gmail.com",
};
