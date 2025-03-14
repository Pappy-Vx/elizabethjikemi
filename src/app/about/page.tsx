import BioSection from '@/components/bio-section'
import ExpertiseSection from '@/components/expertise-section'
import AffiliationsSection from '@/components/affiliations-section'
import ClientsSection from '@/components/clients-section'
import AwardsSection from '@/components/awards-section'

export const metadata = {
  title: 'About • Elizabeth Jikemi Award-Winning Project Manager and NGO Specialist',
  description: 'Elizabeth Jikemi is a Super Award-Winning Project Manager and NGO Specialist based in Indiana specializing in branding, design, interactive, and advertising to help challenger brands break through the clutter and outsmart the competition.',
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
