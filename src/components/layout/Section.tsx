import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
    children: ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
};

export default function Section({
    children,
    id,
    className = "",
    containerClassName = "",
}: SectionProps) {
    return (
        <section id={id} className={className}>
            <Container className={`py-[72px] md:py-24 lg:py-[120px] ${containerClassName}`}>
                {children}
            </Container>
        </section>
    );
}