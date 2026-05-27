import SolutionPage from "@/components/SolutionPage";

export default function ProfessionalServicesPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <SolutionPage
      locale={locale}
      iconName="Briefcase"
      title="Professional Services"
      subtitle="Consult. Train. Deliver."
      description="Expert consulting, training, and implementation services from certified professionals. We help you get maximum value from your technology investments."
      gradient="from-primary to-accent"
      features={["Technology Consulting & Advisory","Project Management & Delivery","Staff Augmentation & Outsourcing","Vendor-Certified Training Programs","Architecture Design & Review","Technology Roadmap Planning","Post-Implementation Support","Digital Transformation Strategy"]}
      relatedVendors={["Tech Arm", "Sangfor", "LenSec"]}
    />
  );
}
