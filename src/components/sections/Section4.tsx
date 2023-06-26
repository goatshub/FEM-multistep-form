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
    <section className={`formSection`}>
      <div className="flex justify-between items-center border-b">
        <div>
          <h3>{`${watchObj?.plan} (${price?.fullTerm})`}</h3>
          <button
            onClick={() => {
              setStep(2);
            }}
          >
            Change
          </button>
        </div>
        <h3>
          ${price?.[plan]}/{price?.shortTerm}
        </h3>
      </div>
      <div>
        {inputInfo.addOns
          .filter((item) => watchObj[item.name])
          .map((item, i) => (
            <div className="flex justify-between" key={i}>
              <p>{item.title}</p>
              <h3>
                +${price?.[item.name]}/{price?.shortTerm}
              </h3>
            </div>
          ))}
      </div>

      <p>Total (per {watchObj?.yearly ? "year" : "month"})</p>
      <h2>
        +${totalPrice}/{price?.shortTerm}
      </h2>
    </section>
  );
};
export default Section4;
