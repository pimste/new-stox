"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

interface ProtectedContactProps {
  type: "email" | "phone";
  value: string;
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
}

export function ProtectedContact({
  type,
  value,
  className = "",
  iconClassName = "h-4 w-4",
  showIcon = true,
}: ProtectedContactProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Obfuscate the value (only display after hover)
  const obfuscatedValue = type === "email" 
    ? "info@*****" 
    : "046 *** ** **";
  
  const handleMouseEnter = () => {
    setIsRevealed(true);
  };
  
  const handleMouseLeave = () => {
    setIsRevealed(false);
  };
  
  const getDisplayValue = () => {
    if (isRevealed) {
      return value;
    }
    return obfuscatedValue;
  };
  
  const getHref = () => {
    if (isRevealed) {
      if (type === "email") {
        return `mailto:${value}`;
      } else {
        // Remove spaces for tel links
        return `tel:${value.replace(/\s/g, "")}`;
      }
    }
    return "#";
  };
  
  const Icon = type === "email" ? Mail : Phone;

  return (
    <a
      href={getHref()}
      className={`inline-flex items-center gap-2 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        if (!isRevealed) {
          e.preventDefault();
        }
      }}
      aria-label={type === "email" ? "Email address" : "Phone number"}
    >
      {showIcon && <Icon className={iconClassName} />}
      <span>{getDisplayValue()}</span>
    </a>
  );
} 