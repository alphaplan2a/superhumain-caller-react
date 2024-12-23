import { Command, Zap, Shield } from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description: "Experience email at 100ms, faster than human perception.",
    icon: Zap,
  },
  {
    name: "Command Center",
    description: "Access everything instantly with powerful shortcuts.",
    icon: Command,
  },
  {
    name: "Secure by Design",
    description: "Enterprise-grade security with end-to-end encryption.",
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Faster Experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to be superhuman
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};