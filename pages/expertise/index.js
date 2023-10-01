import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function Expertise() {
  const expertise = [
    { category: "Dev", bg: "bg-red-100", description: "HTML & CSS" },
    { category: "Dev", bg: "bg-green-100", description: "Wordpress" },
    {
      category: "Dev",
      bg: "bg-blue-100",
      description: "Slicing Design to Code",
    },
    {
      category: "Dev",
      bg: "bg-orange-300",
      description: "Responsive & Adaptive Web",
    },
    {
      category: "Design",
      bg: "bg-yellow-300",
      description: "Desain Knowledge",
    },
    {
      category: "Dev",
      bg: "bg-green-200",
      description: "React.js",
    },
    {
      category: "Dev",
      bg: "bg-purple-100",
      description: "Next.js",
    },
    {
      category: "Dev",
      bg: "bg-gray-300",
      description: "Testing and Debugging",
    },
  ];
  const tools = [
    { name: "VS CODE", img: "/tools/vscode.png", category: "Code Editor" },
    { name: "Wordpress", img: "/wordpress.png", category: "Platform Website" },
    {
      name: "NPM",
      img: "/tools/npm.png",
      category: "Node Package Menager",
    },
    {
      name: "GIT",
      img: "/tools/git.png",
      category: "Version control systems",
    },
    {
      name: "Tailwind CSS",
      img: "/tools/tailwind.png",
      category: "CSS Utility",
    },
    {
      name: "React",
      img: "/tools/reactjs.png",
      category: "Library of Javascript",
    },
    {
      name: "Next JS",
      img: "/tools/nextjs.png",
      category: "The React Framawork",
    },
    {
      name: "Vercel",
      img: "/tools/vercel.svg",
      category: "Platform as a service",
    },
    {
      name: "SWR",
      img: "/tools/swr.svg",
      category: "Platform as a service",
    },
  ];
  return (
    <>
      <Head>
        <title>Kamil Muhammad | Expertise</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <section className="text-zinc-500">
          <h1 className="text-2xl ">
            <span className="font-bold">Beloved</span> Expertise
          </h1>

          <div className="flex flex-wrap gap-4 py-9">
            {expertise.map(({ category, description, bg }, index) => (
              <div
                key={index}
                className={`py-4 px-6 ${bg} bg-opacity-80 rounded-2xl text-sm`}
              >
                <span>
                  <span className="font-bold">{category}</span> &bull;{" "}
                  {description}
                </span>
              </div>
            ))}
          </div>
          <h1 className="text-2xl py-9">
            <span className="font-bold">Productivity Tolls </span>
            that i use.
          </h1>
          <div className="flex flex-wrap gap-4">
            {tools.map(({ name, img, category }, index) => (
              <div
                className="bg-gray-100 flex md:flex-col items-center md:text-center w-full md:w-40 px-4 md:px-2 py-5 md:justify-between  rounded-3xl md:gap-1 gap-4"
                key={index}
              ><div className="overflow-hidden h-10 flex justify-center items-center">
                  <Image
                    src={img}
                    alt={name}
                    width={40}
                    height={40}
                    className=""
                  />
                </div>
                <div>
                  <h1 className="font-semibold">{name}</h1>
                  <p className="text-xs font-light">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Expertise;
