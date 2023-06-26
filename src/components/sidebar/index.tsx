import { stepInfo } from "@/data";
import { useMemo } from "react";

const Sidebar = ({ step }: { step: number }) => {
  /** Filter only steps with no duplicate */
  const stepsInfoFiltered = useMemo(
    () =>
      stepInfo.filter(
        (item, i, arr) =>
          arr.findIndex((item2) => item2.stepNo === item.stepNo) === i
      ),
    []
  );

  return (
    <div
      className="max-md:z-[-10]
            bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bg-sidebar-desktop.svg')]
            bg-cover
            max-md:h-52 max-md:fixed w-full 
            md:w-[19rem] md:rounded-xl
        "
    >
      <ul className="flex justify-center gap-5 md:gap-7 m-10 md:flex-col">
        {stepsInfoFiltered.map((item, i) => (
          <li key={i}>
            <div className="flex gap-5 items-center">
              <div
                className={`border rounded-full w-10 h-10 md:w-9 md:h-9
                    text-white font-semibold transition-colors
                    grid place-items-center
                    sidebarButton ${
                      stepInfo?.[step - 1]?.stepNo === item.stepNo && "active"
                    }
                `}
              >
                {item.stepNo}
              </div>
              <div className="hidden md:block">
                <p className="text-sm">STEP {item.stepNo}</p>
                <h2 className="text-white font-medium tracking-wider uppercase">
                  {item.stepTitle}
                </h2>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
