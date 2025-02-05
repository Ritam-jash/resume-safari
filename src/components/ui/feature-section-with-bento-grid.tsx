import { cn } from "@/lib/utils"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"

export function FeaturesSectionWithBentoGrid() {
  return (
    <div className="bg-[#1A1F2C] text-foreground relative">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Resume Screening Features
          </h2>
          <p className="text-muted-foreground text-lg">
            Streamline your hiring process with our advanced AI-powered tools
          </p>
        </div>
        <BentoGrid className="mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={cn("[&>p:text-lg]", item.className)}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}

const items = [
  {
    title: "AI-Powered Screening",
    description: "Utilize advanced algorithms to screen resumes efficiently.",
    header: "Screening",
    icon: IconBoxAlignRightFilled,
    className: "bg-accent",
  },
  {
    title: "Customizable Filters",
    description: "Set your own criteria to find the best candidates.",
    header: "Filters",
    icon: IconClipboardCopy,
    className: "bg-accent",
  },
  {
    title: "Real-Time Analytics",
    description: "Get insights into your hiring process as it happens.",
    header: "Analytics",
    icon: IconFileBroken,
    className: "bg-accent",
  },
  {
    title: "Seamless Integrations",
    description: "Integrate with your existing tools and platforms effortlessly.",
    header: "Integrations",
    icon: IconSignature,
    className: "bg-accent",
  },
  {
    title: "User-Friendly Interface",
    description: "Navigate through the platform with ease.",
    header: "Interface",
    icon: IconTableColumn,
    className: "bg-accent",
  },
]