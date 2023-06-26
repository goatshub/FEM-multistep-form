import { InputType } from "@/Type";
import { useFormContext } from "react-hook-form";

export const InputDiv = ({ name, type, title, placeholder }: InputType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.[name]?.message as string | undefined;
  return (
    <div
      className={`
      group ${error && "error "} 
        flex flex-col gap-2
      `}
    >
      <div className="flex justify-between">
        <label className="font-medium">{title}</label>
        <p className="error">{error}</p>
      </div>

      <input
        className={`
          cursor-pointer text-marine font-semibold p-3 px-4 
          outline rounded-md outline-1 outline-neutral-300 
        focus:outline-indigo-800 
        group-[.error]:outline-rose-700
        `}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};
