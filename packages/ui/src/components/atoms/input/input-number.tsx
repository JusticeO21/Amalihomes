import { Minus, Plus } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { InputNumberProps } from "./types";

export const InputNumber = ({ name }: InputNumberProps) => {
  const formContext = useFormContext();

  const { setValue = () => ({}), watch = (name?: string, defaultValue?: unknown) => defaultValue } = formContext ?? {};

  const value = watch(name);
  const handleIncrement = () => {
    const newValue = Number(value) + 1;
    setValue(name, newValue);
  };

  const handleDecrement = () => {
    if (Number(value) === 0) return;
    const newValue = Number(value) - 1;
    setValue(name, newValue);
  };
  return (
    <>
      <button
        type="button"
        className="w-[36px] cursor-pointer place-items-center hover:bg-Grey-fill-weaker active:bg-Grey-stroke-weak active:rounded-r-0 active:rounded-l-md h-full p-8"
        onClick={handleDecrement}
        title="Decrement"
      >
        <Minus
          size={24}
          className="text-Gray-fill-dark"
        />
      </button>
      <span className="text-black text-14 font-bold">{value as string}</span>
      <button
        type="button"
        className="w-[36px] cursor-pointer place-items-center hover:bg-Grey-fill-weaker active:bg-Grey-stroke-weak active:rounded-l-0 active:rounded-r-md h-full p-8"
        onClick={handleIncrement}
        title="Increment"
      >
        <Plus
          size={24}
          className="text-Gray-fill-dark"
        />
      </button>
    </>
  );
};
