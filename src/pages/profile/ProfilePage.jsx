import Accordion from "../../components/ui/Accordion";
 
const discussions = [
  {
    title: "Modern Web Development Trends",
    content:
      "Discuss the latest trends in web development, including serverless architecture, micro frontends, and the growing popularity of frameworks like Svelte and SolidJS. Share your experiences with adopting these trends and their impact on your projects.",
  },
  {
    title: "The Future of JavaScript",
    content:
      "Join the discussion on the future of JavaScript. Talk about upcoming features, changes in the ECMAScript standard, and how TypeScript and other superset languages are influencing JavaScript development.",
  },
  {
    title: "The Impact of AI on Software Development",
    content:
      "Explore how artificial intelligence is transforming software development. From AI-assisted coding tools to machine learning libraries, discuss the current and future impact of AI on our industry.",
  },
  {
    title: "Balancing Performance and Accessibility",
    content:
      "How do you balance performance and accessibility in web development? Share your strategies for optimizing performance without compromising on accessibility standards.",
  },
  {
    title: "Remote Work and Team Collaboration",
    content:
      "With the rise of remote work, how are you managing team collaboration and communication? Discuss the tools and practices that have worked best for your team.",
  },
];
 
const contributions = [
  {
    title: "Creating a Custom Hook in React",
    content:
      "Learn how to create a custom hook in React for managing form state. This contribution includes a step-by-step guide and code examples to help you understand the process and implement it in your own projects.",
  },
  {
    title: "Setting Up a CI/CD Pipeline with GitHub Actions",
    content:
      "A comprehensive tutorial on setting up a continuous integration and continuous deployment (CI/CD) pipeline using GitHub Actions. This guide covers everything from creating workflows to deploying applications.",
  },
  {
    title: "Implementing OAuth 2.0 in a Node.js Application",
    content:
      "An in-depth guide on implementing OAuth 2.0 authentication in a Node.js application. This contribution includes detailed code examples and explanations to help you integrate OAuth 2.0 seamlessly into your projects.",
  },
  {
    title: "Building a REST API with Express.js",
    content:
      "Step-by-step instructions for building a RESTful API using Express.js. This tutorial covers routing, middleware, error handling, and connecting to a database.",
  },
  {
    title: "Introduction to Docker Compose",
    content:
      "Learn how to use Docker Compose to manage multi-container Docker applications. This guide covers the basics of Docker Compose, including writing `docker-compose.yml` files and common use cases.",
  },
  {
    title: "Using WebSockets in a React Application",
    content:
      "A detailed guide on integrating WebSockets into a React application for real-time communication. Includes code examples for both client-side and server-side implementation.",
  },
];
 
const ProfilePage = () => {
  return (
    <div className="m-4 grid min-h-64 grid-cols-2 justify-between gap-4 rounded p-2">
      <div className="max-h-128 overflow-auto rounded border-2 border-primary p-4 shadow-lg">
        <h2 className="text-xl font-medium">My Discussion</h2>
        <hr className="my-4 h-0.5 border-t-0 bg-secondary" />
        {discussions.map((discussion) => (
          <Accordion title={discussion.title} content={discussion.content} />
        ))}
      </div>
      <div className="max-h-128 overflow-auto rounded border-2 border-primary p-4 shadow-lg">
        <h2 className="text-xl font-medium">My Contributions</h2>
        <hr className="my-4 h-0.5 border-t-0 bg-secondary" />
        {contributions.map((contribution) => (
          <Accordion
            title={contribution.title}
            content={contribution.content}
          />
        ))}
      </div>
    </div>
  );
};
 
export default ProfilePage;