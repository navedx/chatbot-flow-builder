import '../../styles/message-node.css';
import { Handle, Position } from '@xyflow/react';
import { MessageNodeIcon, WhatsappNodeIcon } from '../ui/Icons';

export function TextNode(props) {
  return (
    <div className="message-node">
      <div className="message-node-header">
        <MessageNodeIcon />
        <p className="message-node-title">Send message</p>
        <WhatsappNodeIcon />
      </div>
      <p className="message-node-content">test message 1</p>
      <Handle type="source" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
    </div>
  );
}
