import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = props => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Transforme suas fotos em obras de arte com um click
                </SectionTitle>
                <SectionText>
                    Com apenas um clique, você pode dar um toque profissional e elegante às suas fotos, seja para seu feed no Instagram, portfólio de fotografia ou álbum de viagem.
                    <br/>
                    <br/>
                    Não perca mais tempo editando manualmente suas fotos, baixe agora nosso Preset e transforme suas imagens em verdadeiras obras-primas!
                </SectionText>
                <Button
                    onClick={e => {
                        e.preventDefault()
                        window.location.href = '#projects'
                    }}
                >
                    EU QUERO
                </Button>
            </LeftSection>
        </Section>
    </>
)

export default Hero
