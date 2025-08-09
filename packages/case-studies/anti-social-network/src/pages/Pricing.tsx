
const tiers = [
  {
    name: '5 Packages Per Month',
    id: 'tier-freemium',
    href: '#',
    priceMonthly: '$20',
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Holiday Special',
    id: 'tier-professional',
    href: '#',
    priceMonthly: '$50',
    description: 'Return as many packages around any holidays as you want!',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Unlimited, Anytime!',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$100',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-dull-secondary/40 rounded-t-xl">
          <div className="mx-auto max-w-4xl text-center py-8">
            <h2 className="text-base font-semibold leading-7 text-pop-primary">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-dull-secondary sm:text-4xl">
              Pricing plans for families of&nbsp;all&nbsp;sizes
            </p>
          </div>
        </div>

        {/* <div className="inset-0 h-28 bg-gray-100">
          <p className="mx-auto p-4 max-w-4xl text-center text-base leading-8 text-dull-secondary/80">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div> */}

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => {
            const tierClass = [
              tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
              tierIdx === 0 ? 'lg:rounded-r-none' : '',
              tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
              'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-dull-secondary/20 xl:p-10',
            ].join(' ');

            return (
              <div key={tier.id} className={tierClass}>
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={`text-lg font-semibold leading-8 ${
                        tier.mostPopular ? 'text-pop-primary' : 'text-dull-secondary'
                      }`}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular && (
                      <p className="rounded-full bg-pop-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-pop-primary">
                        Most popular
                      </p>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-dull-secondary/80">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-dull-secondary">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-dull-secondary/80">/month</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-dull-secondary/80">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        {/* <CheckIcon className="h-6 w-5 flex-none text-pop-primary" aria-hidden="true" /> */}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pop-primary ${
                    tier.mostPopular
                      ? 'bg-pop-primary text-dull-primary shadow-sm hover:bg-pop-secondary'
                      : 'text-pop-primary ring-1 ring-inset ring-pop-primary/30 hover:ring-pop-primary/60'
                  }`}
                >
                  Buy plan
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pricing;