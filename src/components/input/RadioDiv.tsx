import { RadioType } from "@/Type";
import { priceInfo } from "@/data";
import Image from "next/image";
import { useFormContext, useWatch } from "react-hook-form";

export const RadioDiv = ({ name, title, specialOffer }: RadioType) => {
  const { register } = useFormContext();
  const yearly = useWatch({ name: "yearly" });
  const planSelected = useWatch({ name: "plan" });
  const period = yearly ? "yearly" : "monthly";
  const price = priceInfo?.[period];
  return (
    <div className={`radioDiv ${planSelected === title && "checked"}`}>
      <label>
        <div className="container">
          <input type="radio" value={name} {...register("plan")} />
          <Image
            src={`/images/icon-${name.toLowerCase()}.svg`}
            width={50}
            height={50}
            alt="plan"
          />
          <div>
            <h3>{title}</h3>
            <p>
              ${price?.[name]}/{price?.shortTerm}
            </p>
            {period === "yearly" && (
              <p className="text-marine">{specialOffer}</p>
            )}
          </div>
        </div>
      </label>
    </div>
  );
};
