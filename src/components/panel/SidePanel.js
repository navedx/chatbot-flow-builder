import { useSelectedNode } from "../../context/SelectedNodeContext"
import NodesPanel from "./NodesPanel";
import SettingsPanel from "./SettingsPanel";

export default function SidePanel() {
    const { selectedNodeId, setSelectedNodeId } = useSelectedNode();

    return (
        selectedNodeId ? <SettingsPanel /> : <NodesPanel />
    )
}