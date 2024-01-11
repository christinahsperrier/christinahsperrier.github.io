import HeaderLink from "@/components/HeaderLink";
import Link from "next/link";

export default function PortfolioLayout({ children }){
    return <>
        <ul className="nav nav-underline" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <HeaderLink label="Writing" route="/portfolio/writing" classes="tab-item" />
            </li>
            <li className="nav-item" role="presentation">
                <HeaderLink label="Multimedia" route="/portfolio/multimedia" classes="tab-item" />
            </li>
        </ul>
        {children}
    </>
}