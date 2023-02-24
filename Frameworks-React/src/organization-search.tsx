import React, { useContext } from "react";
import OrganizationNameContext from './OrganizationNameContext';

interface Props {
  onSearch: (organizationName: string) => void;
}

export const OrganizationSearch: React.FC<Props> = (props) => {
  const { onSearch } = props;
  const { nameOrg, setNameOrg } = React.useContext(OrganizationNameContext);

  React.useEffect(() => {
    onSearch(nameOrg);
  }, []);

  return (
        <>
          <span>Organization: </span>
          <input
            type="text"
            value={ nameOrg }
            onChange={(e) => setNameOrg(e.target.value)}
          />
          <button onClick={() => onSearch(nameOrg)}>Search!</button>
        </>
  );
};