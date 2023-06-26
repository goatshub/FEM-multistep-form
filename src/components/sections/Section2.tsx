// import { priceInfo } from "@/data";
import { useFormContext } from "react-hook-form";
import { RadioDiv } from "../input/RadioDiv";
import { inputInfo } from "@/data";
const Section2 = () => {
  const { register } = useFormContext();
  return (
    <section className={`formSection`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {inputInfo?.plan?.map((item, i) => (
          <RadioDiv key={i} {...item} />
        ))}
      </div>
      <div className="toggleDiv">
        <span>Monthly</span>
        <input type="checkbox" {...register("yearly")} />
        <span>Yearly</span>
      </div>
    </section>
  );
};
export default Section2;
