import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function Project() {
  const projects = [
    {
      logo: "/hobiholidays.png",
      name: "Hobi Holidays",
      link: "hobiholidays.com",
      href: "https://hobiholidays.com",
      bg: "bg-red-100",
    },
    {
      logo: "/epictetus.png",
      name: "epictetus",
      link: "epictetusblog.vercel.app",
      href: "https://epictetusblog.vercel.app",
      bg: "bg-purple-100",
    },
    {
      logo: "/a+design.png",
      name: "a+ Design",
      link: "a-design.vercel.app",
      href: "https://a-design.vercel.app",
      bg: "bg-green-500/20",
    },
  ];
  return (
    <>
      <Head>
        <title>Kamil Muhammad | Project</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <section className="text-zinc-600 min-h-[50vh]">
          <h1 className="text-2xl mb-20">
            <span className="font-bold">My Personal</span> project.
          </h1>
          <div className="flex flex-wrap gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`flex ${project.bg} p-6 rounded-3xl w-96`}
              >
                <Image
                  className="rounded-lg"
                  src={project.logo}
                  alt={project.name}
                  width={80}
                  height={80}
                />
                <div className="pl-4 flex flex-col justify-around">
                  <p className="font-semibold text-2xl capitalize">
                    {project.name}
                  </p>
                  <a
                    target="_blank"
                    href={project.href}
                    className="underline-offset-2 underline decoration-1 font-light"
                  >
                    {project.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Project;
