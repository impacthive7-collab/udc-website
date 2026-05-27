import SolutionPage from "@/components/SolutionPage";

export default function IoTAIPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <SolutionPage
      locale={locale}
      iconName="Cpu"
      title="IoT & AI Solutions"
      subtitle="Connect. Automate. Intelligize."
      description="Harness the power of IoT and Artificial Intelligence to drive digital transformation and operational efficiency across your enterprise."
      gradient="from-indigo-600 to-purple-700"
      features={["IoT Device Management & Security","AI-Powered Analytics & Insights","Smart Building & Campus Solutions","Industrial IoT (IIoT) Integration","Machine Learning Model Deployment","Predictive Maintenance Solutions","Edge Computing Infrastructure","Digital Twin Technology"]}
      relatedVendors={["LenSec", "Tech Arm", "Sangfor"]}
    />
  );
}
