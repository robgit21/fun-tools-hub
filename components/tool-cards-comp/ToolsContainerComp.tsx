import MockingSpongebobComp from "./tool-components/mocking-spongebob/MockingSpongebobComp";
import styles from "./toolsContainer.module.css";
import MockingSpongebobImg from "../../public/img/MockingSpongebobImg.jpg";

const ToolsContainerComp: React.FC<any> = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.box}`}>
        <MockingSpongebobComp
          toolName={"Mocking Spongebob"}
          created={"12.12.2022"}
          updated={"12.12.2022"}
          description={"Eine toolbeschreibung"}
          img={MockingSpongebobImg}
          alt={"Mocking Spongebob"}
        />
      </div>
      <div className={`${styles.box}`}>
        <MockingSpongebobComp
          toolName={"Mocking Spongebob"}
          created={"12.12.2022"}
          updated={"12.12.2022"}
          description={"Eine toolbeschreibung"}
          img={MockingSpongebobImg}
          alt={"Mocking Spongebob"}
        />
      </div>
      <div className={`${styles.box}`}>
        <MockingSpongebobComp
          toolName={"Mocking Spongebob"}
          created={"12.12.2022"}
          updated={"12.12.2022"}
          description={"Eine toolbeschreibung"}
          img={MockingSpongebobImg}
          alt={"Mocking Spongebob"}
        />
      </div>
      <div className={`${styles.box}`}>
        <MockingSpongebobComp
          toolName={"Mocking Spongebob"}
          created={"12.12.2022"}
          updated={"12.12.2022"}
          description={"Eine toolbeschreibung"}
          img={MockingSpongebobImg}
          alt={"Mocking Spongebob"}
        />
      </div>{" "}
      <div className={`${styles.box}`}>
        <MockingSpongebobComp
          toolName={"Mocking Spongebob"}
          created={"12.12.2022"}
          updated={"12.12.2022"}
          description={"Eine toolbeschreibung"}
          img={MockingSpongebobImg}
          alt={"Mocking Spongebob"}
        />
      </div>{" "}
      <div className={`${styles.box}`}>
        <MockingSpongebobComp
          toolName={"Mocking Spongebob"}
          created={"12.12.2022"}
          updated={"12.12.2022"}
          description={"Eine toolbeschreibung"}
          img={MockingSpongebobImg}
          alt={"Mocking Spongebob"}
        />
      </div>
    </div>
  );
};
export default ToolsContainerComp;
