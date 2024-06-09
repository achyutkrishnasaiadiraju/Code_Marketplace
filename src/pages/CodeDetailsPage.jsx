import React, { useEffect, useState, version } from "react";
import { useParams, Link } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";

const CodeDetailsPage = () => {
  const [codeDetails, setCodeDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setCodeDetails({
      id: 1,
      title: "Code Title",
      version: 2,
      author: "Achyut Krishna",
      language: "python",
      dependencies: "Python 3.8, Pandas, NumPy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur officia saepe vero explicabo vel repudiandae omnis vitae quos accusantium.",
      tags: ["python", "Machine Learning", "NumPy", "Pandas"],
      code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Generate random data
np.random.seed(0)
data = {
    'A': np.random.randn(100),
    'B': np.random.randn(100) * 5,
    'C': np.random.randn(100) + 3,
    'D': np.random.randint(1, 100, 100)
}

# Create a DataFrame
df = pd.DataFrame(data)

# Add a new column E as the sum of A, B, and C
df['E'] = df['A'] + df['B'] + df['C']

# Filter the DataFrame where D is greater than 50
filtered_df = df[df['D'] > 50]

# Compute some statistics
mean_values = filtered_df.mean()
std_values = filtered_df.std()

# Print statistics
print("Mean values:\n", mean_values)
print("\nStandard deviation values:\n", std_values)

# Plot the data
plt.figure(figsize=(10, 6))
plt.plot(df['A'], label='A')
plt.plot(df['B'], label='B')
plt.plot(df['C'], label='C')
plt.plot(df['E'], label='E', linestyle='--')
plt.legend()
plt.title('Random Data Plot')
plt.xlabel('Index')
plt.ylabel('Value')
plt.show()
`,
      comments: [
        {
          id: 1,
          author: "Anand Adiraju",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing",
        },
        {
          id: 2,
          author: "Shubham Sareliya",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente.",
        },
        {
          id: 3,
          author: "John Doe",
          content: "Lorem ipsum dolor sit amet",
        },
      ],
    });
  }, []);

  return (
    <div className="mx-auto mb-8 mt-2 max-w-4xl p-8">
      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Title: </span>
        <span className="w-3/4 rounded border-2 p-2 text-secondary shadow">
          {codeDetails.title}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Version: </span>
        <span className="w-3/4 rounded border-2 p-2 text-secondary shadow">
          {codeDetails.version}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Author: </span>
        <span className="w-3/4 rounded border-2 p-2 text-secondary shadow">
          {codeDetails.author}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Language: </span>
        <span className="w-3/4 rounded border-2 p-2 text-secondary shadow">
          {codeDetails.language}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Dependencies: </span>
        <span className="w-3/4 rounded border-2 p-2 text-secondary shadow">
          {codeDetails.dependencies}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Description: </span>
        <span className="w-3/4 rounded border-2 p-2 text-justify text-secondary shadow">
          {codeDetails.description}
        </span>
      </div>

      <div className="my-2 flex items-start justify-start">
        <span className="w-1/4 text-lg font-medium">Tags: </span>
        <div className="w-3/4 py-2">
          {codeDetails.tags &&
            codeDetails.tags.map((tag) => (
              <span className="mr-2 rounded border-2 p-2 text-secondary shadow">
                {tag}
              </span>
            ))}
        </div>
      </div>

      <div className="my-2">
        <span className="block text-lg font-medium">Code: </span>
        <div className="my-2">
          {codeDetails.code && (
            <CopyBlock
              text={codeDetails.code}
              customStyle={{
                height: "250px",
                overflowY: "scroll",
                borderRadius: "5px",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                fontSize: "1rem",
              }}
              language={codeDetails.language}
              showLineNumbers={true}
              theme={dracula}
              wrapLongLines={true}
            />
          )}
        </div>
      </div>

      <div className="my-2">
        <span className="block text-lg font-medium">Comments: </span>
        <div className="my-2 flex flex-col gap-2">
          {codeDetails.comments &&
            codeDetails.comments.map((comment) => (
              <div
                className="rounded border-2 border-border px-4 py-2 shadow shadow-lg"
                key={comment.id}
              >
                <h2 className="font-medium">{comment.author}</h2>
                <p className="text-justify">{comment.content}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="my-8 flex justify-between gap-4">
        <Link
          to={"contribute"}
          className="w-1/3 rounded border-2 border-primary p-2 text-center shadow hover:bg-primary hover:text-white"
        >
          Contribute
        </Link>
        <Link
          to={"#"}
          className="w-1/3 rounded border-2 border-primary p-2 text-center shadow hover:bg-primary hover:text-white"
        >
          Subscribe
        </Link>
        <Link
          to={"#"}
          className="w-1/3 rounded border-2 border-primary p-2 text-center shadow hover:bg-primary hover:text-white"
        >
          Share
        </Link>
      </div>
    </div>
  );
};

export default CodeDetailsPage;
