import { getProjectPreviewImages } from "@/lib/project-utils";
import { Project } from "@/types";
import Image from "next/image";

type ProjectPreviewProps = {
  project: Project;
};

const PreviewImage = ({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) => (
  <div className="overflow-hidden border border-border bg-muted">
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      priority={priority}
      sizes="(max-width: 1280px) 100vw, 1280px"
      className="h-auto w-full"
    />
  </div>
);

const ProjectPreview = ({ project }: ProjectPreviewProps) => {
  const { preview, gallery } = getProjectPreviewImages(project);

  if (!preview) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-b border-border">
      <p className="type-label text-primary mb-6">Project Preview</p>

      <PreviewImage src={preview} alt={`${project.title} preview`} priority />

      {gallery.length > 0 ? (
        <div className="mt-px grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {gallery.map((src) => (
            <PreviewImage
              key={src}
              src={src}
              alt={`${project.title} screenshot`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default ProjectPreview;
