import { useState } from "react";
import "./style.css";

const Topic = [
    {
        title: "SQL",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        title: "CSS",
        text:
            "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        title: "HTML",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    },
    {
        title: "REACT",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    },
    {
        title: "JAVASCRIPT",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    },
    {
        title: "DJANGO",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
];

// export default function App() {
//     return (
//         <div>
//             <Accordion data={Topic} />
//         </div>
//     );
// }

// function Accordion({ data }) {
//     return (
//         <div className="accordion">
//             {
//                 data.map((el, i) => (
//                     <AccordionItem num = {i} key={el.title} title={el.title} text={el.text} />
//                 ))
//             }
//         </div>
//     )
// }

// function AccordionItem({num,title,text}){
//     const [isOpen,setIsOpen] = useState(false);

//     function handleToggle(){
//         setIsOpen((isOpen)=> !isOpen)
//     }
//     return(
//         <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
//             <p className="number">{num<9 ? `0${num+1}` : num+1}</p>
//             <p className="title">{title}</p>
//             <p className="icon">{isOpen ?  "-" : "+"}</p>

//             {
//                 isOpen && <div className="content-box">{text}  </div>
//             }

//         </div>
//     )
// }


// // 1...
// export default function App() {
//     return (
//         <div>
//             <Accordion data={Topic} />
//         </div>
//     );
// }

// // 2..

// function Accordion({data}){
//     return(
//         <div className="accordion">
//            {
//                 data.map((el,i)=>(
//                     <AccordionItem num={i} key={el.title} title={el.title} text={el.text}/>
//                 ))
//             }
//             </div>
//     )
// }

// function AccordionItem({num,title,text}){
//     const [isOpen, setisOpen] = useState(false);
//     function handleToggle(){
//         setisOpen((isOpen)=>!isOpen)
//     }

//     return(
//                 <div className={`item ${isOpen ? "open" : null}` } onClick={handleToggle}>
//             <p className="number">{num<9 ? `0${num+1}`:  num+1}</p>
//             <p className="title">{title}</p>
//             <p className="icon">{isOpen ? "-" :  "+"}</p>
//             {
//                 isOpen && <div className="content-box">{text}  </div>
//             }

//         </div>
//     )
    
// }

function Accordion({ data }) {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="accordion">
            {data.map((el, i) => (
                <AccordionItem
                    key={el.title}
                    num={i}
                    title={el.title}
                    text={el.text}
                    isOpen={isOpen === i}
                    onToggle={() => handleToggle(i)}
                />
            ))}
        </div>
    );
}

// AccordionItem Component
function AccordionItem({ num, title, text, isOpen, onToggle }) {
    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={onToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{text}</div>}
        </div>
    );
}

// App Component
export default function App() {


    return (
        <div>
            <Accordion data={Topic} />
        </div>
    );
}