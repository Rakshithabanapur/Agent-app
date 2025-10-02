"use client";

import { Menubar } from "@/components/ui/menubar";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";

export const MainMenubar = () => {
  const { token, logout } = useAuth();

  return (
    <Menubar className="w-full h-16 shadow-lg rounded-b-2xl px-4 flex items-center justify-end">
      <Button onClick={logout}>Logout</Button>
    </Menubar>
  );
};
