import React, { Component } from "react";
import D3Chart from "./d3BarChart";

export default class ChartWrapper extends Component {
  componentDidMount() {
    this.setState({
      chart: new D3Chart(this.refs.chart)
    });
  }
  shouldComponentUpdate() {
    return false;
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.state.chart.update(nextProps.cluster);
  }
  render() {
    return <div ref="chart" />;
  }
}