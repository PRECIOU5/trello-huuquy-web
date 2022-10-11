import React from "react"

import './BoardContent.scss'
import Column from "3 Thành Phần Của Web/Column/Column"

function BoardContent()
{
    return(
        <div className="board-content"> {/*các công công việc*/}
        <Column/>
        <Column/>
        

      </div>
    )
}

export default BoardContent