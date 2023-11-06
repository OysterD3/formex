import { createBEM } from '../../../../utils/bem.ts';

const bem = createBEM('element-picker-element');

function ElementPickerElementBase(props: {
  icon: string;
  title: string;
  row?: false;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
}): JSX.Element;

function ElementPickerElementBase(props: {
  icon: string;
  title: string;
  description: string;
  row: true;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
}): JSX.Element;

function ElementPickerElementBase({
  icon,
  title,
  description,
  row = false,
  draggable,
  onDragStart,
}: {
  icon: string;
  title: string;
  description?: string;
  row?: boolean;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
}) {
  return (
    <li
      draggable={draggable}
      onDragStart={onDragStart}
      className={bem('container', { row })}
    >
      <div className={bem('icon-wrapper')}>
        <div className={`i-ri-${icon} h-6 w-8`}></div>
      </div>
      <div className={bem('label-wrapper')}>
        <div className={bem('title')}>{title}</div>
        {description && <div className={bem('description')}>{description}</div>}
      </div>
    </li>
  );
}

export default ElementPickerElementBase;
