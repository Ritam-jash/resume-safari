import { PricingCard } from "@/components/ui/dark-gradient-pricing"

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            tier="Starter"
            price="$0/mo"
            bestFor="Perfect for side projects"
            CTA="Start for free"
            benefits={[
              { text: "Up to 3 AI models", checked: true },
              { text: "1,000 API calls/month", checked: true },
              { text: "Basic analytics dashboard", checked: true },
              { text: "Community support", checked: true },
              { text: "Custom model training", checked: false },
              { text: "Priority support", checked: false },
            ]}
          />
          <PricingCard
            tier="Professional"
            price="$49/mo"
            bestFor="For growing businesses"
            CTA="Start free trial"
            benefits={[
              { text: "Up to 10 AI models", checked: true },
              { text: "50,000 API calls/month", checked: true },
              { text: "Advanced analytics", checked: true },
              { text: "Priority email support", checked: true },
              { text: "Custom model training", checked: true },
              { text: "API rate limit increase", checked: true },
            ]}
          />
          <PricingCard
            tier="Enterprise"
            price="Custom"
            bestFor="For large organizations"
            CTA="Contact sales"
            benefits={[
              { text: "Unlimited AI models", checked: true },
              { text: "Unlimited API calls", checked: true },
              { text: "Custom analytics", checked: true },
              { text: "24/7 dedicated support", checked: true },
              { text: "Advanced model training", checked: true },
              { text: "Custom integrations", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default PricingSection