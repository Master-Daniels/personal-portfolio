"use client";

import React, { useState } from "react";
import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export const useActiveSection = () => {
    const context = React.useContext(ActiveSectionContext);
    if (!context) {
        throw new Error('active section context contains "null" value');
    }
    return context;
};
