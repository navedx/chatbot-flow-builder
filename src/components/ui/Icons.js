import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

export const MessageNodeIcon = ({
  size = 10,
  color = 'black',
  className = '',
  style = {},
}) => {
  return (
    <BiMessageRoundedDetail
      size={size}
      color={color}
      className={`message-node-icon ${className}`}
      style={style}
    />
  );
};

export const WhatsappNodeIcon = ({
  size = 10,
  color = '#25D366',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={className}
      style={{ fontSize: size, color, display: 'inline-flex', ...style }}
    >
      <FaWhatsapp />
    </div>
  );
};
