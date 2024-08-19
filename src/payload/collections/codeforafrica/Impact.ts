import image from "@/payload/fields/image";
import richText from "@/payload/fields/RichText";
import type { CollectionConfig } from "payload";

const Impact: CollectionConfig = {
  slug: "impact",
  admin: {
    defaultColumns: ["title", "value", "updatedAt"],
    enableRichTextLink: false,
    group: "Organisation",
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    richText({
      name: "description",
      required: true,
      localized: true,
    }),
    {
      name: "value",
      type: "text",
      required: true,
      localized: true,
    },
    image({
      overrides: {
        name: "icon",
        required: true,
        localized: true,
      },
    }),
  ],
};
export default Impact;