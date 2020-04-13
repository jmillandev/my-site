import React, { Fragment } from 'react'
export default (props) => (
<Fragment>
    <h2 className="text-3xl font-bold text-center">{props.title}</h2>
    <div className="flex overflow-x-scroll p-3">
        {
            props.data.map(obj => (
                <props.card element={obj} />
            ))
        }
    </div>
</Fragment>
)