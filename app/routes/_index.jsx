import react, { useState } from "react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {
  const [content, setContent] = useState("content");
  const [background, setBackground] = useState("blue");
  let items=['item 1','items 2','item 3', 'item 4', 'item 5'];

  return (
    <div className={`bg-${background}-500 p-4`}>
      <div>{content}</div>
      <button onClick={() => setContent("new content")}>click</button>
      <button
        className="border border-green-500 px-4 py-2 rounded-md ml-2"
        onClick={() => setBackground("red")}
      >
        change background
      </button>
       {/* adding list  */}
      <ul>
        {items.map((item, index) => (
          <li className="bg-blue-600" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}



// function Button({ type, text }) {
//   return (
//     // <button
//     //   className={`${
//     //     type === "delete" ? "bg-red-500" : "bg-green-500"
//     //   } px-4 py-2 gap-10 rounded-md`}
//     // >
//     //   {text}
//     // </button>

//   );
// }
