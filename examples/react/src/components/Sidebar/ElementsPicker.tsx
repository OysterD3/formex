import { INPUT_ELEMENTS } from '@formex/core';

const ElementsPicker = () => {
  return (
    <div>
      <h3>Elements</h3>
      <ul>
        {Object.values(INPUT_ELEMENTS).map((element) => (
          <li key={element.value}>{element.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElementsPicker;
