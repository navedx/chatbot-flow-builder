import { MessageNodeIcon } from '../ui/Icons';
import Node from './Node';
import { TEXT_NODE } from '../../constants';

const nodes = [
  {
    type: TEXT_NODE,
    icon: <MessageNodeIcon size={24} color="blue" />,
    text: 'Message',
    className: 'panel--text-node',
  },
];

export default function NodesPanel() {
  return (
    <div className="panel">
      {nodes.map((node) => (
        <Node key={node.type} {...node} />
      ))}
    </div>
  );
}
