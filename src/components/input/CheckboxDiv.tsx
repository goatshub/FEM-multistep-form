import { CheckboxType } from "@/Type";
import { priceInfo } from "@/data";
import { useFormContext, useWatch } from "react-hook-form";

const CheckboxDiv = ({ title, info, name }: CheckboxType) => {
  const { register } = useFormContext();
  const yearly = useWatch({ name: "yearly" });
  const period = yearly ? "yearly" : "monthly";
  const price = priceInfo?.[period];
  return (
    <div className="checkboxDiv">
      <label>
        <div>
          <input type="checkbox" {...register(name)} />
          <div>
            <h3>{title}</h3>
            <p>{info}</p>
          </div>
        </div>
        <p>
          +${price?.[name]}/{price?.shortTerm}
        </p>
      </label>
    </div>
  );
};
export default CheckboxDiv;
