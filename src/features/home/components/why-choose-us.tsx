import { Section } from "@/components/section";
import { whyChooseUsData } from "@/constants";

export const WhyChooseUs = () => {
  return (
    <Section title="Why Choose Us" className="py-10">
      <ul className="mt-8 grid grid-cols-2 gap-6 xl:grid-cols-4">
        {whyChooseUsData.map(({ title, description, icon: Icon }, i) => (
          <li
            key={i}
            className="border-foreground/80 flex flex-col items-center rounded-md border-2 p-5"
          >
            <Icon className="size-10" />
            <p className="mt-2 text-center text-lg font-semibold">{title}</p>
            <p className="text-muted-foreground mt-4 text-center">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};