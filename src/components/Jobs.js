import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const Jobs = ({ data: { loading, error, jobname } }) => {
  if (error) return <h1>Error fetching Jobs!</h1>
  if (!loading) {
    return (
      <div>
        {jobnames.map(jobname => (
          <div className='joblist-openings' key={jobname.id}>
            <div className='Joblist-infoHeader'>
              <img
                className='joblist-img'
                alt={jobname.jobTitle}
                src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${jobname.department}`}
              />
              <h1>There is an opening in {jobname.department}</h1>
            </div>
            <p>{jobname.company}</p>
          </div>
        ))}
      </div>
    )
  }
  return <h2>Loading Job Openings...</h2>
}

export const jobnames = gql`
  query jobnames {
    jobnames {
        id
        jobTitle
        department
        company
      }
    }
`

export default graphql(jobnames)(Jobs)
