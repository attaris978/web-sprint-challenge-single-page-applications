import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string("Please enter your name")
    .trim()
    .test("name","name must be at least 2 characters", val => val.length > 1)
    .required("Please enter your name"),
  size: Yup.string("Please select a pizza size")
    .required("Please select a pizza size"),
  mackerel: Yup.boolean(),
  peeps: Yup.boolean(),
  squirrel: Yup.boolean(),
  gumdrops: Yup.boolean(),
  special: Yup.string()
  
});

export default formSchema