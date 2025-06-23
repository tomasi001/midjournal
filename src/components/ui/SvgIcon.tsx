"use client";

import React, { useEffect, useState } from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const SvgIcon = ({ name, ...props }: SvgIconProps) => {
  const [Icon, setIcon] = useState<React.FC<
    React.SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const { default: icon } = await import(`@/../public/${name}.svg`);
        setIcon(() => icon);
      } catch (err) {
        console.error(`Error loading SVG ${name}:`, err);
        // Handle the error, e.g., set a fallback icon
      }
    };
    importIcon();
  }, [name]);

  if (Icon) {
    return <Icon {...props} />;
  }

  return null; // or a loading spinner
};

export default SvgIcon;
