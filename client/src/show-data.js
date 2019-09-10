import React from 'react';

class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: ""
    }
    this.getData = this.getData.bind(this)
  }

  getData () {
    fetch(`/getdata`)
    .then((promise) => promise.json())
    .then((data) => {
      this.setState({ showData: data });
    });
  }

  componentDidMount () {
    this.getData()
  }

  render() {

    return (
      <div className="Data">
        <h1>Here is the latest data</h1>
        {this.state.showData}
      </div>
    )
  }
}

export default ShowData
