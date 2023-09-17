import { getInitials } from "../../Utility/Text/getInitials";

// In case yu don't want to use tailwind
// const DivStyle={{
//     backgroundColor: "blue",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 30 * scale,
//     width: 50 * scale,
//     height: 50 * scale,
//   }}

// cost TextStyle={{ color: "white", fontSize: 25 * scale }}

const AlternateDisplayPicture = ({ name, scale = "s" }) => {
  var dpWrapper = {
    s: "rounded-[30px] w-[3rem] h-[3rem]",
    m: "rounded-[60px] w-[6rem] h-[6rem]",
    l: "rounded-[120px] w-[12rem] h-[12rem]",
    xl: "rounded-[240px] w-[24rem] h-[24rem]",
  };

  var textSize = {
    s: "text-[1rem]",
    m: "text-[2rem]",
    l: "text-[4rem]",
    xl: "text-[8rem]",
  };
  return (
    <div
      className={`flex items-center justify-center bg-primary2  text-center ${dpWrapper[scale]}`}
    >
      <div className={` text-primary4  ${textSize[scale]}`}>
        {getInitials(name)}
      </div>
    </div>
  );
};

export default AlternateDisplayPicture;
