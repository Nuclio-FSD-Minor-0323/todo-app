import './form.css'

function Form() {
    return(
        <form>
            <h2>Nueva tarea</h2>
            
            <label>Escribe la descripción de la tarea</label><br/>
            <textarea></textarea>

            <label>Fecha límite</label><br/>
            <input type="date"></input><br/>

            <button>Insertar</button>

        </form>
    )
}

export default Form