import { useDrag } from 'react-dnd';

export default function Node({ type, icon, text, className }) {
  const [, drag] = useDrag(() => ({
    type: type, // node type
    item: { type }, // data we pass when dragging
  }));

  return (
    <div ref={drag} className={className}>
      {' '}
      {icon} {text}
    </div>
  );
}
