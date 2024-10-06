import { Slash } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function BreadcrumbWithCustomSeparator() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb", current: true },
  ];

  return <Breadcrumb items={breadcrumbItems} separator={<Slash />} />;
}
