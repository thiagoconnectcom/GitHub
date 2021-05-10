import React from "react";
import {Card} from "react-bootstrap"
import {Button} from "./styles";

const Profile = ({ user }) => (
    <Card>
      <img className="card-img-top" src={user.avatar_url} alt="Profile" />
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-white">
            Repositórios:
            <span> {user.public_repos}</span>
          </li>
          <li className="list-group-item text-white">
            Seguidores:
            <span> {user.followers}</span>
          </li>
          <li className="list-group-item text-white">
            Seguindo:
            <span> {user.following}</span>
          </li>
        </ul>
        <div className="card-body">
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <Button> Ver Perfil </Button>
          </a>
        </div>
    </Card>
  );
  
  export default Profile;