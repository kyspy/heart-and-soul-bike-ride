import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <div>Hello World</div>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
