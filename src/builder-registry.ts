import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Link/Link")),
  {
    name: "Link",
    inputs: [
      {
        name: "href",
        type: "string",
      },
      {
        name: "children",
        friendlyName: "Text",
        type: "string",
      },
    ],
  }
);
