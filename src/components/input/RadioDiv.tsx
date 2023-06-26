import { RadioType } from "@/Type";
import { priceInfo } from "@/data";
import Image from "next/image";
import { useFormContext, useWatch } from "react-hook-form";

export const RadioDiv = ({ name, title, specialOffer }: RadioType) => {
  const { register } = useFormContext();
  const yearly = useWatch({ name: "yearly" });
  const period = yearly ? "yearly" : "monthly";
  const price = priceInfo?.[period];
  return (
    <li>
      <input
        type="radio"
        className={`sr-only peer`}
        value={name}
        id={name}
        {...register("plan")}
      />
      <label
        className={`p-4 md:p-5 cursor-pointer border rounded-lg 
        border-neutral-300 transition-colors hover:border-indigo-800
        peer-checked:border-indigo-800 peer-checked:bg-gray-100
          flex gap-4 md:gap-11 md:flex-col items-start md:justify-between
        `}
        htmlFor={name}
      >
        <Image
          src={`/images/icon-${name.toLowerCase()}.svg`}
          width={45}
          height={45}
          alt="plan"
        />
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p>
            ${price?.[name]}/{price?.shortTerm}
          </p>
          {period === "yearly" && (
            <p className="text-marine font-medium">{specialOffer}</p>
          )}
        </div>
      </label>
    </li>
  );
};
