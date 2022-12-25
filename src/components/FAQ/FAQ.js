import React, {useState} from "react";
import * as S from "./FAQStyles";

const FAQ = () => {
    //Hooks
    //Active is set as -1 to allow the DOM to be render first, otherwise it will break the page
    //if it tries to read the document height before it is rendered
    const [active, setActive] = useState(-1);
    //FAQ Data
    const data = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2?",
            answer: "Lorem ipsum dolor sit amet.",
        }
    ];
    //Render
    return(
        <S.Container>
            {data.map((f, i) => (
                <S.InnerContainer key={i}>
                    {/*When you click on a question, its index will be attributed to the active hook*/}
                    <h1 onClick={() => active === i ? setActive(null) : setActive(i)}>{f.question}</h1>
                    <S.Wrapper>
                        {/*If active equals -1, it's the initial state, so it will receive 100% as margin top*/}
                        {/*Otherwise it will get the element height + 10px and set as margin top*/}
                        {/*The logic behind this is to maintain the same speed on collapsing and expanding the div*/}
                        <div id={"faq__answer"+i} style={active===i?{marginTop: 0}:
                            {marginTop:
                                    active!==-1?
                                        "-"+(document.getElementById("faq__answer"+i).clientHeight+10)+"px":
                                        "-100%"
                            }}>
                            <p>{f.answer}</p>
                        </div>
                    </S.Wrapper>
                </S.InnerContainer>
            ))}
        </S.Container>
    );

};

export default FAQ;