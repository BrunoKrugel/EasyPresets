import Hero from '../components/Hero/Hero'
import { Layout } from '../layout/Layout'
import { Section, SectionTitle, SectionText, LeftSection } from '../styles/GlobalComponents'
import ScrollToTop from 'react-scroll-to-top'
import dynamic from 'next/dynamic'
import Information from '../components/Information/Info'

const DynamicFaq = dynamic(() => import('../components/FAQ/FAQ'))
const DynamicProjects = dynamic(() => import('../components/Projects/Projects'))
const DynamicExample = dynamic(() => import('../components/Examples/Example'))
import { Analytics } from '@vercel/analytics/react'

const Policy = () => {
    return (
        <Layout>
            <Section row nopadding>
                <LeftSection>
                    <SectionTitle main center>
                        Política de Privacidade
                    </SectionTitle>
                    <SectionText>
                        <p>
                            Nós, Easy Presets, valorizamos a privacidade de nossos usuários e criamos esta política para
                            demonstrar nosso compromisso em proteger as informações pessoais que coletamos. Esta
                            política de privacidade se aplica a todos os serviços oferecidos pela nossa empresa.
                        </p>
                        <br />
                        <p>
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer
                            um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
                            Também informamos por que estamos coletando e como será usado.
                        </p>
                        <br />
                        <p>
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
                            solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis
                            ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não
                            autorizados.
                        </p>
                        <br />
                        <p>
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
                            exceto quando exigido por lei.
                        </p>
                        <br />
                        <p>
                            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente
                            de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar
                            responsabilidade por suas respectivas políticas de privacidade.
                        </p>
                        <br />
                        <p>
                            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez
                            não possamos fornecer alguns dos serviços desejados.
                        </p>
                        <br />
                        <p>
                            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno
                            de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com
                            dados do usuário e informações pessoais, entre em contato conosco.
                        </p>
                    </SectionText>
                </LeftSection>
            </Section>
            <ScrollToTop smooth />
        </Layout>
    )
}

export default Policy
