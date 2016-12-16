const React = require('react');

const ListItem = props => {
 return <li> {props.item} </li>;
};

const ShoppingList = React.createComponent({
  render() {
    return <div className="shopping-list" onClick={this.props.onClick}>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <ListItem item="Instagram" />
          <ListItem item="WhatsApp" />
          <ListItem item="Oculus" />
        </ul>
      </div>;
  },

  handleClick(e) {
    this.props.onClick();
  },

  getDefaultProps() {
    return {
      name: 'Johnathan Doe',
    };
  },
});

module.exports = ShoppingList;