import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { CreateTodoBtn } from '../CreateTodoBtn';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm'
import { TodoContext } from '../TodoContext';



function AppUI() {
    const {
        searchTodo,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && (<>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                </>)}
                {error && <TodosError />}
                {(!loading && searchTodo.lenght == 0) && <EmptyTodos />}
                {searchTodo.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoBtn setOpenModal={setOpenModal}/>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
};

export { AppUI };