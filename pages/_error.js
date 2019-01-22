import Layout from '../components/Layout'

export default ({ statusCode }) => (
  <Layout title={'404'}>
    <p>
      {statusCode ? `Coud not load your user data: Status code ${statusCode}`: `Couldn't get that page, sorry!`}
    </p>
    <style jsx>{`
      h1, p{
        color: red;
      }
    `}</style>
  </Layout>
)