import React from "react";
import '../style/Avatar.css';



interface AvatarProfileProps{
    name: string;
    src:string;
    alt:string;
    className?:string;

    }

const AvatarProfile:React.FC<AvatarProfileProps> = ({name,src,alt,className}) => {
    return (
        <div className={className}>
        <img src = {src} alt ={alt} className="avatar-image"/>
        <h3>{name}</h3>
        </div>
);
};

export default AvatarProfile;