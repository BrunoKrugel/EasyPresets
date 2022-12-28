import React, {useState} from "react";
import * as S from "./FAQStyles";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const FAQ = () => {
    //Hooks
    //Active is set as -1 to allow the DOM to be render first, otherwise it will break the page
    //if it tries to read the document height before it is rendered
    const [active, setActive] = useState(-1);
    //FAQ Data
    const data = [
        {
            question: "Preciso ter o aplicativo Lightroom na versão paga?",
            answer: "Não, você pode usar os Presets na versão gratuita do Lightroom Mobile, já no Computador não existe uma versão gratuita!",
        },
        {
            question: "Quais as formas de pagamento disponíveis?",
            answer: "Temos disponíveis cartão de crédito, onde sua compra poderá ser parcelada em até 10x iguais, e à vista no PIX ou Boleto.",
        },
        {
            question: "Se eu trocar de celular, preciso comprar os presets novamente?",
            answer: "Não! Os presets que você comprar serão seus para sempre, você só irá precisar realizar a instalação dos pacotes novamente.",
        }
    ];
    //Render
    return(
        <Section id="faq">
        <SectionDivider colorAlt />
        <SectionTitle main>Dúvidas frequentes</SectionTitle>
        <S.Container>
            {data.map((f, i) => (
                <S.InnerContainer key={i}>
                    {/*When you click on a question, its index will be attributed to the active hook*/}
                    <h1 onClick={() => active === i ? setActive(null) : setActive(i)}>{i+1}. {f.question}</h1>
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
        </Section>
    );

};

export default FAQ;