import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header className="relative py-4 sm:py-6" x-data="{expanded: false}">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="shrink-0">
            <span className="text-lg font-bold text-gray-900">
              Placeholder NFT 🖼
            </span>
          </div>

          <ConnectButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
