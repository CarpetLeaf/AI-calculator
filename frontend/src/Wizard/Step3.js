import React, { useState } from "react";
import RadioButtonComponent from './RadioButtonComponent';
import './wizard.css';

export const Step3 = ({ onNext, questinonOneValue, onBack }) => {
  const [answerOneValue, setAnswerOneValue] = useState('Да');
  
  const handleSubmit = e => {
    e.preventDefault();
    onNext({ answerOneValue }); // передаем профессию вместе с другими данными
  };

  const handleRadioChange = (event) => {
    setAnswerOneValue(event.target.value);
  }

  return(
    <form onSubmit={handleSubmit}>
      <div class="widget-container">
        <p>{questinonOneValue}</p> 

        <div>
            <RadioButtonComponent 
                options={["Да", "Нет"]}
                label=""
                onChange={handleRadioChange}
            />
        </div>

        <button type="button" onClick={onBack}>Назад</button>
        <button type="submit">Далее</button>
      </div>

    </form>
  );
}