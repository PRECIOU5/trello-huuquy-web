import React from "react"

import './Column.scss'
import { mapOrder } from 'utilitie/sorts' 
import Card from "3 Thành Phần Của Web/Card/Card"

function Column(props)
{
    const {column} =  props
    const cards = mapOrder(column.cards,column.cardOrder,'id')
    return(
        <div className="column"> {/*cột công việc*/}
            <header> {column.title} </header>
            <ul className="Card-list">
                {
                    cards.map((card,index) => <Card key={index} card= {card} /> )   
                }
            </ul>
            <footer>Thêm công việc mới </footer>
        </div>
   
    )
}

export default Column