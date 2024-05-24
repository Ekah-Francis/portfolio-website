import { Skillcard } from "../components";
import { about, skills } from "../data";
const About = () => {
  return (
    <section id="about" className="bg-slate-50 py-28 shadow-inner">
      <div className="container">
        {/* About Me */}
        <div className="mb-24">
          <h2 className="font-ChoplinBold text-4xl">About</h2>
          <p className="bar text-muted relative mt-2 text-lg">{about}</p>
        </div>
        {/* My Skills */}
        <div>
          <h2 className="text-center font-ChoplinBold text-4xl">My Toolkit</h2>
          <ul className="mt-8 grid grid-cols-2 grid-rows-2 justify-center gap-3 xs:flex xs:flex-wrap xs:gap-6">
            {skills.map((skill, index) => (
              <Skillcard skill={skill} key={index} />
            ))}
          </ul>
        </div>
        {/* Experience */}
      </div>
    </section>
  );
};

export default About;
