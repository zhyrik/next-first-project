import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NPogress from 'nprogress';

Router.onRouteChangeStart = url => {
  console.log(url);
  NPogress.start();
};

Router.onRouteChangeComplete = () => NPogress.done();
Router.onRouteChangeError = () => NPogress.done();

export default ({ children, title }) => (
  <div className={'root'}>
    <Head>
      <title>Next Project</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
    </Head>
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/hirame"><a>Here Me</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
    </header>

    <h1>{title}</h1>
    {children}

    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header{
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        background: indigo;
      }
      header a{
        color: white;
        text-decoration: none;
      }
      footer{
        padding: 1em;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        background: #ccc;
        font: 14px menlo;
      }
    `}</style>
  </div>
)

