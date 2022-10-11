import React, { useState,useEffect } from "react"
import { isEmpty } from "lodash" // thư viện lodash npm: https://www.npmjs.com/package/lodash

import './BoardContent.scss'
import Column from "3 Thành Phần Của Web/Column/Column"
import { mapOrder } from 'utilitie/sorts' // gọi thư viện sắp xếp
import { initialData } from "Action/initialData"

function BoardContent()
{
    const [board, setboard] =useState({}) //react hook
    const [columns, setcolumns] =useState([])
// sử dụng cơ sở dữ liệu gọi bản công việc 
    useEffect
    (
      ( )=>{
        const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
        if(boardFromDB)
        {
          setboard(boardFromDB)
          //sắp xếp column từ database bằng sord (gọi mapOrder)

          setcolumns(mapOrder( boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
      },[])

    if(isEmpty(board))
      {
        return<div className="not-found" style={{'padding':'10px','color':'white'}}>board not found</div>
      }


    return(
        <div className="board-content"> {/*các công việc*/}
        {columns.map((column, index)=><Column key= {index} column={column}/>)}
        
        

      </div>
    )
}

export default BoardContent