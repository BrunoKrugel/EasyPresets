import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = props => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Deixe suas fotos incríveis com esses presets para Lightroom.
                </SectionTitle>
                <SectionText>
                    Editar fotos nunca foi tão fácil. Com esses presets você vai conseguir deixar suas fotos incríveis
                    em poucos cliques.
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
