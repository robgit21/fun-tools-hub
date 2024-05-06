import styles from "./mockingSpongebobComp.module.css";
import Image from "next/image";
import MockingSpongebobImg from "../../../../public/img/MockingSpongebobImg.jpg";
import IToolCardProps from "../../../../interfaces/IToolCardProps";

const MockingSpongebobComp: React.FC<IToolCardProps> = (
  props: IToolCardProps
) => {
  return (
    <div className={`${styles.container}`}>
      <div>
        <Image
          className={`${styles.image}`}
          src={props.img}
          width={100}
          height={100}
          alt={props.alt}
        />
      </div>

      <div>
        <div>{props.toolName}</div>
        <div>{props.created}</div>
        <div>{props.updated}</div>
        <div>{props.description}</div>
      </div>
    </div>
  );
};
export default MockingSpongebobComp;
