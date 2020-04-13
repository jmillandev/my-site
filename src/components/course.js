import React from 'react'

export default (props) => {
    const course = props.element 
    return (
        <div className="shadow bg-white mr-4 rounded flex-shrink-0" style={{ width:"275px" }}>
            <div className="p-8">
                <h4 className="font-bold h-32 overflow-y-hidden">
                    <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a>
                </h4>
                <div className="text-center">
                    <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 rounded">Progreso: {parseInt(course.progress)}%</span>
                </div>
            </div>
        </div>
    )
}