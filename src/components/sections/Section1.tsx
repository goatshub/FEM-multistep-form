import { inputInfo } from "@/data";
import { InputDiv } from "../input/InputDiv";

const Section1 = () => {
  return (
    <section className={`formSection gap-3 md:gap-6 mb-3`}>
      {inputInfo?.personal.map((item, i) => (
        <InputDiv key={i} {...item} />
      ))}
    </section>
  );
};
export default Section1;
