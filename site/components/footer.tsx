import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import useFooterStyle from './footer-style';
import { darkTheme, setTheme, whiteTheme } from '../lib/nifty';

const Footer = () => {
  const { footer, title, button, simpleButton } = useFooterStyle();
  return (
    <footer onClick={() => setTheme(t => t === whiteTheme ? darkTheme : whiteTheme)} className={footer}>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className={title}>
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className={button}
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className={simpleButton}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
