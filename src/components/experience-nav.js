import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default () =>{
    const data = useStaticQuery(graphql`
    {
        allExperienceJson {
          edges {
            node {
              slug
              title
              description
            }
          }
        }
    }
    `)

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Mas cosas sobre mi</h2>
            <nav className="flex justify-center mt-8">
                {
                    data.allExperienceJson.edges.map ( (element, index)=> {
                        const { node } = element
                        return (
                            <article className="flex-1 bg-white shadow m-4 max-w-sm p-4">
                                <header>
                                    <p  className="font-bold leading-loose">{ node.title }</p>
                                    <div className="mt-8">
                                        <p className="font-light">{node.description}</p>
                                        <Link to={`/${node.slug}`} className="btn mt-4 inline-block">Ir</Link>
                                    </div>
                                    
                                </header>
                            </article>
                        )
                    })
                }
            </nav>
        </div>
    )
}