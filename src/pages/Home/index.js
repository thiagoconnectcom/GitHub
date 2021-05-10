import React, {useState} from 'react';
import {Button, Row, Col, Alert} from 'react-bootstrap'
import {Search} from "./styles"

//components
import Title from "../../components/Title"
import Profile from "../../components/Profile"
import Repo from "../../components/Repositorio"

//services
import api from "../../services/api"

export default function Home() {
const [loading, setLoading] = useState(false)
const [usuario, setUsuario] = useState("");
const [error, setError] = useState("")
const [profile, setProfile] = useState({});
const [repos, setRepos] = useState([]);


const handleSearch = async () => {
  setLoading(true);
  try{
    const requestUser = await api.get(`/${usuario}`);
    const requestRepos = await api.get(`/${usuario}/repos`)

    setProfile(requestUser.data)
    setRepos(requestRepos.data)
    setError("")
    setLoading(false);
  }catch(e){
    setProfile({})
    setRepos([])
    setError(e.response.data.message)
    setLoading(false);
  }
}

  return (
    <div className="container mt-5 mb-5">
        
        <div className="text-center mb-5">
          <Title titulo={"Pesquise um Usuário do GitHub"} />
          <Search 
            type="text" 
            onChange={(e) => setUsuario(e.target.value)} 
            placeholder="Digite um usuário"  
          />
          {loading ?
            <Button variant="primary" disabled>Buscando...</Button> :
            <Button variant="primary" onClick={() => handleSearch()}>Search</Button> 
          }
        </div>  
         
        {error && <Alert variant="danger">{error}</Alert> }

        {Object.entries(profile).length > 0 && (
          <Row>
              <Col md={4}>
                  <Profile user={profile} />
              </Col>
              <Col md={8}>
                  <Repo usuario={usuario} repo={repos} />
              </Col>
            </Row>
          ) 
        }
  </div>
  )
}

