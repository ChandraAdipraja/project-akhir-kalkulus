"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/NavigationMenu";

import { cn } from "~/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Fungsi Trigonometri",
    href: "/",
    description: "Fungsi Berulang ulang",
  },
  {
    title: "Fungsi Eksponensial",
    href: "/",
    description: "Fungsi Eksponensial",
  },
  {
    title: "Fungsi Logaritma",
    href: "/",
    description: "Fungsi Logaritma",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="z-[5] mx-auto max-w-[200px] lg:max-w-screen-md">
      <NavigationMenuList className="max-w-full lg:max-w-screen-md">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="max-w-sm text-sm lg:max-w-md">
            <span className="m750:inline hidden">Non Transenden</span>
            <span className="m750:inline">Non Transenden</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] max-w-[300px] p-4 lg:max-w-full lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/" title="Linear">
                Sebuah Grafik Fungsi Yang Terhubung Koordinat X dan Y Dengan
                Garis Lurus Miring
              </ListItem>
              <ListItem href="/" title="Kuadrat">
                Sebuah Grafik Fungsi Yang Terhubung Koordinat X dan Y Dengan
                Garis Berbentuk Parabola
              </ListItem>
              <ListItem href="/" title="Kubik">
                Sebuah Grafik Fungsi Yang Terhubung Koordinat X dan Y Dengan
                Garis Berbentuk Kubik
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
            Transenden
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] max-w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] lg:max-w-full">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent block select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none text-text no-underline outline-none transition-colors hover:border-border dark:hover:border-darkBorder",
            className,
          )}
          {...props}
        >
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm font-base leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
