import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    });

    const handlechange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input type='text'placeholder='Update your task'value={input}name='text'className='todo-input edit'
        onChange={handlechange}
        ref={inputRef}
        />
        <button className='todo-button edit'>update</button>
        </>
        ) :( 
        <>
        <input type='text'placeholder='Add a task'value={input}name='text'className='todo-input'
        onChange={handlechange}
        ref={inputRef}
        />
        <button className='todo-button'>Add task</button>
        </>
        )
        }
       
    </form>
  );
}

export default TodoForm