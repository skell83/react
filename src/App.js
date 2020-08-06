import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

let nextId = 0; // index 고정만들기 함수 안에 넣으면 계속 동작해서 초기화됨
const App = () =>{ 
  const [todos, setTodos] = useState([]); // 배열로 초기화
  const [btnToggle, setToggle] = useState(true);
  const onInsertTodo = (text) =>{ // 매계변수로 text값 가져오기
    if(text === "") {
      return alert("할 일을 입력해주세요");
    }else{
      const todo = {   // 받아온 값을 기존에 존재하던 형태로 밀어 넣기 위해서 임시 변수를 생성
        id:nextId,
        text, //이름이 똑같아서 그냥 text로 퉁 이게 된다고?!?!?
        checked:false
      }
      setTodos(todos=> todos.concat(todo));  //push를 하면 이전 상태값이 저장이 되지 않음 concat을하면 이전 상태값이 저장이됨, TodoForm에서 받아온 text를 실제로 추가함
      nextId++; // id값 증가
    }
  }
  const toggleClick = () => {
    btnToggle ? setToggle(false) : setToggle(true);
    console.log(btnToggle);
  }
  useEffect( () => {
    console.log("디텍트");
  },[todos]) // 체크할요소
  const onCheckToggle = (id) => { // 체크박스 토글 만들기
    setTodos(todos =>  // 2. 그리고 업데이트
      todos.map (todo =>  // todos 를 다 뿌림
        todo.id === id ? {...todo, checked : !todo.checked } : todo // 1. 배열중  id가 같은 걸 찾은다음 다시 뿌려줌 
      )
    )
  }

  return ( 
    <div className="App">
      <Todo todosLength = {todos.length}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle}></TodoList> {/* 인자값 전달 */}
        <TodoForm onInsertTodo={onInsertTodo} />{/* 인자값 전달 */}
        <button className={btnToggle ? 'on' : 'off'} onClick={toggleClick}>토글 테스트</button>
      </Todo>
    </div>
  );
}

export default App;
