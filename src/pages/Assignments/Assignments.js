import React from "react";
import AssignmentList from "../../components/AssignmentList/AssignmentList"

/**
 * Страница "Задания".
 * @returns Возвращает html-сомпонент.
 */
function Assignments() {
    return (
        <div className='assignments'>
            <AssignmentList/>
        </div>
    );
}

export default Assignments;