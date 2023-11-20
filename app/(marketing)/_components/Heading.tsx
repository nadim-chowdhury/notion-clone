"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Heading() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold">
        Your Ideas, Documents, & Plans Unified. Wellcome to&nbsp;
        <span className="underline text-teal-600">Notion</span>
      </h1>
      <h3 className="text-xl md:text-2xl font-medium">
        Notion is the connected workspace where <br />
        better, faster workhappens.
      </h3>
      <Button>
        Enter Notion <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}
