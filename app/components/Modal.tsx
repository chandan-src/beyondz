import React, { useState } from "react";
import { X, ArrowRight, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";

interface MenuData {
    title: string;
    subitems?: string[];
}

const menuItems: MenuData[] = [
    {
        title: "About Us",
        subitems: [],
    },
    {
        title: "Digital Transformation",
        subitems: [
            "Targeted AI Solutions",
            "AI Factory Implementation",
            "AI Enabled App Development",
        ],
    },
    {
        title: "Consulting",
        subitems: [
            "Machine/Predictive AI",
            "Data Warehousing",
            "Business Intelligence Consulting",
            "AI First Transformation Consulting",
        ],
    },
    {
        title: "Case Study",
        subitems: [],
    },
    {
        title: "Training",
        subitems: [
            "Employee AI Orientation",
            "Harnessing AI Tools",
            "AI First Deployment for Top Management",
            "Ethics in AI",
        ],
    },
];

// MenuButton component
interface MenuButtonProps {
    onClick: () => void;
    className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "bg-cyan-400 text-black px-6 py-3 flex items-center justify-between w-full",
                className
            )}
        >
            <span className="font-bold text-sm">CONTACT</span>
            <div className="flex items-center">
                <span className="font-bold text-sm">LET'S TALK</span>
                <ArrowRight className="ml-2" size={20} />
            </div>
        </button>
    );
};

// MenuSubItem component
interface MenuSubItemProps {
    title: string;
    className?: string;
    onClick?: () => void;
}

const MenuSubItem: React.FC<MenuSubItemProps> = ({
    title,
    className,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "py-2 text-white hover:text-cyan-400 cursor-pointer transition-colors",
                className
            )}
        >
            {title}
        </div>
    );
};

// MenuItem component
interface MenuItemProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
    expanded?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
    title,
    children,
    className,
    expanded = false,
}) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={cn("border-t border-gray-700", className)}>
            <div
                onClick={toggleExpand}
                className="flex items-center justify-between py-3 px-4 cursor-pointer"
            >
                <span className="text-sm text-cyan-400">{title}</span>
                {children ? (
                    isExpanded ? (
                        <Minus size={16} className="text-gray-400" />
                    ) : (
                        <Plus size={16} className="text-gray-400" />
                    )
                ) : null}
            </div>
            {children && isExpanded && (
                <div className="px-4 pb-3 text-white text-sm">{children}</div>
            )}
        </div>
    );
};

// Main PopupMenu component
interface PopupMenuProps {
    trigger?: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    open?: boolean;
}

const PopupMenu: React.FC<PopupMenuProps> = ({ trigger, onOpenChange, open }) => {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {trigger || (
                    <div className="max-w-xs">
                        <MenuButton onClick={() => { }} />
                    </div>
                )}
            </DialogTrigger>
            <DialogContent className="p-0 max-w-xs bg-[#111827] text-white border-none rounded-none h-[90vh] overflow-hidden flex flex-col">
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <div className="flex items-center">
                        <img
                            src="images/3d.png"
                            alt="Logo"
                            className="h-8 w-8"
                        />
                    </div>
                  
                </div>

                <div className="overflow-y-auto flex-grow">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            title={item.title}
                            expanded={expanded === index}
                            className={index === 0 ? "border-t-0" : ""}
                        >
                            {item.subitems && item.subitems.length > 0 && (
                                <div className="space-y-1">
                                    {item.subitems.map((subitem, subIndex) => (
                                        <MenuSubItem key={subIndex} title={subitem} />
                                    ))}
                                </div>
                            )}
                        </MenuItem>
                    ))}
                </div>

                <div className="mt-auto">
                    <button className="bg-cyan-400 text-black py-3 px-6 w-full flex justify-between items-center">
                        <span className="font-bold text-sm">CONTACT</span>
                        <div className="flex items-center">
                            <span className="font-bold text-sm">LET'S TALK</span>
                            <ArrowRight className="ml-2" size={20} />
                        </div>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PopupMenu;
