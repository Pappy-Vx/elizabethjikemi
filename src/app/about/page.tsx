import BioSection from '@/components/bio-section'
import ExpertiseSection from '@/components/expertise-section'
import AffiliationsSection from '@/components/affiliations-section'
import ClientsSection from '@/components/clients-section'
import AwardsSection from '@/components/awards-section'

export const metadata = {
  title: 'About • Anthony Wiktor Award-Winning Creative Director and Designer Who Moves Brands Forward',
  description: 'Anthony Wiktor is a Webby Award-Winning Creative Director and Designer based in Los Angeles specializing in branding, design, interactive, and advertising to help challenger brands break through the clutter and outsmart the competition.',
}

export default function About() {
  return (
    <>
      <BioSection />
      <ExpertiseSection />
      <AffiliationsSection />
      <ClientsSection />
      <AwardsSection />
    </>
  )
}
