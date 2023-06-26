import { InputType } from "@/Type";
import { useFormContext } from "react-hook-form";

export const InputDiv = ({ name, type, title, placeholder }: InputType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.[name]?.message as string | undefined;
  return (
    <div className="inputDiv">
      <div className="labelDiv">
        <label>{title}</label>
        <p className="error">{error}</p>
      </div>

      <input
        className={`${error && "error"} `}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};
