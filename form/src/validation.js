import { object, string, date, oneOf, ref } from "yup"
//import * as yup from "yup"
const registraitionValidationSchema = object().shape({
    fname: string()
        .max(15, "First name should be 15 characters or less")
        .required("This field is mandatory"),
    lname: string()
        .max(15, "Last name should be 15 characters or less")
        .required("This field is mandatory"),
    email: string().email("Invalid email").required("This field is mandatory"),
    dob: date().required("This field is mandatory"),
    pass: string()
        .min(8, "Password cannot be less than 8 characters")
        .required("This field is mandatory"),
    chk_pass: string()
        .required("Please enter confirm password.")
        .when("pass", {
            is: (value) => (value && value.length > 0 ? true : false),
            then: string().oneOf(
                [ref("pass")],
                "The new password and confirm password doesn't match."
            ),
        }),
})

export default registraitionValidationSchema
