import React, { useState } from "react";

const Context = React.createContext({});

interface nameOrganization {
    nameOrg: string,
    setNameOrg: (value: string) => void;
}

export function OrganizationNameProvider({children}) {
    const [nameOrg, setNameOrg] = useState('lemoncode');

    return <Context.Provider value={{nameOrg, setNameOrg}}>
        {children}
    </Context.Provider>
}

export default Context;