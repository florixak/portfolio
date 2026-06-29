import { Project } from "@/types";
import type { ReactNode } from "react";
import Stagger from "../motion/stagger";

type ProjectCaseStudyProps = {
  caseStudy?: Project["caseStudy"];
};

type CaseStudyBlockProps = {
  label: string;
  children: ReactNode;
};

const CaseStudyBlock = ({
  label,
  children,
}: CaseStudyBlockProps & { label: string }) => (
  <div className="max-w-3xl">
    <h2 className="type-label text-primary mb-4">{label}</h2>
    {children}
  </div>
);

const hasCaseStudyContent = (caseStudy?: Project["caseStudy"]) =>
  Boolean(
    caseStudy &&
    (caseStudy.motivation ||
      caseStudy.architecture.length > 0 ||
      caseStudy.challenges.length > 0 ||
      caseStudy.lessons.length > 0),
  );

const ProjectCaseStudy = ({ caseStudy }: ProjectCaseStudyProps) => {
  if (!hasCaseStudyContent(caseStudy) || !caseStudy) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
      <Stagger className="space-y-16">
        {caseStudy.motivation ? (
          <CaseStudyBlock label="Context">
            <p className="type-body">{caseStudy.motivation}</p>
          </CaseStudyBlock>
        ) : null}

        {caseStudy.architecture.length > 0 ? (
          <CaseStudyBlock label="Technical Approach">
            <ul className="space-y-2.5">
              {caseStudy.architecture.map((item) => (
                <li key={item} className="type-body">
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}

        {caseStudy.challenges.length > 0 ? (
          <CaseStudyBlock label="Challenges">
            <ul className="space-y-2.5">
              {caseStudy.challenges.map((item) => (
                <li key={item} className="type-body">
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}

        {caseStudy.lessons.length > 0 ? (
          <CaseStudyBlock label="What I Learned">
            <ul className="space-y-2.5">
              {caseStudy.lessons.map((item) => (
                <li key={item} className="type-body">
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}
      </Stagger>
    </section>
  );
};

export default ProjectCaseStudy;
