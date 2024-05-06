import { StaticImageData } from "next/image";

interface IToolCardProps {
    toolName: string;
    created: string;
    updated: string;
    description: string;
    img:StaticImageData;
    alt: string;
}
export default IToolCardProps;
