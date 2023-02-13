import React from 'react'
import { Section, SectionText, SectionDivider, PresetTitle } from '../../styles/GlobalComponents'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { infos } from '../../constants/constants'
import Image from 'next/image'
import lock from '../../../public/lock.png'
import { TagList } from './InfoStyles'
const Information = () => (
    <Section id="informations">
        <SectionDivider />
        <PresetTitle main>O que é um Preset e como ele funciona?</PresetTitle>
        <SectionText>
            São edições de fotos que podem ser aplicadas com um clique em qualquer imagem ou vídeo, seja ela de um
            celular, câmera ou até mesmo de um drone.
            <br />
            <br />
            Com nssos Presets você pode editar suas fotos de forma rápida e fácil, sem precisar de conhecimentos
            avançados em edição de imagens.
            <br />
            <br />
            Para usar, basta baixar nossos Presets e importá-lo para o seu celular através do Lightroom, depois é só
            aplicar o Preset em qualquer imagem ou vídeo e pronto!
        </SectionText>
        <SectionDivider colorAlt />
        <PresetTitle main>Compra 100% segura</PresetTitle>
        {infos.map((data, i) => {
            return (
                <ul key={i}>
                    <TagList>
                        <Image src={lock} width={24} height={24} layout="fixed" />
                        {' ' + data.text}
                    </TagList>
                </ul>
            )
        })}
    </Section>
)

export default Information
