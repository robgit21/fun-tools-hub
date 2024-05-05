import MockingSpongebobComp from "./tool-components/mocking-spongebob/MockingSpongebobComp";
import styles from "./toolsContainer.module.css";
const ToolsContainerComp: React.FC<any> = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.box}`}>
        <MockingSpongebobComp />
      </div>

      <div className={`${styles.box}`}>
        <MockingSpongebobComp />
      </div>

      <div className={`${styles.box}`}>
        <MockingSpongebobComp />
      </div>
    </div>
  );
};
export default ToolsContainerComp;
