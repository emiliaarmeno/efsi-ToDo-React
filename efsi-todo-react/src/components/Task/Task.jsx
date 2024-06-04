import React from "react";

export function Task({ id, tasks, setTasks, texto, fecha, tachado, fechaTachado }) {
    const tacharTask = (id) => {
        const tareaATachar = tasks.map(task =>
            task.id === id ? { ...task, tachado: !task.tachado, fechaTachado: new Date().toLocaleDateString() } : task
        );
        setTasks(tareaATachar);
    };

    return (
        <div className="tarea" key={id}>
            <p><span onClick={() => tacharTask(id)} style={{ textDecoration: tachado ? 'line-through' : 'none' }}>{texto} </span></p>
            <p>{fecha} {fechaTachado}</p>
           
        </div>
    );
}
