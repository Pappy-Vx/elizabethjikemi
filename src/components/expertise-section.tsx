'use client'

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-white px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sequelWide text-6xl md:text-7xl lg:text-8xl uppercase mb-16">Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Strategy */}
          <div>
            <h3 className="font-sequelWide text-3xl uppercase mb-6">Strategy</h3>
            <p className="text-base mb-6">
              Strategy is the underlying foundation of every great brand experience. Strategy that is centered on clarifying a brand's message to inform their decisions and shape their actions.
            </p>

            <ul className="space-y-2 uppercase text-xs">
              <li>Research & Analysis</li>
              <li>Trend & Insight</li>
              <li>Customer Experience</li>
              <li>Brand Platform & Positioning</li>
              <li>Go-to-market Planning</li>
              <li>Content & Messaging</li>
            </ul>
          </div>

          {/* Design */}
          <div>
            <h3 className="font-sequelWide text-3xl uppercase mb-6">Design</h3>
            <p className="text-base mb-6">
              From voice to tone to style, every expression matters. Brand design shapes a brand experience by creating identity touchpoints from design systems to key messages.
            </p>

            <ul className="space-y-2 uppercase text-xs">
              <li>Brand Identity</li>
              <li>Visual Language</li>
              <li>Packaging Design</li>
              <li>Brand Campaign</li>
              <li>Signature Assets</li>
              <li>Brand Guidelines</li>
            </ul>
          </div>

          {/* Digital */}
          <div>
            <h3 className="font-sequelWide text-3xl uppercase mb-6">Digital</h3>
            <p className="text-base mb-6">
              Creative functionality with intuitive design makes every interaction more meaningful. Embracing digital as an extension of the physical brand has the power to elevate the experience.
            </p>

            <ul className="space-y-2 uppercase text-xs">
              <li>Front End Web Design</li>
              <li>UI Design</li>
              <li>UX Strategy</li>
              <li>App Design</li>
              <li>CMS Integrations</li>
              <li>Digital Advertising</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
