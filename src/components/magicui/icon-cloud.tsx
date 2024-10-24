import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      paddingTop: 40,
      width: "100%",
    },
  },
  options: {
    activeCursor: "default",
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    maxSpeed: 0.04,
    minSpeed: 0.02,
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
    // dragControl: false,
  },
};

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    aProps: {
      href: undefined,
      onClick: (e) => e.preventDefault(),
      rel: undefined,
      target: undefined,
    },
    bgHex,
    fallbackHex,
    icon,
    minContrastRatio,
    size: 42,
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    // @ts-expect-error - `children` is required
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}

export const IconCloudDemo = () => {
  const iconSlugs = [
    "typescript",
    "react",
    "node-dot-js",
    "tailwindcss",
    "prisma",
    "mongodb",
    "postgresql",
    "docker",
    "express",
    "next-dot-js",
    "amazonaws",
    "vite",
    "remix",
    "astro",
  ];

  return <IconCloud iconSlugs={iconSlugs} />;
};
