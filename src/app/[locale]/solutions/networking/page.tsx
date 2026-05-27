import SolutionPage from "@/components/SolutionPage";

export default function NetworkingPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <SolutionPage
      locale={locale}
      iconName="Network"
      title="Networking"
      subtitle="Fast. Secure. Reliable."
      description="Enterprise networking solutions for secure, reliable, and high-performance connectivity. From LAN to WAN, we design and deploy networks that support your digital ambitions."
      gradient="from-blue-700 to-cyan-700"
      features={["SD-WAN & Software-Defined Networking","Enterprise Wi-Fi & Wireless Solutions","Network Security & Segmentation","Load Balancing & Traffic Optimization","Network Monitoring & Management","VPN & Secure Remote Access","Campus & Data Center Networking","Network Automation & Orchestration"]}
      relatedVendors={["Sangfor", "Sundray", "Tech Arm"]}
    />
  );
}
