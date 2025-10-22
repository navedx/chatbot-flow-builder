import { useSelectedNode } from '../../context/SelectedNodeContext';
import NodesPanel from './NodesPanel';
import SettingsPanel from './SettingsPanel';

export default function SidePanel() {
  const { selectedNode } = useSelectedNode();

  return selectedNode ? <SettingsPanel /> : <NodesPanel />;
}
