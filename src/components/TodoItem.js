import React from "react";

const TodoItem = ({todo,onCheckToggle}) => {
    const { id, text }  = todo;
    return (
        <div className="TotoItem">
            <div className = "item">
                 <input type="checkbox" onClick={()=>{onCheckToggle(id)}} /> {/* 체크박스 상태 업데이트 */}
                <div>{text}</div>
            </div>
        </div>
    );
}

export default TodoItem;