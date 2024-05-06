import styles from "./toolsContainer.module.css";
import MockingSpongebobImg200x200 from "../../public/img/MockinSpongebob200x200.jpg";
import AvatarSpongebob from "../../public/img/Spongebobavatar.png";
import ToolCardComp from "./tool-components/tool-card-comp/ToolCardComp";

const ToolsContainerComp: React.FC<any> = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.box}`}>
        <ToolCardComp
          toolName={"Mocking Spongebob"}
          created={"12.12.2022"}
          updated={"08.05.2024"}
          description={"Eine toolbeschreibung"}
          img={AvatarSpongebob}
          alt={"Mocking Spongebob"}
          href="/mockingspongebob/page"
        />
      </div>
    </div>
  );
};
export default ToolsContainerComp;
