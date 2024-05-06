import { StaticImageData } from "next/image";

interface IToolCardProps {
    toolName: string;
    created: string;
    updated: string;
    description: string;
    img:StaticImageData;
    alt: string;
    href: string;
}
export default IToolCardProps;
