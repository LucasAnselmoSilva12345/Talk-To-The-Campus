import { Main } from '../../components/Main';
import { DesktopPresentation } from '../../components/DesktopPresentation';
import { DesktopApplication } from '../../components/DesktopApplication';
import { HorizontalBar } from '../../components/HorizontalBar';

export function Home() {
  return (
    <>
      <Main />
      <DesktopPresentation />
      <DesktopApplication />
      <HorizontalBar />
    </>
  );
}
