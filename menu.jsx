var Menu = React.createClass({
  getInitialState: function() {
    return {
      salads: {
        data: this.props.data.salads,
        header: this.props.data.saladHeader,
        footer: this.props.data.saladFooter
     }
    };
  },

  render: function() {
    return (
      <div className="menu">
        <header>
          <h1>{this.props.name}</h1>
        </header>
        <section id="salads">
          <Salads saladData={this.state.salads} />
        </section>
      </div>
    );
  }
});

var Salads = React.createClass({

  render: function() {
    var saladNodes = this.props.saladData.data.map( function (saladData) {
      return <Salad key={"salad" + saladData.name} name={saladData.name} ingredients={saladData.ingredients} />;
    });

    var footerItems = this.props.saladData.footer.map( function(footerItem) {
      return <p>{footerItem}</p>;
    });

    return (
      <div className="salads">
        <header>
          <h1>Salads</h1>
          <h2>{this.props.saladData.header}</h2>
        </header>
        {saladNodes}
        <footer>{footerItems}</footer>
      </div>
    );
  }

});

var Salad = React.createClass({

  render: function() {
    var ingredientItems = arrayToCsv(this.props.ingredients, true);

    return (
      <div className="salad" id={this.props.key}>
        <dl>
          <dt>{this.props.name}</dt>
          <dd>{ingredientItems}</dd>
        </dl>
      </div>
    );
  }

});
