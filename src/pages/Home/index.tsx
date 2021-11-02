import { Main } from '../../components/Main';
import { DesktopPresentation } from '../../components/DesktopPresentation';
import { DesktopApplication } from '../../components/DesktopApplication';
import { DesktopRooms } from '../../components/DesktopRooms';
import { HorizontalBar } from '../../components/HorizontalBar';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <>
      <Main />
      <DesktopPresentation />
      <DesktopApplication />
      <DesktopRooms />
      <HorizontalBar />
      <Footer />
    </>
  );
}
