import Image from "next/image";

const Section5 = ({ header, info }: { header: string; info: string }) => {
  return (
    <section
      className={`self-center grid gap-5 my-auto w-full place-items-center`}
    >
      <Image
        width={60}
        height={60}
        src="/images/icon-thank-you.svg"
        alt="Thank you"
      />
      <div className="text-center">
        <h1>{header}</h1>
        <p className="text-center text-lg max-w-lg">{info}</p>
      </div>
    </section>
  );
};
export default Section5;
