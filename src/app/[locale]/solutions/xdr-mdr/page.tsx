import SolutionPage from "@/components/SolutionPage";

export default function XDRPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <SolutionPage
      locale={locale}
      iconName="Eye"
      title="XDR & MDR"
      subtitle="See Everything. Stop Anything."
      description="Extended Detection & Response and Managed Detection & Response for 24/7 threat coverage across your entire digital environment."
      gradient="from-purple-600 to-blue-800"
      features={["Cross-Layer Threat Detection & Correlation","Automated Threat Response & Remediation","24/7 SOC Monitoring & Management","Threat Hunting & Intelligence","Behavioral Analytics & ML-Powered Detection","Cloud, Endpoint & Network Telemetry","MITRE ATT&CK Framework Mapping","Incident Management & Reporting"]}
      relatedVendors={["Sangfor", "SecureMagnus", "SecureGate"]}
    />
  );
}
