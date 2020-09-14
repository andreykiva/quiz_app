import React from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends React.Component {
  state = {
    menu: false
  };
  onToggle = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  onClose = () => {
    this.setState({
      menu: false
    });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer isOpen={this.state.menu} onClose={this.onClose} />
        <MenuToggle onToggle={this.onToggle} isOpen={this.state.menu} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
