import React from 'react'

export default (props) => {
    const certificate = props.element 
    return (
        <div className="shadow p-8 bg-white mr-4 rounded">
            <h4 className="font-bold">{certificate.title}</h4>
            <p className="text-center">
                <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 rounded">Calificación: {certificate.score}</span>
            </p>
        </div>
    )
}