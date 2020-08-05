import React from "react";

const Todo = ({children,todosLength}) => {
    return (
        <div>
            <div>오늘 할 일({todosLength})</div>
            <div>{children}</div>
        </div>
    )
}

export default Todo;