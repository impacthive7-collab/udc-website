import SolutionPage from "@/components/SolutionPage";

export default function ITOpsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <SolutionPage
      locale={locale}
      iconName="Settings"
      title="IT Operations"
      subtitle="Optimize. Automate. Excel."
      description="IT Operations management to optimize infrastructure performance, reduce downtime, and enable your IT team to focus on strategic initiatives."
      gradient="from-slate-600 to-blue-700"
      features={["IT Service Management (ITSM)","Infrastructure Monitoring & Alerting","Backup & Disaster Recovery","Patch Management & Compliance","Help Desk & Support Services","IT Asset Management","Automation & Orchestration","Performance Tuning & Optimization"]}
      relatedVendors={["Vinchin", "Tech Arm", "Sangfor"]}
    />
  );
}
