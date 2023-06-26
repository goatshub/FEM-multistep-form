// import { priceInfo } from "@/data";

import { RadioDiv } from "../input/RadioDiv";
import { inputInfo } from "@/data";
import ToggleDiv from "../input/ToggleDiv";
const Section2 = () => {
  return (
    <section className={`formSection`}>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {inputInfo?.plan?.map((item, i) => (
          <RadioDiv key={i} {...item} />
        ))}
      </ul>
      <ToggleDiv />
    </section>
  );
};
export default Section2;
