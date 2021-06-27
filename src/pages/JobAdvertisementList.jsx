import React, { useState, useEffect } from 'react'
import { Table, Pagination } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';


export default function JobAdvertisementList() {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(()=>{
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
  },[]);

  return (


    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Veren</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Maaşı</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            jobAdvertisements.map(jobAdvertisement => (
              <Table.Row key={jobAdvertisement.id}>
                <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
                <Table.Cell>{jobAdvertisement.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.cityName} </Table.Cell>
                <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              </Table.Row>
            ))
          }


        </Table.Body>
      </Table>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
      />
    </div>

  )
}
