import React from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Список", exact: true, id: 47 },
  { to: "/auth", label: "Авторизация", exact: false, id: 88 },
  { to: "/quiz-creator", label: "Создать тест", exact: false, id: 123 }
];

class Drawer extends React.Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks = () => {
    return links.map(link => (
      <li key={link.id}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          onClick={this.clickHandler}
        >
          {link.label}
        </NavLink>
      </li>
    ));
  };

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen && <Backdrop onClick={this.props.onClose} />}
      </React.Fragment>
    );
  }
}

export default Drawer;
