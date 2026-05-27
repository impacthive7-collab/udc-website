import SolutionPage from "@/components/SolutionPage";

export default function CybersecurityPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <SolutionPage
      locale={locale}
      iconName="Shield"
      title="Cybersecurity"
      subtitle="Protect. Detect. Respond."
      description="Comprehensive cybersecurity solutions to protect Saudi enterprises from evolving cyber threats. From endpoint protection to advanced threat intelligence, we deliver end-to-end security."
      gradient="from-blue-600 to-blue-800"
      features={["Advanced Threat Protection & Prevention","Security Information & Event Management (SIEM)","Endpoint Detection & Response (EDR)","Zero Trust Architecture Implementation","Vulnerability Assessment & Penetration Testing","Security Awareness Training","Compliance Management (NCA, SAMA, ISO 27001)","Incident Response & Forensics"]}
      relatedVendors={["Sangfor", "Zinad", "SecureMagnus", "SecureGate", "Cyphercor"]}
    />
  );
}
