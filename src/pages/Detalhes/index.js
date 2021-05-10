import React from 'react';
import {Table} from "react-bootstrap"
import {useParams} from "react-router-dom"

//components
import Title from "../../components/Title"

//services
import {useRequisition} from "../../hooks/useRequisition"

export default function Detalhes() {
  const {usuario, name} = useParams();
  const [data] = useRequisition(`/${usuario}/repos`);

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <Title titulo={"Detalhes do Repositório do GitHub"} />
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome do Dono</th>
            <th>nome</th>
            <th>Descrição</th>
            <th>Linguagem</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(a => a.name === name).map((item, i) => (
            <tr key={item.name}>
              <td>{i}</td>
              <td>{item.owner.login}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.language}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  ) 
}

