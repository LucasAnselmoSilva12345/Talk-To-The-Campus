import { HeaderPage } from '../../components/HeaderPage';
import { TeamMembers } from '../../components/TeamMembers';
import { HorizontalBar } from '../../components/HorizontalBar';
import { Footer } from '../../components/Footer';

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
