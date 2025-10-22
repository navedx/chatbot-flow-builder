import { useDrag } from 'react-dnd';

export default function Node({ type, icon, text, className }) {
  const [, drag] = useDrag(() => ({
    type: type, 
    item: { type },
  }));

  return (
    <div ref={drag} className={className}>
      {' '}
      {icon} {text}
    </div>
  );
}
