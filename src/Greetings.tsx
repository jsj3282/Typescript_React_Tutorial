import React from "react";

type GrettingsProps = {
    name: string;
};

const Grettings: React.FC<GrettingsProps> = ({name}) => {
    return <div>{name}</div>
};

export default Grettings;