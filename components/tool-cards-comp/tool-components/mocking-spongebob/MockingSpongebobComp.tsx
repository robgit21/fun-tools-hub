import styles from "./mockingSpongebobComp.module.css";
import Image from "next/image";
import IToolCardProps from "../../../../interfaces/IToolCardProps";
import Link from "next/link";

const MockingSpongebobComp: React.FC<IToolCardProps> = (
  props: IToolCardProps
) => {
  return (
    <div className={`${styles.container}`}>
      <Link href={`${props.href}`}>
        <div>
          <Image
            className={`${styles.image}`}
            src={props.img}
            width={200}
            height={200}
            alt={props.alt}
          />
        </div>

        <div>
          <div>{props.toolName}</div>
          <div>{props.created}</div>
          <div>{props.updated}</div>
          <div>{props.description}</div>
        </div>
      </Link>
    </div>
  );
};
export default MockingSpongebobComp;
