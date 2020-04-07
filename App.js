import React, {Component} from 'react';
import ArticleData from './src/components/ArticleData';
import {POST_URL} from './src/global/constants';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  getData() {
    return fetch(POST_URL)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({data: responseJson.articles});
      })
      .catch(error => {
        console.error(error);
      });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return <ArticleData data={this.state.data} />;
  }
}
