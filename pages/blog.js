import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => (
  <li>
    {/*  as замінює url  */}
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title={'My blog'}>
    <ul>
      <PostLink slug="react-post" title="react"/>
      <PostLink slug="vue-post" title="vue"/>
      <PostLink slug="angular-post" title="angular"/>
    </ul>
  </Layout>
)