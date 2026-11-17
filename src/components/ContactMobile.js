import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./ContactMobile.css";

const ContactMobile = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trimStart(),
    });
  };

  const isFormInvalid = () => {
    return !form.from_email || !form.message;
  };

  const send = async (e) => {
    e.preventDefault();

    setIsValid(false);

    if (isFormInvalid()) {
      setIsValid(true);
      return;
    }

    try {
      emailjs.init("kJfS8RR9dekvphXCy"); 

      const response = await emailjs.send(
        "service_pwe1eny",
        "template_r7ay4xe",
        {
          from_name: form.from_name,
          to_name: "Muzammil",
          from_email: form.from_email,
          message: form.message,
        }
      );

      if (response.status === 200 && response.text === "OK") {
        Swal.fire({
          title: "Thank You",
          text: "Got your message! I'll get back to you soon.",
          icon: "success",
          confirmButtonColor: "#2778c4",
          confirmButtonText: "OK",
          customClass: {
            popup: "my-custom-swal",
            title: "my-custom-title",
          },
        });

        setForm({
          from_name: "",
          from_email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Email send failed:", error);

      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div id="contactContainer">
      <div id="mobilePhone" className="d-flex justify-content-center align-items-center">
        <form onSubmit={send}>
          <h1 className="display-6 contactTitle">Contact Me</h1>

          <div className="form-group contactInputs">
            <label>Name</label>
            <input
              type="text"
              className="form-control m-0"
              placeholder="Your good Name Please"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group contactInputs">
            <label className="star">Email</label>
            <input
              type="text"
              className={`form-control m-0 ${
                isValid && !form.from_email ? "redBorder" : ""
              }`}
              placeholder="Enter Your Email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group contactInputs">
            <label className="star">Message</label>
            <input
              type="text"
              className={`form-control m-0 ${
                isValid && !form.message ? "redBorder" : ""
              }`}
              placeholder="Type your Message here"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button className="float-end pushable me-2" type="submit">
            <span className="front">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMobile;
