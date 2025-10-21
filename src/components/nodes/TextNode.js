import '../../styles/message-node.css';
import { Handle, Position } from '@xyflow/react';
import { MessageNodeIcon, WhatsappNodeIcon } from '../ui/Icons';
import { useState } from 'react';

export function TextNode({ data }) {
  return (
    <div className="message-node">
      <div className="message-node-header">
        <MessageNodeIcon />
        <p>Send message</p>
        <WhatsappNodeIcon />
      </div>
      <p className="message-node-content">{data.value}</p>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
