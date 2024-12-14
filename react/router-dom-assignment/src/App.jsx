import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Pages/All";
import FullStack from "./Pages/FullStack";
import DataScience from "./Pages/DataScience";
import CyberSecurity from "./Pages/CyberSecurity";
import Career from "./Pages/Career";
import Footer from "./Components/Footer";

function App() {

  const fullStackBlogs = [
    {
      id: 1,
      title: "Introduction to MERN Stack Development",
      description:
        "Learn how to use MongoDB, Express.js, React, and Node.js to create robust full-stack applications.",
      date: "14 December 2024",
      comments: "5 Comments",
    },
    {
      id: 2,
      title: "Optimizing Front-End Performance with React",
      description:
        "Techniques to boost React application performance, reduce load times, and improve user experience.",
      date: "14 December 2024",
      comments: "2 Comments",
    },
    {
      id: 3,
      title: "Deploying Applications with Docker and Kubernetes",
      description:
        "An essential guide to containerizing and deploying full-stack applications at scale.",
      date: "14 December 2024",
      comments: "8 Comments",
    },
    {
      id: 4,
      title: "CI/CD Pipelines for Full Stack Applications",
      description:
        "Learn how to implement continuous integration and continuous delivery pipelines effectively.",
      date: "14 December 2024",
      comments: "3 Comments",
    },
    {
      id: 5,
      title: "Mastering APIs with Node.js and Express",
      description:
        "Create and consume RESTful APIs efficiently to power your full-stack applications.",
      date: "14 December 2024",
      comments: "6 Comments",
    },
    {
      id: 6,
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      description:
        "In the world of system design, envision a digital skyscraper - a multifaceted structure built.",
      date: "14 December 2024",
      comments: "No Comments",
    },
  ];

  const dataScienceBlogs = [
    {
      id: 1,
      title: "Understanding Machine Learning Algorithms",
      description:
        "Explore fundamental ML algorithms like linear regression, decision trees, and support vector machines.",
      date: "14 Decemeber 2024",
      comments: "3 Comments",
    },
    {
      id: 2,
      title: "Python Libraries for Data Science",
      description:
        "An introduction to powerful libraries like Pandas, NumPy, and Matplotlib for data analysis.",
      date: "14 Decemeber 2024",
      comments: "5 Comments",
    },
    {
      id: 3,
      title: "Data Visualization with Tableau and Power BI",
      description:
        "Learn how to visualize data effectively with tools like Tableau and Power BI for actionable insights.",
      date: "14 Decemeber 2024",
      comments: "2 Comments",
    },
    {
      id: 4,
      title: "Natural Language Processing with Python",
      description:
        "Dive into NLP concepts and build applications using Python libraries like NLTK and spaCy.",
      date: "14 Decemeber 2024",
      comments: "7 Comments",
    },
    {
      id: 5,
      title: "Big Data Analytics with Apache Spark",
      description:
        "Learn how to process and analyze big data efficiently using Apache Spark.",
      date: "14 Decemeber 2024",
      comments: "4 Comments",
    },
    {
      id: 6,
      title: "Deep Learning Essentials with TensorFlow",
      description:
        "Master the basics of deep learning with hands-on implementation using TensorFlow.",
      date: "14 Decemeber 2024",
      comments: "6 Comments",
    },
  ];

  const cyberSecurityBlogs = [
    {
      id: 1,
      title: "Understanding Cybersecurity Fundamentals",
      description:
        "Learn the basics of cybersecurity, including encryption, firewalls, and secure protocols.",
      date: "14 December 2024",
      comments: "8 Comments",
    },
    {
      id: 2,
      title: "Ethical Hacking: An Introduction",
      description:
        "An overview of ethical hacking techniques and how to protect against common vulnerabilities.",
      date: "14 December 2024",
      comments: "12 Comments",
    },
    {
      id: 3,
      title: "Securing Your Network with Firewalls",
      description:
        "Discover how firewalls help protect networks and different firewall configurations for optimal security.",
      date: "14 December 2024",
      comments: "4 Comments",
    },
    {
      id: 4,
      title: "Exploring Phishing Attacks and How to Prevent Them",
      description:
        "An in-depth look at phishing attacks and effective strategies for avoiding them.",
      date: "14 December 2024",
      comments: "6 Comments",
    },
    {
      id: 5,
      title: "Advanced Threat Detection Techniques",
      description:
        "Learn advanced methods for detecting and mitigating cyber threats in real-time.",
      date: "14 December 2024",
      comments: "9 Comments",
    },
    {
      id: 6,
      title: "Blockchain and Cybersecurity: A Perfect Match?",
      description:
        "Examine how blockchain technology is used to enhance security and combat fraud.",
      date: "14 December 2024",
      comments: "7 Comments",
    },
  ];

  const careerBlogs = [
    {
      id: 1,
      title: "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then these technologies are your gateway to success.",
      date: "14 December 2024",
      comments: "No Comments",
    },
    {
      id: 2,
      title: "Best 11 Product-Based Companies for Product Managers in India",
      description:
        "Who is a product manager? What are the best product-based companies for product managers in India? This blog has got the answers!",
      date: "14 December 2024",
      comments: "No Comments",
    },
    {
      id: 3,
      title: "Top 5 IT Jobs for Economics Students",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for economics students.",
      date: "14 December 2024",
      comments: "No Comments",
    },
    {
      id: 4,
      title: "How to Build an Impressive Portfolio as a Software Developer",
      description:
        "Learn how to create a standout portfolio that can help you land your dream software developer job in 2024.",
      date: "14 December 2024",
      comments: "2 Comments",
    },
    {
      id: 5,
      title: "The Rise of Remote Work: Best Remote Tech Jobs in 2024",
      description:
        "Explore the top remote tech jobs in 2024 and how you can tap into this growing trend of working from anywhere.",
      date: "14 December 2024",
      comments: "3 Comments",
    },
    {
      id: 6,
      title: "Navigating the Tech Industry as a Female Developer",
      description:
        "Breaking the glass ceiling in tech—how women are thriving in a male-dominated industry and making their mark.",
      date: "14 December 2024",
      comments: "4 Comments",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<All fullStackBlogs={fullStackBlogs}  dataScienceBlogs={dataScienceBlogs} cyberSecurityBlogs={cyberSecurityBlogs} careerBlogs={careerBlogs} />} />
          <Route path="/fullstack" element={<FullStack fullStackBlogs={fullStackBlogs} />} />
          <Route path="/datascience" element={<DataScience dataScienceBlogs={dataScienceBlogs} />} />
          <Route path="/cybersecurity" element={<CyberSecurity cyberSecurityBlogs={cyberSecurityBlogs} />} />
          <Route path="/career" element={<Career careerBlogs={careerBlogs} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;