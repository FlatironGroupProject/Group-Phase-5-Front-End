import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from 'next/router';



const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

async function handleSignup(values) {
  const data = new FormData();
  data.append("username", values.username);
  data.append("password", values.password);
  data.append("email", values.email);

  try {
    const response = await fetch("/users", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      alert("User created successfully. You can now log in.");
    } else {
      alert("Error creating user. Please try again.");
    }
  } catch (error) {
    console.log(error);
  }
}

export default function SignUpForm() {
      const router = useRouter();
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="w-full max-w-md bg-white rounded shadow-md p-10">
          <button onClick={() => router.back()}  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 absolute top-4 left-4">
          Back
        </button>
            <h2 className="mb-5 text-2xl font-bold text-center">Sign Up</h2>
            <Formik
              initialValues={{ username: "", password: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                await handleSignup(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-6">
                    <label htmlFor="username" className="block mb-1 font-medium">
                      Username
                    </label>
                    <Field
                      type="text"
                      name="username"
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="username"
                      component="p"
                      className="mt-1 text-red-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="password" className="block mb-1 font-medium">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="mt-1 text-red-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-1 font-medium">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="mt-1 text-red-600"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 rounded-md text-white bg-blue-500 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      isSubmitting ? "cursor-wait" : "cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
            <div className="mt-5 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a
                href="/LogIn"
                   className="text-blue-500 hover:underline">Log in
                    
                    </a>
              </p>
            </div>
          </div>
        </div>
      );
      
}
