import React, { useState } from 'react';

const TodoInsert = ({onInsertTodo}) =>{
    const [value, setValue] = useState(""); // 상태 관리용 state

    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        onInsertTodo(value); // 값 저장용 stste  value가 단순 text이기에 app.js에 text를 전달함
        setValue("");
    }
    return(
         <div>
             <div className="write_wrap">
                 <form onSubmit={onSubmit}>
                     <input value={value} onChange={onChange} /> {/* 계속 적인 상태 업데이트 */}
                     <button type="submit">확인</button>
                 </form>
             </div>
         </div>
     );
};
export default TodoInsert;