import { FaPaintBrush, FaLaptopCode, FaServer } from "react-icons/fa";
export const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Testimonials", href: "#testimonials" },
  { id: 5, label: "Contact", href: "#contact" },
];
export const projects = [
  {
    id: 1,
    title: "Kalvakhy - E commerce startup for jewellry",
    des: "Kalvakhy is E commerce startup for jewellry products.",
    img: "/project1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb.svg",
      "/nodejs.svg",
      "/cloud.svg",
      "/redis.svg",
    ],
    link: "https://www.kalvakhy.com",
    demo:""
  },
  {
    id: 2,
    title: "Gausej - Tech startup platform for entrepreneurs",
    des: "Gausej is a tech startup platform designed to empower entrepreneurs by providing the tools, resources, and support they need to launch and grow their ventures.",
    img: "/project2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb.svg",
      "/nodejs.svg",
      "/cloud.svg",
      "/redis.svg",
    ],
    link: "https://gausej.tech",
  },
  {
    id: 3,
    title:
      "ProbateForm - Document generation platform for Bombay and Delhi High Court",
    des: "ProbateForm is a document generation platform tailored for the Bombay and Delhi High Courts, streamlining the creation of legal probate documents with accuracy and efficiency.",
    img: "/project3.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb.svg",
      "/nodejs.svg",
      "/cloud.svg",
    ],
    link: "https://probateform.pixbit.me",
  },

  {
    id: 4,
    title: "Icche - Website for my college society at IIEST, Shibpur",
    des: "Icche is the official website of our college society at IIEST, Shibpur, showcasing our initiatives, events, and efforts to educate and support underprivileged children through evening school programs.",
    img: "/project4.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb.svg",
      "/nodejs.svg",
      "/cloud.svg",
      "/redis.svg",
    ],
    link: "https://icche.pixbit.me",
  },
  {
    id: 5,
    title: "JobHunt - Find Jobs & Hire Talent",
    des: "JobHunt is a platform where job seekers find opportunities and employers easily post jobs to hire top talent.",
    img: "/project5.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/nodejs.svg",
      "/mongodb.svg",
      "/cloud.svg",
      "/redis.svg",
    ],
    link: "https://jobhunt.pixbit.me",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Shalu was an absolute pleasure. She contributed to the frontend development and integration of the Kalvakhy website, working closely with the backend developer to ensure a seamless user experience and smooth functionality.",
    name: "Demir",
    title: "Founder of kalvakhya - E-commerce site for Jwellery",
  },
 
  {
    quote:
      "Working with Shalu on the Gausej platform was a smooth and rewarding experience. She handled the frontend development and API integration, collaborating closely with the backend developer to ensure a modern, responsive, and fully functional website. ",
    name: "Shubham",
    title: "Founder of Gausej - Platform for entrepreneurs ",
  },
  
  {
    quote:
      "Shalu did a fantastic job building the official website for our college society, Icche, at IIEST Shibpur. She designed the Figma mockups and converted them into a fully functional website, effectively showcasing our events, volunteers, and initiatives to support underprivileged children. ",
    name: "Dr. Vineet Srivastava",
    title: "FIC of ICCHE",
  },
  {
    quote:
      "Shalu played a key role in developing ProbateForm, a document generation platform tailored for the Bombay and Delhi High Courts. She worked on the frontend development and integration, delivering a secure, efficient, and user-friendly interface that simplifies the creation of legal probate documents.",
    name: "Ashish",
    title: "Founder of Probateform ",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "AWS",
    img: "/aws.svg",
    nameImg: "/awsName.png",
  },
  {
    id: 3,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    heading: "Backend Developer",
    para: "Experience building scalable backend APIs, database management, and server-side logic.",
    icon: FaServer, // <-- component, not JSX
  },
  {
    heading: "Frontend Developer",
    para: "Creating responsive, interactive, and accessible web interfaces using React and Tailwind.",
    icon: FaLaptopCode,
  },
  {
    heading: "UI & UX Designer",
    para: "Designing intuitive and user-friendly interfaces for web and mobile applications.",
    icon: FaPaintBrush,
  },
];

export const education = [
  {
    heading: "B.Tech",
    para1: "Indian Institute of Engineering Science & Technology, Shibpur",
    para2:"Computer Science & Technology,CGPA 8.63 (till 4th semester).",
    marks:"CGPA: 8.63 (till 4th Semester)",
    year:"2023-2027 (expected)"
  },
  {
    heading: "Higher Education",
    para1: "CH Plus Two High School, Jhumri Tilaiya",
    marks:"Marks: 91%",
    year:"2020-2022"
  },
  {
   heading: "Secondary Education",
    para1: "Munan Public School, Hazaribagh",
    marks:"Marks: 90%",
    year:"2018-2020"
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ShaluKasera",
  },
  {
    id: 2,
    img: "/reddit.svg",
    link: "https://www.reddit.com/user/Primary_Fold_8660/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shalu-kumari-836809310/",
  },
  {
    id: 4,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/Shalu_Kasera",
  },
  {
    id: 5,
    img: "/codeforces.png",
    link: "https://codeforces.com/profile/Shaluk",
  },
];
