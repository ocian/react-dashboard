import { Link, StatusLight } from '@adobe/react-spectrum'

export default function ViewWelcome() {
  return (
    <div>
      <StatusLight variant="info">欢迎你，！</StatusLight>
      <Link>
        <a href="https://react-spectrum.adobe.com/react-spectrum/getting-started.html" target="_blank">
          Adobe react-spectrum
        </a>
      </Link>
    </div>
  )
}
