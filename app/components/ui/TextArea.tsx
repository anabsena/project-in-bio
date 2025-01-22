import { cn } from "@/app/lib/utils";
import React from "react";

const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className={cn(`w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border border-transparent hover:border-border-primary hover:text-content-body active:border-border]
   `, props.className)}
    />
  );
};

export default TextArea;
