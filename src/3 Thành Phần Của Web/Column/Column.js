import React from "react"

import './Column.scss'
import Task from "3 Thành Phần Của Web/Task/Task"
function Column()
{
    return(
        <><div className="column"> {/*cột công việc*/}
            <header>Động Não</header>
            <ul className="Task-list">
                <Task />

                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
                <li className="task-item">Thêm cái bạn muốn</li>
            </ul>
            <footer>Thêm công việc mới </footer>
        </div>
        
        <div className="column"> {/*cột công việc*/}
                <header>Động Não</header>
                <ul className="Task-list">
                    <Task />

                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                    <li className="task-item">Thêm cái bạn muốn</li>
                </ul>
                <footer>Thêm công việc mới </footer>
            </div></>

        
    )
}

export default Column