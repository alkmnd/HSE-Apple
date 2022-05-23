import React from "react";
import ActivityList from "../../components/ActivityList/ActivityList"
/**
 * Страница "Объявления".
 * @returns Возвращает html-сомпонент.
 */
function Activities() {
    return (
        <div className='activities'>
            <ActivityList/>
        </div>
    );
}

export default Activities;