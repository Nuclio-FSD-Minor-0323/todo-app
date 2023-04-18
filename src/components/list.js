import Item from "./item"

function List() {

    const items = [
        {
            description: "Finalizar la clase de Nuclio",
            dueDate: "20ABR2023"
        },
        {
            description: "Devolver libros a la biblioteca",
            dueDate: "02MAY2023"
        },
        {
            description: "Preparar el viaje a Marte",
            dueDate: "23SET2023"
        }
    ]

    const weather = {
        temp: 19,
        forecast: "nublado"
    }

    return(
        <>
            <h2>Tareas</h2>
            {
                items.map(function(item) {
                    return (<Item 
                        description={item.description}
                        dueDate={item.dueDate}
                        />)
                })

            }
            
        </>
    )
}

export default List