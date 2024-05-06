import styles from "./toolCardComp.module.css";
import Image from "next/image";
import IToolCardProps from "../../../../interfaces/IToolCardProps";
import Link from "next/link";

const ToolCardComp: React.FC<IToolCardProps> = (props: IToolCardProps) => {
  return (
    <div className={`${styles.container}`}>
      <Link href={`${props.href}`} className={`${styles.href}`}>
        <div className={`${styles.flexcontainer}`}>
          <div>
            <Image
              className={`${styles.image}`}
              src={props.img}
              width={100}
              height={100}
              alt={props.alt}
            />
          </div>

          <div className={`${styles.textcontainer}`}>
            <h1>{props.toolName}</h1>
            <div>Created: {props.created}</div>
            <div>Updated: {props.updated}</div>
            <div>{props.description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ToolCardComp;
