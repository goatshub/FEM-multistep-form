import { CheckboxType } from "@/Type";
import { priceInfo } from "@/data";
import { useFormContext, useWatch } from "react-hook-form";
import Image from "next/image";

const CheckboxDiv = ({ title, info, name }: CheckboxType) => {
  const { register } = useFormContext();
  const yearly = useWatch({ name: "yearly" });
  const period = yearly ? "yearly" : "monthly";
  const price = priceInfo?.[period];
  const checked = useWatch({ name }) ? "checked" : "";
  return (
    <label
      className={`
      checkboxDiv ${checked} 
      border border-neutral-300 rounded-lg px-4 py-3.5
      flex justify-between items-center
      cursor-pointer group hover:border-indigo-600 transition-all
    `}
    >
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          className="w-[22px] h-[22px] accent-indigo-600 invisible peer"
          {...register(name)}
        />
        <div
          className={`absolute w-[22px] h-[22px] border-2 
          border-neutral-300 rounded 
           grid place-items-center  transition-all
          peer-checked:bg-indigo-600 peer-checked:border-indigo-600
          peer-checked:stroke-white group-hover:peer-checked:bg-indigo-800
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="9"
            viewBox="0 0 12 9"
          >
            <path fill="none" strokeWidth="2" d="m1 4 3.433 3.433L10.866 1" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold leading-tight">{title}</h3>
          <p className="text-sm">{info}</p>
        </div>
      </div>
      <p className="text-indigo-800">
        +${price?.[name]}/{price?.shortTerm}
      </p>
    </label>
  );
};
export default CheckboxDiv;
