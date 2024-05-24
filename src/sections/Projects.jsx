import { projects } from "../data";

const ProjectSection = () => {
  return (
    <section id="projects" className="container py-28">
      <h2 className="text-center font-ChoplinBold text-4xl">Projects</h2>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
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
              <p className="my-3  text-center text-sm leading-tight text-white/85 sm:text-base">
                {project.desc}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-black/75 py-2">
              <a
                className="mr-2 inline-block cursor-pointer rounded-md bg-white px-4 py-2 font-PoppinsSemiBold uppercase xs:mr-3"
                href={project.codeLink}
                target="_blank"
              >
                <span className="hidden xs:inline-block">Source</span> Code
              </a>
              <a
                className="bg-gradient inline-block cursor-pointer rounded-md px-4 py-2 font-PoppinsSemiBold uppercase text-white"
                href={project.liveLink}
                target="_blank"
              >
                Live <span className="hidden xs:inline-block">Website</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
