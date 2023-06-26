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
import Sidebar from "../sidebar";

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
    console.log("submit: ");
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

  return (
    <FormProvider {...methods}>
      <div className="w-full md:flex md:bg-white max-w-[65rem] md:rounded-3xl md:p-4 md:shadow-xl md:shadow-slate-400/20">
        <Sidebar step={step} />
        <form
          className="bg-white m-5
            max-md:mb-[90px] max-md:mt-[7.5rem] max-md:shadow-xl max-md:shadow-slate-400/20
            min-h-[400px] flex flex-col
            p-6 rounded-2xl md:m-auto
            md:p-8 md:min-h-[630px]  md:justify-between 
            
          "
          onSubmit={methods.handleSubmit(onsubmit)}
        >
          {step < 5 ? (
            <section>
              <h1>{stepInfo?.[step - 1]?.header}</h1>
              <p className="text-[1.2rem] mb-6 md:mb-10">
                {stepInfo?.[step - 1]?.info}
              </p>

              {/*section 1*/}
              {step === 1 && <Section1 />}

              {/*section 2*/}
              {step === 2 && <Section2 />}

              {/*section 3*/}
              {step === 3 && <Section3 />}

              {/*section 4*/}
              {step === 4 && <Section4 setStep={setStep} />}
            </section>
          ) : (
            <Section5
              header={stepInfo?.[step - 1]?.header}
              info={stepInfo?.[step - 1]?.info}
            />
          )}

          {/*bottom section for buttons*/}
          <section
            className={`
              ${step >= 5 && "hidden"} 
              bg-white
              max-md:absolute max-md:bottom-0 max-md:left-0 
              max-md:w-screen max-md:p-4 
              flex justify-between
            `}
          >
            <button
              className={`pr-6 py-3 disabled:invisible font-medium hover:text-marine text-gray-400`}
              onClick={() => handleButton(-1)}
              disabled={step <= 1 || step >= 5}
              type="button"
            >
              Go Back
            </button>
            <button
              className={`px-6 md:px-8 py-3 rounded-md text-white 
                bg-marine ${step === 4 && "bg-indigo-600"}
                hover:opacity-95 `}
              onClick={() => handleButton(1)}
              type={step > 4 ? "submit" : "button"}
            >
              {step === 4 ? "Confirm" : "Next Step"}
            </button>
          </section>
        </form>
      </div>
    </FormProvider>
  );
};
export default MainForm;
