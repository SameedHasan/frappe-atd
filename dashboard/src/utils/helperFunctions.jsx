import DashboardPage from "../pages/DashboardPage";
import JobsPage from "../pages/jobs";
// import JobsPage from "../pages/jobs";

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
import ProductionPage from "../pages/productions";
import PlannerPage from "../pages/planner";
import StowPlanPage from "../pages/stowplan";
import InventoryPage from "../pages/inventory";
import TruckingPage from "../pages/trucking";
import MooringPage from "../pages/mooring";
import ContractsPage from "../pages/contracts";
import AccountingPage from "../pages/accounting";
import SettingsPage from "../pages/settings";
import ReportsPage from "../pages/reports";

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
    StowPlanPage: StowPlanPage,

    PlannerPage: PlannerPage,
    InventoryPage: InventoryPage,
    TruckingPage: TruckingPage,
    MooringPage: MooringPage,
    ContractsPage: ContractsPage,
    AccountingPage: AccountingPage,
    ReportsPage: ReportsPage,
    SettingsPage: SettingsPage,

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
