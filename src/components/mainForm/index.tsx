import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { stepInfo } from "@/data";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = yup
  .object({
    name: yup.string().required("Please fill the data."),
    email: yup
      .string()
      .email("Not a valid email.")
      .required("Please fill the data."),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Please fill the data."),
    plan: yup.string().required("Please fill the data."),
    yearly: yup.boolean().required("Please fill the data."),
    onlineAddon: yup.boolean().required("Please fill the data."),
    storageAddon: yup.boolean().required("Please fill the data."),
    profileAddon: yup.boolean().required("Please fill the data."),
  })
  .required();

export type FormData = yup.InferType<typeof formSchema>;

const MainForm = () => {
  const [step, setStep] = useState(1);
  // https://www.react-hook-form.com/api/useform/trigger/
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   trigger,
  //   formState: { errors, isValid },
  // } = useForm({
  const methods = useForm({
    defaultValues: {
      plan: "Arcade",
      yearly: false,
    },
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onsubmit: SubmitHandler<FormData> = (data) => {
    console.log("submit");
    console.log(JSON.stringify(data));
  };

  const handleButton = async (addStep: number) => {
    if (step === 1)
      await methods.trigger(["name", "email", "phone"], {
        shouldFocus: true,
      });
    if (Object.keys(methods.formState.errors).length === 0) {
      setStep((step) => step + addStep);
    }
  };

  // console.log(watch());
  console.log(methods.formState.errors);
  console.log(methods.formState.isValid);
  console.log(step);
  return (
    <div className="w-full">
      <div className="sideBar">
        <h2>Step {stepInfo?.[step - 1]?.stepNo}</h2>
        <h3>{stepInfo?.[step - 1]?.stepTitle}</h3>
      </div>
      <FormProvider {...methods}>
        <form className="mainFormDiv" onSubmit={methods.handleSubmit(onsubmit)}>
          {step < 5 && (
            <section className="mb-8">
              <h1>{stepInfo?.[step - 1]?.header}</h1>
              <p>{stepInfo?.[step - 1]?.info}</p>
            </section>
          )}
          {/*section 1*/}
          {step === 1 && <Section1 />}

          {/*section 2*/}
          {step === 2 && <Section2 />}

          {/*section 3*/}
          {step === 3 && <Section3 />}

          {/*section 4*/}
          {step === 4 && <Section4 setStep={setStep} />}

          {/*section 5*/}
          {step === 5 && (
            <Section5
              header={stepInfo?.[step - 1]?.header}
              info={stepInfo?.[step - 1]?.info}
            />
          )}

          {/*bottom section for buttons*/}
          <section className={`flex justify-between ${step >= 5 && "hidden"}`}>
            <button
              className={`pr-6 py-3 disabled:invisible font-medium hover:text-marine text-gray-500`}
              onClick={() => handleButton(-1)}
              disabled={step <= 1 || step >= 5}
              type="button"
            >
              Go Back
            </button>
            <button
              className={`px-6 py-3 rounded-md text-blue-50 bg-marine hover:opacity-90 `}
              onClick={() => handleButton(1)}
              type={step > 4 ? "submit" : "button"}
            >
              {step === 4 ? "Confirm" : "Next Step"}
            </button>
          </section>
        </form>
      </FormProvider>
    </div>
  );
};
export default MainForm;
