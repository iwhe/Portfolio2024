import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import Projects from "../utils/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ProjectPage = () => {
  const { id } = useParams();
  const [projectList, setProjectList] = useState([]);
  const [project, setProject] = useState({
    id: "",
    name: "",
    description: "",
    demoVideo: "",
    links: "",
    technologies: [],
    cover: "",
  });

  useEffect(() => {
    // Fetch the project list and find the project by ID
    const loadProjects = () => {
      const projects = Projects(); // Get the projects array
      setProjectList(projects); // Set the project list
      const foundProject = projects.find((proj) => proj.id === id); // Find the project by ID
      if (foundProject) {
        setProject(foundProject);
      }
    };

    loadProjects();
    // console.log(project);
  }, [id]);

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen px-2 bg-[#030122] text-[#fff] overflow-x-hidden">
      <div className="text-6xl">
        <IoIosArrowRoundBack
          className="rounded-full hover:text-red-200"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="projectDetails p-2 flex flex-col justify-center items-center w-full">
        <div className="flex flex-row items-center justify-start gap-4 w-full">
          <div className="relative projectCoverImage bg-white/10 rounded-2xl  w-full h-[200px] overflow-hidden flex items-center justify-center">
            <img
              className="object-cover w-full h-full"
              src={project.cover}
              alt="{project.name}"
            />
            <div className="absolute inset-0 bg-black/50 z-10 w-full h-full"></div>
            <h1 className="absolute  z-50 font-alfaSlab text-[30px] capitalize w-full text-left md:px-2">
              {project.name}
            </h1>
          </div>
        </div>
        <div className="description w-full lg:w-[1080px] h-full mt-4 p-4 flex flex-col items-center justify-center gap-4">
          <div className="flex text-sm text-left w-full gap-2">
            <strong>Links:</strong>
            <div className="links flex  gap-2">
              {Array.isArray(project?.links) &&
                project.links.map((linkItem, index) => (
                  <div key={index}>
                    <a
                      href={`${linkItem.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-600 underline hover:decoration-sky-500"
                    >
                      {linkItem.name}
                    </a>
                  </div>
                ))}
            </div>
          </div>
          <div className="technologyUsed  w-full h-full flex flex-col lg:flex-row items-start justify-start md:gap-4">
            {/* <h2 className="text-2xl text-amber-400 font-bold font-fira">
              Technologies Used:{" "}
            </h2> */}
            <div className="projectTech relative flex flex-wrap flex-row gap-2 items-center justify-start">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="relative tech-items overflow-hidden pr-2 max-w-28 h-6 bg-black text-white flex flex-row gap-1 text-sm flex flex-row justify-center items-center border border-white rounded-full"
                >
                  <img
                    className="object-contain bg-white relative border-r border-blue-900 h-full flex items-center"
                    src={tech.image}
                    alt={`${tech.name}`}
                  />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="aboutProject text-justify">
            {/* <h2 className="text-2xl text-amber-400 font-bold font-fira">
              About Project
            </h2> */}
            <ReactMarkdown
              // remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              className="text-base"
              // remarkPlugins={[remarkGfm]}
              components={{
                // Headings with consistent size scaling
                h1: ({ node, ...props }) => (
                  <h1 className="text-xl font-bold my-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-xl text-amber-600 font-bold my-3"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-lg text-amber-600 font-bold my-2"
                    {...props}
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h4
                    className="text-base text-amber-600 font-bold my-2"
                    {...props}
                  />
                ),
                img: ({ node, ...props }) => (
                  <img
                    className="p-1 rounded-lg border border-gray-500"
                    {...props}
                  />
                ),

                // Default paragraph size
                p: ({ node, ...props }) => (
                  <p className="text-base  my-3 " {...props} />
                ),

                // Lists with consistent text size
                ul: ({ node, ...props }) => (
                  <ul
                    className="text-base list-disc ml-6 my-3 space-y-2"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="text-base list-decimal ml-6 my-3 space-y-2"
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-base  my-1 " {...props} />
                ),
                tr: ({ node, ...props }) => (
                  <tr
                    className="text-base  my-1 flex flex-col md:flex-row justify-between w-full md:gap-8 lg:gap-12 "
                    {...props}
                  />
                ),

                // Consistent emphasis sizing
                strong: ({ node, ...props }) => (
                  <strong className="font-bold " {...props} />
                ),
                em: ({ node, ...props }) => (
                  <em className="text-base md:text-lg italic" {...props} />
                ),

                // Code blocks with slightly smaller text
                code: ({ node, inline, ...props }) =>
                  inline ? (
                    <code
                      className="text-sm md:text-base bg-gray-100 rounded px-1 py-0.5"
                      {...props}
                    />
                  ) : (
                    <pre className="bg-gray-100 p-3 rounded my-3">
                      <code className="text-sm md:text-base" {...props} />
                    </pre>
                  ),

                // Blockquotes with consistent sizing
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="text-base md:text-lg border-l-4 border-gray-200 pl-4 my-3 italic text-gray-700"
                    {...props}
                  />
                ),

                // Other HTML elements
                br: ({ node, ...props }) => <br className="my-2" {...props} />,
              }}
            >
              {project.description}
            </ReactMarkdown>
            {/* {project.description} */}
            <pre>
              {/* Uncomment to debug raw content */}
              {/* {JSON.stringify(parsedContent, null, 2)} */}
            </pre>
          </div>

          {project?.demoVideo && (
            <div className="demoVideo flex md:flex-row flex-col gap-4 justify-start items-start md:items-center lg:items-start w-full">
              <h2 className="text-2xl text-amber-400 font-bold font-fira w-max">
                Demo Video:
              </h2>
              <div className="videoContainer mx-auto flex justify-center">
                <div className="rounded-2xl border border-gray-100 aspect-video h-36 md:h-48 overflow-hidden">
                  <video
                    src={project?.demoVideo}
                    poster={project?.cover}
                    type="video/mp4"
                    className="w-full h-full object-cover"
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
