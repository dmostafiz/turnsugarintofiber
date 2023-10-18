import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  HStack,
  Image,
  Img,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HOME } from "../constant";
import useRegister from "../Hooks/useRegister";
import { Field, Form, Formik } from "formik";

export default function CodeSection({onOpen}) {

  const { handleSubmit } = useRegister()

  return (
    <Box w="full">
      <Container maxW="1135px">
        <HStack
          gap="16"
          my="20"
          flexDir={{
            base: "column-reverse",
            md: "row",
          }}
        >
          <Box flex="1">
            <Image src={HOME.FORM.VIDEO} />
          </Box>
          <Stack flex="1" spacing={5}>
            <Text
              textStyle="h3"
              lineHeight="1.1"
              color="black"
              fontWeight="bold"
              maxW="400px"
              textAlign={{
                base: "center",
                md: "start",
              }}
            >
              {HOME.FORM.TITLE}
            </Text>


            {/* <Input name="firstName" placeholder="First Name" />
            <Input name="lastName" placeholder="Last Name" />
            <Input name="phone" placeholder="Phone Number" />
            <Input name="email" placeholder="Email Address" /> */}

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                number: "",
              }}
              onSubmit={(values) => {
                // console.log(values);
                handleSubmit(onOpen, values)
              }}
            >
              <Form>
                <Stack spacing={6} mt="4">
                  <Field name="firstName">
                    {({ field }) => (
                      <FormControl>
                        <Input isRequired {...field} placeholder="First Name" />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ field }) => (
                      <FormControl>
                        <Input isRequired {...field} placeholder="Last Name" />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="number">
                    {({ field }) => (
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Phone Number"
                          isRequired
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field }) => (
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Email Address"
                          isRequired
                        />
                      </FormControl>
                    )}
                  </Field>

                  {/* <Button
                    h="54px"
                    fontSize="15px"
                    colorScheme="orange"
                    bg="brand.500"
                    type="submit"
                  >
                    Let's Get Started
                  </Button> */}

                  <Box>
                    <Text fontSize="sm" mb="4" fontWeight="medium" color="gray">
                      Your information wil never be shared. Unsubscribe any time.
                    </Text>
                    <Button type='submit' w="full" borderRadius="md" fontSize="md">
                      GET THE CODE
                    </Button>
                  </Box>

                </Stack>
              </Form>
            </Formik>

          </Stack>
        </HStack>
      </Container>
      <Box
        bgImage={`url(/assets/bottom_image.png)`}
        w="full"
        h={{
          base: "240px",
          md: "220px",
        }}
        mb="20"
        bgPos={{
          base: "-280px",
          md: "center",
        }}
        mx="auto"
        maxW={{
          base: "full",
          md: "1135px",
        }}
        bgSize={{
          base: "cover",
          md: "contain",
        }}
      ></Box>
    </Box>
  );
}
