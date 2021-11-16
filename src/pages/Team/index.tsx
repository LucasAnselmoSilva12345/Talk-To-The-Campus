import { Footer } from '../../components/Footer';
import { HeaderPage } from '../../components/HeaderPage';
import { HorizontalBar } from '../../components/HorizontalBar';
import { TeamMembers } from '../../components/TeamMembers';

export function Team() {
  return (
    <>
      <HeaderPage />
      <TeamMembers />
      <HorizontalBar />
      <Footer />
    </>
  );
}
