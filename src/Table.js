import React from "react"

export default function Table(){
    return(
        <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col" className=" bg-warning" >Type</th>
      <th scope="col"className=" bg-warning">Date</th>
      <th scope="col"className=" bg-warning">Decsription</th>
      <th scope="col"className=" bg-warning">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody>
  </table>
    )
}