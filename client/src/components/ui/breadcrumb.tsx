import React from "react";
import { Slash } from "lucide-react";
import { Link } from "react-router-dom";

export interface BreadcrumbItemType {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItemType[];
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <Slash />,
}) => {
  return (
    <nav aria-label="breadcrumb" className="pt-2 w-full z-20">
      <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="inline-flex items-center gap-1.5">
              {item.href && !item.current ? (
                <Link
                  to={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  role="link"
                  aria-disabled="true"
                  aria-current="page"
                  className="font-normal text-foreground"
                >
                  {item.label}
                </span>
              )}
            </li>
            {index < items.length - 1 && (
              <li
                role="presentation"
                aria-hidden="true"
                className="[&>svg]:size-3.5"
              >
                {separator}
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
