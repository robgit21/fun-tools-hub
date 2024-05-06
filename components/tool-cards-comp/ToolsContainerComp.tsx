import MockingSpongebobComp from "./tool-components/mocking-spongebob/MockingSpongebobComp";
import styles from "./toolsContainer.module.css";
import MockingSpongebobImg200x200 from "../../public/img/MockinSpongebob200x200.jpg";

const ToolsContainerComp: React.FC<any> = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.box}`}>
        <MockingSpongebobComp
          toolName={"Mocking Spongebob"}
          created={"12.12.2022"}
          updated={"08.05.2024"}
          description={"Eine toolbeschreibung"}
          img={MockingSpongebobImg200x200}
          alt={"Mocking Spongebob"}
          href="/mockingspongebob/page"
        />
      </div>
    </div>
  );
};
export default ToolsContainerComp;
