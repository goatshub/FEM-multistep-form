import { useFormContext, useWatch } from "react-hook-form";

const ToggleDiv = () => {
  const { register } = useFormContext();
  const yearly = useWatch({ name: "yearly" });
  return (
    <div className="flex gap-5 p-5 items-center justify-center rounded-lg bg-gray-100">
      <p className={`font-medium ${!yearly && "text-marine"}`}>Monthly</p>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          {...register("yearly")}
        />
        <div
          className="w-11 h-6 bg-marine rounded-full 
                peer peer-focus:ring-4 peer-focus:ring-marine/30 
                peer-checked:after:translate-x-5 peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-1 after:left-1 
                after:bg-white after:border-gray-300 
                after:border after:rounded-full 
                after:h-4 after:w-4 after:transition-all"
        ></div>
      </label>
      <p className={`font-medium ${yearly && "text-marine"}`}>Yearly</p>
    </div>
  );
};
export default ToggleDiv;
