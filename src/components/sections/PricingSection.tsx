import { PricingCard } from "@/components/ui/dark-gradient-pricing"

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Choose Your Plan
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Find the perfect plan to streamline your hiring process
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            tier="Basic"
            price="$0"
            bestFor="Perfect for small businesses"
            CTA="Get Started"
            benefits={[
              { text: "10 resumes/month", checked: true },
              { text: "Basic AI screening", checked: true },
              { text: "Email support", checked: true },
              { text: "Advanced AI matching", checked: false },
              { text: "Custom filters", checked: false },
              { text: "API access", checked: false },
            ]}
          />
          <PricingCard
            tier="Pro"
            price="$49/mo"
            bestFor="For growing companies"
            CTA="Get Started"
            benefits={[
              { text: "Unlimited resumes", checked: true },
              { text: "Advanced AI matching", checked: true },
              { text: "Priority support", checked: true },
              { text: "Custom filters", checked: true },
              { text: "API access", checked: false },
              { text: "Custom integrations", checked: false },
            ]}
          />
          <PricingCard
            tier="Enterprise"
            price="Custom"
            bestFor="For large organizations"
            CTA="Contact sales"
            benefits={[
              { text: "Custom solutions", checked: true },
              { text: "Dedicated support", checked: true },
              { text: "API access", checked: true },
              { text: "Custom integrations", checked: true },
              { text: "White-label options", checked: true },
              { text: "Custom SLA", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default PricingSection