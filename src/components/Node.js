import { useDrag } from 'react-dnd';

export default function Node({ type, icon, text, className }) {
  const [, drag] = useDrag(() => ({
    type: type, // type identifies what kind of item it is
    item: { type }, // data we pass when dragging
  }));

  return (
    <div ref={drag} className={className}>
      {' '}
      {icon} {text}
    </div>
  );
}
