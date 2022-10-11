import West from "../assets/westithink.png";
import jason from "../assets/jason.png";
import ramen from "../assets/ramen.png";
import olivia from "../assets/olivia.png";
import andrea from "../assets/andrea.png";
import ethan from "../assets/ethan.png";
import amanda from "../assets/amanda.png";
import coolstacy from "../assets/coolstacy.png";
import blake from "../assets/blake.png";
import carlos from "../assets/carlos.png";
const initialState = {
  students: [
    { name: "West", img: West },
    { name: "Rahmin", img: ramen },
    { name: "Olivia", img: olivia },
    { name: "Jason", img: jason },
    { name: "Ethan", img: ethan },
    { name: "Amanda", img: amanda },
    { name: "Andrea", img: andrea },
    { name: "Stacy", img: coolstacy },
    { name: "Carlos", img: carlos },
    { name: "Blake", img: blake },
  ],
  frontEnd: [],
  backEnd: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRONTEND":
      const newFrontEnd = [...state.frontEnd, action.payload];
      const newStudentsFront = state.students.filter(
        (student) => student !== action.payload
      );
      return { ...state, frontEnd: newFrontEnd, student: newStudentsFront };
    case "ADD_BACKEND":
      const newBackend = [...state.backEnd, action.payload];
      const newStudentsBack = state.students.filter(
        (student) => student !== action.payload
      );
      return { ...state, backEnd: newBackend, student: newStudentsBack };
    default:
      return state;
  }
};
export default rootReducer;
