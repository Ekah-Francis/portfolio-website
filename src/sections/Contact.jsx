import { useEffect } from "react";
import Swal from "sweetalert2";
import "../CSS/Contact.css";

const ContactForm = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    // Validate form fields
    if (!name || !email || !phone || !message) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please fill out all fields",
      });
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please enter a valid email address",
      });
      return;
    }

    // Validate phone number (only digits)
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please enter a valid phone number",
      });
      return;
    }

    // Prepare email body
    const emailBody = `
      Name: ${name}<br/>
      Email: ${email}<br/>
      Phone: ${phone}<br/>
      Message: ${message}
    `;

    console.log("Sending email with body: ", emailBody);

    // Send email using SMTP.js
    window.Email.send({
      SecureToken: "cfbb28d4-dfca-4c74-baf8-3ac35a7efe92",
      To: "francisekah5@gmail.com",
      From: "francisekah5@gmail.com",
      Subject: "Contact Form Submission from my Portfolio",
      Body: emailBody,
    })
      .then((message) => {
        console.log("Email send response: ", message);
        if (message === "OK") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Message sent successfully!",
          }).then(() => {
            form.reset();
            const inputs = document.querySelectorAll(".input");
            inputs.forEach((input) => {
              const parent = input.parentNode;
              parent.classList.remove("focus");
            });
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to send message. Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again later.",
        });
      });
  };

  return (
    <div>
      <div className="container-form mb-5" id="contact">
        <span className="big-circle"></span>
        <img src="images/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Have a project in mind? Let's bring your vision to life. Contact
              me today, and let's discuss how we can work together.
            </p>
            <div className="info">
              <div className="information">
                <img src="images/location.png" className="icon first" alt="" />
                <p>Lagos, Nigeria</p>
              </div>
              <div className="information">
                <img src="images/email.png" className="icon" alt="" />
                <a href="mailto:francisekah5@gmail.com" className="text-black">
                  francisekah5@gmail.com
                </a>
              </div>
              <div className="information">
                <img src="images/phone.png" className="icon" alt="" />
                <p>
                  <a href="tel:+2349166799254" className="tel text-black">
                    +2349166799254
                  </a>
                </p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://wa.me/2349166799254?text=Hello%2C%20I%20would%20like%20to%20discuss%20website%20development%20services">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61562548103224&mibextid=LQQJ4d">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" required />
                <label>Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" required />
                <label>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" required />
                <label>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" required></textarea>
                <label>Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-28 shadow-inner">
        <div className="container">
          <h2 className="text-center font-ChoplinBold text-4xl">
            Explore GitHub
          </h2>
          <p className="my-8 break-words text-justify text-lg text-neutral-500 sm:text-center">
            I invite you to explore my GitHub repository for more insights into
            my projects and code. It's a great way to see my commitment to
            transparency and innovation. Click the button below to check it out
            and feel free to contribute or provide feedback. Your support helps
            me grow and improve. Thank you for visiting!
          </p>
          <a
            href="https://github.com/Ekah-Francis"
            target="_blank"
            rel="noreferrer"
            // className="underline transition-all hover:text-black"
            className="bg-gradient mx-auto block w-max rounded-md px-4 py-2 text-center font-PoppinsBold text-lg text-white shadow-sm transition-all hover:scale-110"
          >
            Github Profile
          </a>
          <div className="text-muted my-4 text-center"></div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
