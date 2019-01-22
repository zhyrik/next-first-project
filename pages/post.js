import Layout from '../components/Layout';
import { withRouter } from 'next/router'

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dignissimos earum et laboriosam nihil nobis praesentium provident quod! A blanditiis earum eveniet laborum minima nemo praesentium repellat ut, vel.</p>
  </Layout>
);

export default withRouter(Post);

