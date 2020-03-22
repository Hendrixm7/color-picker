const RangeComponent = React.createClass({
  
    getInitialState() {
      return {
        value: 50
      };
    },
    
    changeValue(e) {
      this.setState({
        value: e.currentTarget.value
      });
    },
    
    render() {
      return (
        <div>
          <input type="range" name="quantity" min="0" max="100" onInput={this.changeValue} value={this.state.value} />
          <output for="quantity">{this.state.value}</output>
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <RangeComponent />,
    document.body
  );