import { inputInfo } from "@/data";
import CheckboxDiv from "../input/CheckboxDiv";
const Section3 = () => {
  return (
    <section className={`formSection gap-3`}>
      {inputInfo?.addOns.map((item, i) => (
        <CheckboxDiv key={i} {...item} />
      ))}
    </section>
  );
};
export default Section3;
