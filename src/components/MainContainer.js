import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({ students, frontend, backend }) {
  return (
    <>
      <FrontEnd frontend={frontend} />
      <DefaultTeam students={students} />
      <BackEnd backend={backend} />
    </>
  );
}
