import React from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import {Dropdown} from 'react-bootstrap'
import './Column.scss'
import { mapOrder } from 'Chức năng/Sắp xếp'
import Card from '3 Thành Phần Của Web/Card/Card'

function Column(props)
{
  const { column, onCardDrop } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  return (
    <div className="column"> {/*cột công việc*/}
      <header className='column-drag-handle'>
        <div className='column-title'> {column.title} </div>
        <div className='column-dropdown-actions'>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
               Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      <div className="Card-list">
        {/* Kéo thả từng công việc */}
        <Container
          groupName="col"
          orientation="vertical"
          onDrop={dropResult => onCardDrop(column.id, dropResult)}
          getChildPayload={index => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"

          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          { cards.map((card, index) =>
            (
              <Draggable key={index}>
                <Card card= {card} />
              </Draggable>
            )
          ) }

        </Container>
      </div>

      <footer>
        <div className='footer-actions'>
          <i className="fa fa-plus icon"></i> Thêm công việc mới </div>
      </footer>
    </div>
  )
}

export default Column