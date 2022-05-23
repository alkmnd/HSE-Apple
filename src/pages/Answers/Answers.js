import React from "react";
import AnswerList from "../../components/AnswerList/AnswerList"
/**
 * Страница "Ответы".
 * @returns Возвращает html-сомпонент.
 */
function Answers() {
    return (
        <div className='answers'>
            <AnswerList/>
        </div>
    );
}

export default Answers;