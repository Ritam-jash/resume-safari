import { PricingCard } from "@/components/ui/dark-gradient-pricing"

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Pricing Plans
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            tier="Free"
            price="$0/mo"
            bestFor="Best for individuals"
            CTA="Get started free"
            benefits={[
              { text: "Up to 5 projects", checked: true },
              { text: "Basic analytics", checked: true },
              { text: "24-hour support response time", checked: true },
              { text: "Team collaboration", checked: false },
              { text: "Custom domains", checked: false },
              { text: "Advanced security", checked: false },
            ]}
          />
          <PricingCard
            tier="Pro"
            price="$29/mo"
            bestFor="Perfect for small teams"
            CTA="Start free trial"
            benefits={[
              { text: "Unlimited projects", checked: true },
              { text: "Advanced analytics", checked: true },
              { text: "4-hour support response time", checked: true },
              { text: "Team collaboration", checked: true },
              { text: "Custom domains", checked: true },
              { text: "Basic security", checked: true },
            ]}
          />
          <PricingCard
            tier="Enterprise"
            price="Custom"
            bestFor="For large organizations"
            CTA="Contact sales"
            benefits={[
              { text: "Everything in Pro", checked: true },
              { text: "Custom analytics", checked: true },
              { text: "1-hour support response time", checked: true },
              { text: "Advanced collaboration", checked: true },
              { text: "Multiple custom domains", checked: true },
              { text: "Advanced security", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default PricingSection