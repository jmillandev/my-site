import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Posts from './posts'
import Certificate from './certificate'
import Course from './course'

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
              certificates {
                code
                score
                title
              }
              courses {
                  title
                  progress
                  url
              }
            }
          }
    }`)
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts title="Mis certificados"  card={Certificate} data={data.codigofacilitoJson.data.certificates} />
                    <Posts title="Mis cursos"  card={Course} data={data.codigofacilitoJson.data.courses} />
                </div>
            </div>
        </section>
    )
}
