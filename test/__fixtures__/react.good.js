const React = require('react');

const ListItem = props => (
  <li>
    {props.item}
  </li>
);

ListItem.propTypes = {
  item: React.PropTypes.string,
};

class ShoppingList extends React.Component {
  getDefaultProps() {
    return {
      name: 'Johnathan Doe',
    };
  }

  handleClick(e) {
    this.props.onClick();
  }

  render() {
    return (
      <div className="shopping-list" onClick={this.props.onClick}>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <ListItem item="Instagram" />
          <ListItem item="WhatsApp" />
          <ListItem item="Oculus" />
        </ul>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  name: React.PropTypes.string,
  onClick: React.PropTypes.func.required,
};

module.exports = ShoppingList;