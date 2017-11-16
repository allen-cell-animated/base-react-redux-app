import * as React from "react";

interface MenuProps {
    userData: any;
}

const MenuBar: React.SFC<MenuProps> = (props) => {
    const users = props.userData.map((user: any) =>
        <li key={user.id}>{user.name}</li>
    );
    return (
        <ul>Hey {users}</ul>
    );
};

export default MenuBar;