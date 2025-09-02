import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Projects from "../utils/projects.js";
import "./project.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const AllProjects = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    setProject(Projects());
  }, [Projects]);

  const navigate = useNavigate();

  return (
    <div className="allProjects  md:p-4 bg-[#030122] w-screen h-screen overflow-x-hidden box-border">
      <div className="header flex flex-row items-center gap-8">
        <div className="text-6xl">
          <IoIosArrowRoundBack
            className="rounded-full hover:text-red-200"
            onClick={() => navigate(-1)}
          />
        </div>
        <h1 className="heading font-alfaSlab text-[30px] text-white">
          Projects
        </h1>
      </div>
      <div className="content p-2 sm:p-4 lg:px-[100px] min-h-full">
        <div className="projects p-2 my-2 w-full h-full">
          <ul className="flex flex-col justify-start w-full h-full gap-4 ">
            <div className="flex flex-col justify-start items-start w-full h-full gap-4 text-[20px]">
              {projects.map((project) => (
                <div
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="project  flex flex-row gap-2 box-border cursor-pointer hover:bg-white/10 rounded-xl p-2"
                  key={project.id}
                >
                  {/* Image Section */}
                  <div className="projectImage lg:h-36 md:h-32 h-24 rounded-xl md:rounded-2xl flex items-center justify-center aspect-square md:aspect-video border border-blue-500 overflow-hidden hover:z-[10] transition-0.5s">
                    <img
                      className="object-cover bg-white w-full h-full"
                      src={project.cover}
                      alt={`${project.name} cover`}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="projectContent flex-1 box-border flex flex-col justify-between md:gap-2">
                    <div className="flex flex-col sm:gap-2">
                      <div className="projectTitle text-2xl font-bold text-[#fff] text-[1rem] md:text-2xl leading-4 line-clamp-1">
                        {project.name}
                      </div>
                      <div className="projectDescription relative text-[0.75rem] overflow-hidden text-white box-border">
                        <p className=" box-border whitespace-normal text-ellipsis line-clamp-2 text-sm">
                          <ReactMarkdown
                            // remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            className="text-base"
                            // remarkPlugins={[remarkGfm]}
                            components={{
                              // Headings with consistent size scaling
                              h1: ({ node, ...props }) => (
                                <h1
                                  className="text-sm lg:text-base"
                                  {...props}
                                />
                              ),
                              h2: ({ node, ...props }) => (
                                <h2
                                  className="text-sm lg:text-base"
                                  {...props}
                                />
                              ),
                              h3: ({ node, ...props }) => (
                                <h3
                                  className="text-sm lg:text-base"
                                  {...props}
                                />
                              ),
                              h4: ({ node, ...props }) => (
                                <h4
                                  className="text-sm lg:text-base"
                                  {...props}
                                />
                              ),

                              // Default paragraph size
                              p: ({ node, ...props }) => (
                                <p
                                  className="text-sm lg:text-base"
                                  {...props}
                                />
                              ),

                              // Lists with consistent text size
                              ul: ({ node, ...props }) => (
                                <ul className="text-base" {...props} />
                              ),
                              ol: ({ node, ...props }) => (
                                <ol className="text-base" {...props} />
                              ),
                              li: ({ node, ...props }) => (
                                <li className="text-base" {...props} />
                              ),
                              tr: ({ node, ...props }) => (
                                <tr className="text-base" {...props} />
                              ),

                              // Consistent emphasis sizing
                              strong: ({ node, ...props }) => (
                                <strong className="font-bold " {...props} />
                              ),
                              em: ({ node, ...props }) => (
                                <em
                                  className="text-base md:text-lg italic"
                                  {...props}
                                />
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
                                    <code
                                      className="text-sm md:text-base"
                                      {...props}
                                    />
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
                              br: ({ node, ...props }) => (
                                <br className="my-2" {...props} />
                              ),
                            }}
                          >
                            {project.description}
                          </ReactMarkdown>
                        </p>
                      </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="projectTech relative flex flex-row gap-2 overflow-x-auto h-6">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="tech-items pr-2 max-w-28 h-6  bg-black text-white flex items-center gap-1 justify-center border border-white overflow-hidden rounded-full flex-shrink-0"
                        >
                          <img
                            className="object-contain bg-white p-1 border-r border-blue-900 h-full"
                            src={tech.image}
                            alt={`${tech.name}`}
                          />
                          <p>{tech.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>

    // <div className="allProjects md:p-4 bg-[#030122] w-full box-border break-words">
    //   <div className="text-6xl">
    //     <IoIosArrowRoundBack
    //       className="rounded-full hover:text-red-200"
    //       onClick={() => navigate("/")}
    //     />
    //   </div>
    //   <div className="content p-[2px] sm:p-4 md:px-[100px] h-full">
    //     <div className="heading font-alfaSlab text-[30px] text-white">
    //       Projects
    //     </div>
    //     <div className="projects py-2 my-2 w-full h-full overflow-scroll">
    //       <ul className="flex flex-col justify-start w-full h-full gap-4">
    //         <div className="flex flex-col justify-start items-start w-full h-full gap-4 text-[20px]">
    //           {projects.map((project) => (
    //             <div
    //               className="project lg:h-36 md:h-32 sm:h-24 h-20 flex flex-row gap-2 box-border max-w-full"
    //               key={project.id}
    //             >
    //               {/* Image Section */}
    //               <div className="projectImage lg:h-36 md:h-32 sm:h-24 h-20 rounded-2xl flex items-center justify-center aspect-[4/3] md:aspect-video border border-blue-500 overflow-hidden">
    //                 <img
    //                   className="object-cover w-full h-full"
    //                   src={project.cover}
    //                   alt={`${project.name} cover`}
    //                 />
    //               </div>

    //               {/* Content Section */}
    //               <div className="projectContent flex-1 box-border">
    //                 <div className="projectTitle text-2xl font-bold text-[#fff] text-[1rem] md:text-[1.2rem] leading-4 line-clamp-1">
    //                   {project.name}
    //                 </div>
    //                 <div className="projectDescription relative text-[0.75rem] md:text-sm text-white box-border">
    //                   <p className="grow flex-1 break-words whitespace-normal text-ellipsis line-clamp-2">
    //                     {project.description}
    //                   </p>
    //                 </div>

    //                 {/* Technologies Section */}
    //                 {/* Technologies Section */}
    //                 <div className="projectTech relative flex flex-row gap-2 overflow-x-auto">
    //                   {project.technologies.map((tech, index) => (
    //                     <div
    //                       key={index}
    //                       className="tech-items pr-2 max-w-28 h-6 bg-black text-white flex items-center gap-1 justify-center border border-white overflow-hidden rounded-full flex-shrink-0"
    //                     >
    //                       <img
    //                         className="object-contain bg-white border-r border-blue-900 h-full"
    //                         src={tech.image}
    //                         alt={`${tech.name}`}
    //                       />
    //                       <p>{tech.name}</p>
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllProjects;
