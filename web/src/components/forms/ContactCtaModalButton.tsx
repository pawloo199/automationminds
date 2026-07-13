"use client";

import { ContactModal } from "@/components/forms/ContactModal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function ContactCtaModalButton({
  label,
  sourcePage = "/",
  services = [],
  className,
}: {
  label: string;
  sourcePage?: string;
  services?: { id: string; menuLabel: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {label}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </Button>
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        sourcePage={sourcePage}
        services={services}
      />
    </>
  );
}

