import * as React from "react";

interface MenuElement {
    id: number;
    title: string;
}

interface MenuList {
    menuList: MenuElement[];
}

const MenuBar: React.SFC<MenuList> = (props) => {
    const items = props.menuList.map((ele: MenuElement) => (
         <li key={ele.id}>{ele.title}</li>
    )

);
    return (
        <ul>{items}</ul>
    );
};

export default MenuBar;
