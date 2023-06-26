import Image from "next/image";

const Section5 = ({ header, info }: { header: string; info: string }) => {
  return (
    <section className={`grid gap-5 h-full w-full place-items-center`}>
      <Image
        width={80}
        height={80}
        src="/images/icon-thank-you.svg"
        alt="Thank you"
      />
      <h1>{header}</h1>
      <p>{info}</p>
    </section>
  );
};
export default Section5;
