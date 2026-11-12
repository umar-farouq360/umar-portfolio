import { TOOLKIT }  from "@/content/home";
import { Chip }     from "@/components/ui/chip";
import { Reveal, RevealStagger } from "@/components/motion/reveal";
import { Container }      from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Toolkit() {
  return (
    <section aria-labelledby="toolkit-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="toolkit-heading"
            eyebrow={TOOLKIT.eyebrow}
            title={TOOLKIT.title}
            size="sm"
          />
        </Reveal>
        <div className="mt-5 space-y-5 md:mt-4.5 lg:mt-6.5 lg:space-y-6">
          {TOOLKIT.groups.map((group) => (
            <div
              key={group.label}
              className="grid gap-2.5 border-t border-border pt-3 md:grid-cols-[8rem_1fr] md:gap-5"
            >
              <h3 className="text-micro font-medium tracking-label text-fg-subtle uppercase">
                {group.label}
              </h3>
              <RevealStagger
                as="ul"
                stagger={0.04}
                aria-label={group.label}
                className="flex flex-wrap gap-x-3 gap-y-1.5 lg:gap-4"
              >
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </RevealStagger>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
