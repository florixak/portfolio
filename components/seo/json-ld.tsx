type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};
const serializeJsonLd = (data: JsonLdProps["data"]) =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
  />
);

export default JsonLd;
