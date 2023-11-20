import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50">
      <h2 className="text-teal-600 font-medium hidden md:block whitespace-nowrap">
        Developed by Nadim Chowdhury
      </h2>

      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="https://github.com/nadim-chowdhury">Github</Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link href="https://www.linkedin.com/in/nadim-chowdhury/">
            Linkedin
          </Link>
        </Button>
      </div>
    </div>
  );
}
