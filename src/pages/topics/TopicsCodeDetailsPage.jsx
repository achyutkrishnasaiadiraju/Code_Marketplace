import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const TopicsCodeDetailsPage = () => {
  const { id } = useParams();

  const topic = "Cloud Computing";

  const [query, setQuery] = useState("");
  const [codes, setCodes] = useState([
    {
      id: 1,
      title: "Cloud Computing: An Introduction",
      description:
        "This discussion provides a foundational overview of cloud computing, covering its basic concepts, service models (IaaS, PaaS, SaaS), and deployment models (public, private, hybrid, and multi-cloud). Learn about the advantages and challenges of adopting cloud technologies and explore real-world examples of cloud implementations across various industries.",
    },
    {
      id: 2,
      title: "Securing Your Cloud Infrastructure",
      description:
        "Join us to delve into the best practices for securing cloud infrastructure. This discussion will cover topics such as identity and access management (IAM), data encryption, network security, compliance standards, and the shared responsibility model. Understand the tools and techniques to safeguard your cloud environment against potential threats and vulnerabilities.",
    },
    {
      id: 3,
      title: "Cost Optimization Strategies in Cloud Computing",
      description:
        "In this in-depth discussion, we explore a variety of strategies to optimize costs in cloud computing environments. We'll start by examining the different pricing models offered by major cloud providers, including pay-as-you-go, reserved instances, and spot instances, to help you choose the most cost-effective options for your workloads. Next, we'll delve into the benefits of leveraging reserved instances for long-term savings and how to effectively manage and implement auto-scaling to ensure that you are only using resources when needed. You'll learn about best practices for monitoring and managing resource usage to prevent over-provisioning and reduce waste. We'll also cover the utilization of advanced cost management tools and dashboards provided by cloud service providers such as AWS Cost Explorer, Azure Cost Management, and Google Cloud's cost tools. These tools can provide valuable insights into your cloud spending and help you identify areas for potential savings. Additionally, the discussion will highlight real-world case studies and examples where organizations have successfully implemented cost optimization strategies, demonstrating the tangible benefits and savings achieved. By the end of this session, you'll have a comprehensive understanding of how to maximize the value of your cloud investments, make informed decisions about resource allocation, and implement effective cost-saving measures to minimize expenses while maintaining performance and scalability.",
    },    
    {
      id: 4,
      title: "Deploying a Scalable Web Application on AWS",
      description:
        "Learn how to deploy a scalable web application on AWS using services like Amazon EC2, Amazon RDS, Amazon S3, and Amazon CloudFront. This example will walk you through the process of setting up a virtual server, configuring a relational database, storing static assets in the cloud, and distributing content globally for low-latency access.",
    },
    {
      id: 5,
      title: "Serverless Computing with AWS Lambda",
      description:
        "Discover the power of serverless computing with AWS Lambda. This example will show you how to create and deploy serverless functions that automatically scale in response to demand, without the need to provision or manage servers. Learn how to trigger functions in response to events, integrate with other AWS services, and pay only for the compute time you consume.",
    },
  ]);

  const handleSubmit = () => {
    console.log("Topic Submit");
  };

  console.log(id);

  return (
    <div className="rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-between border-b border-gray-200 p-4 align-middle">
        <h5 className="text-2xl font-bold">Topic: {topic}</h5>
        <form
          className="m-4 mx-auto flex max-w-sm items-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <FaCode size={18} />
            </div>
            <input
              type="text"
              id="search"
              value={query}
              className="block w-full rounded-lg border border-border bg-gray-50 p-2.5 ps-10 text-sm font-medium text-secondary focus:border-primary-dark focus:ring-primary"
              placeholder="Search Code"
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="ms-2 rounded-lg border border-primary bg-primary p-2.5 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary"
          >
            <IoSearch />
            <span className="sr-only">Search</span>
          </button>
        </form>
        <Link to={"#"}>
          <button className="btn rounded bg-primary px-4 py-2 font-medium text-white">
            Follow
          </button>
        </Link>
      </div>
      <div className="flex max-h-[64vh] flex-col overflow-scroll px-4 py-2">
        {codes.map((code) => (
          <div
            key={code.id}
            className="m-1 flex items-start justify-between gap-2 rounded border-2 border-secondary p-4 text-gray-700 shadow-lg"
          >
            <div flex flex-col gap-2 px-4>
              <h2 className="text-md font-medium">
                <Link to={`/codes/${code.id}`}>{code.title}</Link>
              </h2>
              <p className="max-w-[720px] text-justify">
                {code.description.length > 500 ? (
                  <>
                    {code.description.slice(0, 500) + "..."}
                    {/* Redirect to Know More Page / Code Details Page */}
                    <Link to={"#"}>
                      <button className="ml-2 text-primary hover:underline hover:underline-offset-2">
                        Read More
                      </button>
                    </Link>
                  </>
                ) : (
                  code.description
                )}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="btn rounded border-2 border-primary px-2 py-1 font-medium text-secondary hover:bg-primary hover:text-white">
                Subscribe
              </button>
              <Link
                to={`/codes/${code.id}`}
                className="btn rounded border-2 border-primary px-2 py-1 font-medium text-secondary hover:bg-primary hover:text-white"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsCodeDetailsPage;
