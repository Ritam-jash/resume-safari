import { cn } from "@/lib/utils"
import React from "react"

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

interface BentoGridItemProps {
  title: string
  description: string
  header: string
  icon: React.ElementType
  className?: string
}

export const BentoGrid = ({
  className,
  children,
}: BentoGridProps) => {
  return (
    <div className={cn("grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  title,
  description,
  header,
  icon: Icon,
  className,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-medium text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {header}
        </div>
        <div className="font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-2xl">
          {title}
        </div>
        <div className="font-normal text-neutral-600 dark:text-neutral-300 text-sm">
          {description}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Icon className="w-8 h-8 text-neutral-600 dark:text-neutral-200" />
      </div>
    </div>
  )
}