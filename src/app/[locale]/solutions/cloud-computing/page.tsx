import SolutionPage from "@/components/SolutionPage";

export default function CloudComputingPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <SolutionPage
      locale={locale}
      iconName="Cloud"
      title="Cloud Computing"
      subtitle="Scale. Innovate. Transform."
      description="Scalable cloud infrastructure and migration services designed for Saudi enterprises. We help organizations transition to the cloud securely and efficiently."
      gradient="from-cyan-600 to-blue-700"
      features={["Public, Private & Hybrid Cloud Architecture","Cloud Migration Strategy & Execution","Cloud Security & Compliance","Cost Optimization & FinOps","Disaster Recovery as a Service (DRaaS)","Containerization & Kubernetes Management","Multi-Cloud Management","24/7 Cloud Monitoring & Support"]}
      relatedVendors={["Sangfor", "Vinchin", "Tech Arm"]}
    />
  );
}
