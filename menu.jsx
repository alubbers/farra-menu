var Menu = React.createClass({
  getInitialState: function() {
    return {
      salads: this.props.data.salads
    };
  },

  render: function() {
    return (
      <div className="menu">
        <h1>{this.props.name}</h1>
        <Salads items={this.state.salads} />
      </div>
    );
  }
});

var Salads = React.createClass({

  render: function() {
    var saladNodes = this.props.items.map( function (saladData) {
      return <Salad key={"salad" + saladData.name} name={saladData.name} ingredients={saladData.ingredients} />;
    });

    return <div className="salads">{saladNodes}</div>;
  }

});

var Salad = React.createClass({

  render: function() {
    var ingredientItems = this.props.ingredients.map( function(ingredient) {
      return <li key={"ingredient" + ingredient} className="ingredient">{ingredient}</li>;
    });

    return (
      <div className="salad" id={this.props.key}>
        <div className="saladName">{this.props.name}
          <ul>
            {ingredientItems}
          </ul>
        </div>
      </div>
    );
  }

});
