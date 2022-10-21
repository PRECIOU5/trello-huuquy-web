import React, { useCallback, useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { Dropdown, Form } from 'react-bootstrap'
import './Column.scss'
import { mapOrder } from 'Chức năng/Sắp xếp'
import Card from '3 Thành Phần Của Web/Card/Card'
import ConfirmModal from '3 Thành Phần Của Web/Bảng Thông Báo/ConfirmModal'
import { MODAL_ACTION_CONFIRM } from 'Chức năng/Gán tên'
import { saveContentAfterPressEnter, selectAllInLineText } from 'Chức năng/contentEditable'
//import { type } from '@testing-library/user-event/dist/type'

function Column(props)
{
  const { column, onCardDrop, onUpdateColumn } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')
  const [showConfirmModal, setshowConfirmModal] = useState(false)
  const ToggleshowConfirmModal = () => setshowConfirmModal(!showConfirmModal)
  const [columnTitle, setColumnTitle]= useState('')
  const handleColumnTitleChange = useCallback( (e) => setColumnTitle(e.target.value), [] )

  useEffect ( () => {
    setColumnTitle(column.title)
  }, [column.title])

  const onConfirmModalAction = (type) => {
    if (type === 'MODAL_ACTION_CONFIRM')
    {
      //xóa các công việc
      const newColumn ={
        ...column,
        _destroy: true
      }
      onUpdateColumn(newColumn)
    }
    ToggleshowConfirmModal()//khi Nhấn đóng nó ẩn thanh thông báo xóa
  }

  const handleColumnTitleBlur = () => {
    const newColumn ={
      ...column,
      title: columnTitle
    }
    onUpdateColumn(newColumn)
  }

  return (
    <div className="column"> {/*cột công việc*/}
      <header className='column-drag-handle'>
        <div className='column-title'>
          <Form.Control
            size='sm'
            type="text"
            className="huuquy-content-editable"
            value= {columnTitle}
            onChange = {handleColumnTitleChange}
            onBlur={handleColumnTitleBlur}
            onKeyDown={saveContentAfterPressEnter}
            onClick={selectAllInLineText}
            onMouseDown = {e => e.preventDefault()}
            spellCheck="false"
          //onKeyDown= {event => (event.key === 'Enter') && addNewColumn() } //sự kiện nhấn enter để thêm công việc
          />
        </div>

        <div className='column-dropdown-actions'>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" size='sm' className='dropdown-btn'/>
            <Dropdown.Menu>
              <Dropdown.Item >Thêm công việc mới</Dropdown.Item>
              <Dropdown.Item onClick={ToggleshowConfirmModal} > Xóa thẻ </Dropdown.Item>
              <Dropdown.Item >Xóa tất cả công việc</Dropdown.Item>
              <Dropdown.Item >Xóa tất cả công việc</Dropdown.Item>
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
        <div className='footer-actions'> <i className="fa fa-plus icon"></i> Thêm công việc mới </div>
      </footer>

      {/* thiết kế ẩn hiện thanh thông báo */}
      <ConfirmModal
        show= {showConfirmModal}
        onAction={onConfirmModalAction}
        title="Remove column"
        content = {`Bạn có chắc chắn muốn xóa <strong>${ column.title } </strong> <br /> Những công việc sẽ bị xóa `}
      />

    </div>
  )
}

export default Column