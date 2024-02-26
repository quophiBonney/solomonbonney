import React from "react";
import FormValidation from "../validation/formValidation";
import { Form, ErrorMessage, Field, Formik } from "formik";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
  BsFacebook,
  BsWhatsapp,
  BsYoutube,
  BsLinkedin,
  BsTiktok,
  BsGithub,
} from "react-icons/bs";
const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const templateParams = {
        to: "Receipient Name",
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };

      const response = await emailjs.send(
        "service_2ccvxdk",
        "template_c014sdc",
        templateParams,
        "eWajEKtVogHGSP8cC"
      );
      resetForm();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="container px-3 mt-5" id="contact">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="flex-fill h-100">
            <Formik
              onSubmit={handleSubmit}
              validationSchema={FormValidation}
              initialValues={initialValues}
            >
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="name">
                    Full Name<sup className="text-danger p">*</sup>
                  </label>
                  <br />
                  <Field
                    className="form-control p-3"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="text-danger p"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">
                    Email ID<sup className="text-danger p">*</sup>
                  </label>
                  <br />
                  <Field
                    className="form-control p-3"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-danger p"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="phone">
                    Phone<sup className="text-danger p">*</sup>
                  </label>
                  <br />
                  <Field
                    className="form-control p-3"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="023XXXXXXX"
                  />
                  <ErrorMessage
                    component="div"
                    name="phone"
                    className="text-danger p"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message">
                    Message<sup className="text-danger p">*</sup>
                  </label>
                  <br />
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    placeholder="How may I help you?"
                    className="form-control"
                    rows={7}
                    cols={7}
                  />
                  <ErrorMessage
                    component="div"
                    name="message"
                    className="text-danger p"
                  />
                </div>
                <div className="form-group mb-4">
                  <Field
                    type="submit"
                    id="submit"
                    name="submit"
                    className="btn btn-light text-black px-3 p-2 text-decoration-none p"
                    value="Send Message"
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4">
          <div className="flex-fill h-100">
            <p className="p fw-bold mt-5">Contact Us</p>
            <h3 className="h-3">Get intouch for more information</h3>
            <p className="p">
              A more flexible and convenient solution to your security and
              surveillance challenges is just a step away. Get intouch with our
              security experts and let us know how we can help you
            </p>
            <div className="mt-4">
              <Link
                href="https://wwww.facebook.com"
                className="text-light text-decoration-none"
                title="facebook"
              >
                <BsFacebook size={20} className="" />
              </Link>
              <Link
                href="https://wa.me/+233596840018"
                className="text-light mx-3 text-decoration-none"
                title="whatsapp"
              >
                <BsWhatsapp size={20} className="" />
              </Link>
              <Link
                href="https://linkedin.com/in/solomon-bonney-7921"
                title="linkedin"
                className="text-light text-decoration-none"
              >
                <BsLinkedin size={20} className="" />
              </Link>
              <Link
                href="https://wwww.github.com/quophiBonney"
                className="text-light text-decoration-none mx-3"
                title="github"
              >
                <BsGithub size={20} className="" />
              </Link>
              <Link
                href="https://wwww.youtube.com/programming-with-bonney"
                className="text-light text-decoration-none"
                title="youtube"
              >
                <BsYoutube size={30} className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
