import { useState } from 'react';
import './CheckboxForm.css'; // Import the CSS file

function CheckboxForm() {
  const [checkedItems, setCheckedItems] = useState({}); // Checkbox items

  const handleClick = event => {
    const item = event.target.name;
    setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(checkedItems); // Do something with the checked items
  };

  return (
    <form onSubmit={handleSubmit} className="checkbox-form">
      <button
        type="button"
        name="option1"
        className={checkedItems['option1'] ? 'button-checked' : ''}
        onClick={handleClick}
      >
        Option 1
      </button>
      <button
        type="button"
        name="option2"
        className={checkedItems['option2'] ? 'button-checked' : ''}
        onClick={handleClick}
      >
        Option 2
      </button>
      <button
        type="button"
        name="option3"
        className={checkedItems['option3'] ? 'button-checked' : ''}
        onClick={handleClick}
      >
        Option 3
      </button>
      <button
        type="button"
        name="option4"
        className={checkedItems['option4'] ? 'button-checked' : ''}
        onClick={handleClick}
      >
        Option 4
      </button>
      <button
        type="button"
        name="option5"
        className={checkedItems['option5'] ? 'button-checked' : ''}
        onClick={handleClick}
      >
        Option 5
      </button>
      <button
        type="button"
        name="option6"
        className={checkedItems['option6'] ? 'button-checked' : ''}
        onClick={handleClick}
      >
        Option 6
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckboxForm;
