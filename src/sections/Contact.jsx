import React from "react";

const Contact = () => {
  return (
    <section className=" bg-slate-50 py-28 shadow-inner" id="contact">
      <div className="container">
        <h2 className="text-center font-ChoplinBold text-4xl">Contact Me</h2>
        <p className="my-8 break-words text-justify text-lg text-neutral-500 sm:text-center">
          If you would like to hire me or work on a project together, feel free
          to shoot me an email on <b>francisekah5@gmail.com</b> using the button
          below.
        </p>
        <a
          href="mailto:francisekah5@gmail.com"
          className="bg-gradient mx-auto block w-max rounded-md px-4 py-2 text-center font-PoppinsBold text-lg text-white shadow-sm transition-all hover:scale-110"
        >
          Send Email
        </a>
        <div className="text-muted my-4 text-center">
          <a
            href="https://github.com/Ekah-Francis"
            target="_blank"
            className="underline transition-all hover:text-black"
          >
            Github Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
