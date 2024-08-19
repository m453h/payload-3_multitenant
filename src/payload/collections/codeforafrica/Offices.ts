import { allCountries } from "@/payload/lib/data/json/countries";
import type { CollectionConfig, Option } from "payload";

const Offices: CollectionConfig = {
  slug: "offices",
  admin: {
    group: "Organisation",
    defaultColumns: ["city", "country"],
    useAsTitle: "city",
  },
  fields: [
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "point",
      label: "Location",
      required: true,
    },
    {
      name: "addressLine1",
      type: "text",
    },
    {
      name: "addressLine2",
      type: "text",
    },
    {
      name: "zipCode",
      type: "text",
    },
    {
      name: "country",
      type: "select",
      options: allCountries as Option[],
    },
  ],
};

export default Offices;