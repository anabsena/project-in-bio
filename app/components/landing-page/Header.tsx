import React from "react";
import Button from "../ui/Button";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <img src="Logo.svg" alt="" />

        <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="primary">Minha Página</Button>
        <Button variant="ghost">Sair</Button>
      </div>
    </div>
  );
};

export default Header;
