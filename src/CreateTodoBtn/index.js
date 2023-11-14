import './CreateTodoBtn.css'

function CreateTodoBtn({setOpenModal}) {
    return (
        <button className='CreateTodoBtn'
        onClick={() => {
            setOpenModal(state => !state)
        }}>+</button>
    );
}

export { CreateTodoBtn }