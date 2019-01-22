import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error'

export default class extends Component {
  state = {
    user: null
  };
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/zhyrik');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode }
  }

  // componentDidMount() {
  //   fetch('https://api.github.com/users/reedbarger')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         user: data
  //       })
  //     })
  // }

  render () {
    const { user, statusCode } = this.props;

    if(statusCode) {
      return <Error statusCode={statusCode}/>
    }

    return (
      <Layout title={'About'}>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="logo" />
      </Layout>
    )
  }
}
