import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string("Please enter your name")
    .trim()
    .required("Please enter your name"),
  size: Yup.string("Please select a pizza size")
    .required("Please select a pizza size"),
  
});

export default formSchema