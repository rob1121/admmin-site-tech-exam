import * as yup from "yup";

const validationSchema = yup.object().shape({
  first_name: yup.string().label("Fist name").required(),
  last_name: yup.string().label("Last name").required(),
  email: yup.string().email().label("Email").required(),
});

export default validationSchema;
