import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { OrganizationSearch } from "./organization-search";

  interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
  }

  const useMyHook = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    return { members, setMembers };
  };
  
  export const ListMembers: React.FC = () => {
    const { members, setMembers } = useMyHook(); 
  
    const handleSearch = (organizationName: string) => {
      fetch(`https://api.github.com/orgs/${organizationName}/members`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error fetching members");
          }
        })
        .then(setMembers)
        .catch(() => {});
    };

  return (
    <>
      <h2>Lista de miembros: </h2>{" "}
      <div className="search">
        <OrganizationSearch onSearch={handleSearch} />
      </div>
      <div>
          <table>
            <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Id</th>
                  <th>Name</th>
                </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td><img src={member.avatar_url} className="img-tabla"/></td>  
                  <td>{ member.id }</td>
                  <td><Link to={`/detail/${member.login}`}>{member.login}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </>
  );
};