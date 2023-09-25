import DashboardPage from "../pages/DashboardPage";
import JobsPage from "../pages/jobs";
import PlannerPage from "../pages/PlannerPage";
// import ProductionPage from "../pages/ProductionPage";
import {
  CalendarOutlined,
  CarOutlined,
  DeploymentUnitOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
  FundProjectionScreenOutlined,
  LayoutOutlined,
  NodeIndexOutlined,
  PartitionOutlined,
  SettingOutlined,
  PoweroffOutlined,
  TableOutlined,
  MacCommandOutlined,
} from "@ant-design/icons";
import ProductionPage from "../pages/production";

// Function to check if user's role(s) is present in routes
export function hasCommonElement(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false; // Return false if either input is not an array
  }

  return array1.some((element) => array2.includes(element));
}

// Function to create an react element from a string
export const createElementFromString = (elementName) => {
  const ElementComponent = {
    JobsPage: JobsPage,
    ProductionPage: ProductionPage,
    PlannerPage: PlannerPage,
    DashboardPage: DashboardPage,

    CalendarOutlined: CalendarOutlined,
    CarOutlined: CarOutlined,
    DeploymentUnitOutlined: DeploymentUnitOutlined,
    DollarCircleOutlined: DollarCircleOutlined,
    FileTextOutlined: FileTextOutlined,
    FundProjectionScreenOutlined: FundProjectionScreenOutlined,
    LayoutOutlined: LayoutOutlined,
    NodeIndexOutlined: NodeIndexOutlined,
    PartitionOutlined: PartitionOutlined,
    SettingOutlined: SettingOutlined,
    PoweroffOutlined: PoweroffOutlined,
    TableOutlined: TableOutlined,
    MacCommandOutlined: MacCommandOutlined,
    // Add more icon mappings here if needed
  }[elementName];
  if (ElementComponent) {
    return <ElementComponent />;
  } else {
    return null;
  }
};
