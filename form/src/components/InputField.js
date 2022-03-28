import { FormLabel } from "@chakra-ui/react"
import { Input, Stack } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import React from "react"
import { useFormik } from "formik"
import registraitionValidationSchema from "../validation"
import { useDispatch, useSelector } from "react-redux"
import { display } from "../features/counter/counterSlice"
import { displaySelector } from "../features/counter/counterSelector"

export const InputField = () => {
    //const display = useSelector((state) => state.display.value)
    const dispatch = useDispatch()
    const a = useSelector(displaySelector)
    const regFormSubmissionValue = useSelector(
        (state) => state?.display?.regFormSubmissionValue
    )
    console.log(regFormSubmissionValue, "Provider")
    const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
        useFormik({
            initialValues: {
                fname: "",
                lname: "",
                email: "",
                dob: "",
                pass: "",
                chk_pass: "",
            },
            validationSchema: registraitionValidationSchema,
            onSubmit: (values) => {
                console.log(values)
                dispatch(
                    display({
                        fname: values.fname,
                        lname: values.lname,
                        email: values.email,
                        dob: values.dob,
                        pass: values.pass,
                    })
                )
                alert(JSON.stringify(values, null, 2))
            },
        })

    return (
        <>
            <Container
                onSubmit={handleSubmit}
                border="2px solid gray"
                height="fit-content"
            >
                <Stack spacing={6}>
                    <Heading
                        mb={8}
                        fontWeight="extrabold"
                        bgGradient={
                            "linear(to-r, pink.500, pink.300, blue.500)"
                        }
                        bgClip="text"
                        align="center"
                    >
                        Registration Form
                    </Heading>
                </Stack>

                <FormLabel>First Name</FormLabel>
                <Stack spacing={3}>
                    <Input
                        mb={4}
                        placeholder="Enter First Name"
                        type="text"
                        name="fname"
                        size="md"
                        htmlSize={4}
                        width="auto"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.fname}
                    />
                    {touched.fname && errors.fname ? (
                        <div>{errors.fname}</div>
                    ) : null}
                </Stack>
                <FormLabel>Last Name</FormLabel>
                <Stack spacing={3}>
                    <Input
                        mb={4}
                        placeholder="Enter Last Name"
                        type="text"
                        name="lname"
                        size="md"
                        htmlSize={4}
                        width="auto"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lname}
                    />
                    {touched.lname && errors.lname ? (
                        <div>{errors.lname}</div>
                    ) : null}
                </Stack>
                <FormLabel>Email Address</FormLabel>
                <Stack spacing={3}>
                    <Input
                        mb={4}
                        placeholder="Enter your email address"
                        type="email"
                        name="email"
                        size="md"
                        htmlSize={4}
                        width="auto"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                    />
                    {touched.email && errors.email ? (
                        <div>{errors.email}</div>
                    ) : null}
                </Stack>
                <FormLabel>Date of Birth</FormLabel>
                <Stack spacing={3}>
                    <Input
                        mb={4}
                        placeholder="Enter Date of birth"
                        type="date"
                        name="dob"
                        size="md"
                        htmlSize={4}
                        width="auto"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dob}
                    />
                    {touched.dob && errors.dob ? <div>{errors.dob}</div> : null}
                </Stack>
                <FormLabel>Create your password</FormLabel>
                <Stack spacing={3}>
                    <Input
                        mb={4}
                        placeholder="Type password here"
                        type="password"
                        name="pass"
                        size="md"
                        htmlSize={4}
                        width="auto"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.pass}
                    />
                    {touched.pass && errors.pass ? (
                        <div>{errors.pass}</div>
                    ) : null}
                </Stack>
                <FormLabel>Confirm Password</FormLabel>
                <Stack spacing={3}>
                    <Input
                        mb={4}
                        placeholder="Re-type same password"
                        type="password"
                        name="chk_pass"
                        size="md"
                        htmlSize={4}
                        width="auto"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.chk_pass}
                    />
                    {touched.chk_pass && errors.chk_pass ? (
                        <div>{errors.chk_pass}</div>
                    ) : null}
                </Stack>
                <Button
                    margin="5px"
                    colorScheme="teal"
                    size="md"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Container>
            {regFormSubmissionValue?.fname && (
                <>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>First Name</Th>
                                <Th>Last Name</Th>
                                <Th>Email Address</Th>
                                <Th>Date of birth</Th>
                                <Th>Password</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{regFormSubmissionValue.fname}</Td>
                                <Td>{regFormSubmissionValue.lname}</Td>
                                <Td>{regFormSubmissionValue.email}</Td>
                                <Td>{regFormSubmissionValue.dob}</Td>
                                <Td>{regFormSubmissionValue.pass}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </>
            )}
        </>
    )
}
export default InputField
