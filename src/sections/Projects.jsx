import { useState } from "react";
import { projects } from "../data";

const ProjectSection = () => {
  const [currentPage, setCurrentPage] = useState(1); // Start at page 1

  // Number of projects per page
  const projectsPerPage = 2;

  // Calculate the total number of pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get the current projects for the page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  // Handle going to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle going to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="projects" className="container py-28">
      <h2 className="text-center font-ChoplinBold text-4xl">Projects</h2>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {currentProjects.map((project, i) => (
          <div
            key={i}
            className="project relative h-[300px] cursor-default select-none items-center justify-center overflow-hidden rounded-md shadow-md ring-1 ring-slate-200"
          >
            <img
              src={project.image}
              className="project-image h-full object-cover object-center transition-all duration-500"
              loading="lazy"
            />
            <div className="overlay absolute inset-0 flex flex-col items-center bg-black/80 px-6 opacity-0 transition-all duration-500">
              <h3 className="mt-16 font-PoppinsBold text-2xl text-white sm:text-4xl">
                {project.title}
              </h3>
              <p className="my-3 text-center text-sm leading-tight text-white/85 sm:text-base">
                {project.desc}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-black/75 py-2">
              {/* Conditionally render Source Code button */}
              {project.codeLink && (
                <a
                  className="mr-2 inline-block cursor-pointer rounded-md bg-white px-4 py-2 font-PoppinsSemiBold uppercase xs:mr-3"
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="hidden xs:inline-block">Source</span> Code
                </a>
              )}
              {/* Conditionally render Live Website button */}
              {project.liveLink && (
                <a
                  className="bg-gradient inline-block cursor-pointer rounded-md px-4 py-2 font-PoppinsSemiBold uppercase text-white"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live <span className="hidden xs:inline-block">Website</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls mt-8 flex justify-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`mr-4 rounded-md px-4 py-2 text-white ${currentPage === 1 ? "   cursor-not-allowed bg-gray-500" : "bg-gradient bg-blue-500 hover:bg-blue-600"}`}
        >
          Previous
        </button>
        <span className="px-4 py-2 text-xl">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`ml-4 rounded-md px-4 py-2 text-white ${currentPage === totalPages ? "  cursor-not-allowed bg-gray-500" : " bg-gradient bg-blue-500 hover:bg-blue-600"}`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;
