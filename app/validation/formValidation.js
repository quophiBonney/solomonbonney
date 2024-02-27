import * as Yup from "yup";

const FormValidation = Yup.object().shape({
  firstName: Yup.string().required(`First name is required`),
  lastName: Yup.string().required(`Last name is required`),
  email: Yup.string().required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Contact is required"),
  message: Yup.string().required("Message is required"),
});

export default FormValidation;
