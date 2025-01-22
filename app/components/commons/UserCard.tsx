import React from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Plus,
  Twitter,
} from "lucide-react";
import Button from "../ui/Button";
const UserCard = () => {
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          src="/foto-ana.png"
          className="rounded-full object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            {" "}
            Ana B Sena
          </h3>
        </div>
        <p className="opacity-40">
          "Ajudo sua empresa a se destacar no mercado com um site bonito, bem
          pensado para converter."
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
            <Github />
          </button>
          <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
            <Instagram />
          </button>
          <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
            <Linkedin />
          </button>
          <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
            <Twitter />
          </button>
          <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
            <Plus />
          </button>
        </div>
      </div>
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button variant="primary" className="w-full">Template Saas - compre Agora</Button>
            <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
              <Plus />
            </button>
          </div>
        </div>
    </div>
  );
};

export default UserCard;
