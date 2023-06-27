import { Plan, SetStep } from "@/Type";
import { inputInfo, priceInfo } from "@/data";
import { useWatch } from "react-hook-form";

const Section4 = ({ setStep }: { setStep: SetStep }) => {
  const watchObj = useWatch();
  const plan: Plan = watchObj?.plan;
  const period = watchObj?.yearly ? "yearly" : "monthly";
  const price = priceInfo?.[period];
  const totalPrice =
    price?.[plan] +
    (watchObj?.onlineAddon && price?.onlineAddon) +
    (watchObj?.profileAddon && price?.profileAddon) +
    (watchObj?.storageAddon && price?.storageAddon);
  return (
    <section className={`formSection gap-3 md:gap-4 `}>
      <section className="bg-slate-100 rounded-lg p-3 md:p-5">
        <div className="flex justify-between items-center border-b pb-2 md:pb-4">
          <div>
            <h3 className="text-marine font-semibold">{`${watchObj?.plan} (${price?.fullTerm})`}</h3>
            <button
              onClick={() => {
                setStep(2);
              }}
              className="text-gray-400 underline hover:text-indigo-600"
            >
              Change
            </button>
          </div>
          <h3 className="text-marine font-bold">
            ${price?.[plan]}/{price?.shortTerm}
          </h3>
        </div>
        <div className="flex flex-col gap-3 pt-2 md:pt-4">
          {inputInfo.addOns
            .filter((item) => watchObj[item.name])
            .map((item, i) => (
              <div className="flex justify-between" key={i}>
                <p>{item.title}</p>
                <h3 className="text-marine ">
                  +${price?.[item.name]}/{price?.shortTerm}
                </h3>
              </div>
            ))}
        </div>
      </section>

      <div className="flex justify-between items-center  p-3 md:p-5">
        <p>Total (per {watchObj?.yearly ? "year" : "month"})</p>
        <h2 className="text-lg text-indigo-600 font-bold">
          +${totalPrice}/{price?.shortTerm}
        </h2>
      </div>
    </section>
  );
};
export default Section4;
