import React from 'react';
import { graphql, Link } from 'gatsby';

export default (props) => {
    const { description, title, items, slug } = props.data.experienceJson
    return (
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-pink-500">Regresar</Link>

                    <h2 className="capitalize text-6xl font-bold">{title}</h2>
                    <p className="text-xl">{description}</p>
                </div>
            </header>
            <div className="flex  content-center justify-center">
                <ul className="flex-1 max-w-6xl">
                    {
                        items.map((item, index) => (
                            <li className="bg-white shadow mt-4 flex rounded" key={index}>
                                <p className="vertical-text bg-blue-200 text-purple-700 text-xs p-2 inline-block flex content-center justify-center">{slug}</p>
                                <div className="flex items-center flex-1 p-8">
                                    <div className="flex-1">
                                        <h3 className="text-2xl">{item.name}</h3>
                                        <span className="inline-block p-1 rounded bg-purple-100 text-purple-700 text-sm">{item.company}</span>
                                        <div className="h-10 overflow-y-hidden">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>)
}

export const query = graphql`
    query($slug : String){
        experienceJson(slug: {eq: $slug}) {
            slug
            title
            description
            items {
                name
                description
                from_data
                to_date
                company
            }
          }
    }
`