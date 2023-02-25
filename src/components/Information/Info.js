import React from 'react'
import { Section, SectionText, SectionDivider, PresetTitle } from '../../styles/GlobalComponents'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { infos } from '../../constants/constants'
import Image from "next/image";
import lock from '../../../public/lock.png'
import { TagList } from './InfoStyles'
const Information = () => (
    <Section id="informations">
        <SectionDivider />
        <PresetTitle main>O que é um Preset e como ele funciona?</PresetTitle>
        <SectionText>
            Presets são ajustes pré-definidos que podem ser aplicados a qualquer imagem ou vídeo com apenas um clique. Independentemente da origem da imagem - celular, câmera ou drone -, nossos presets permitem que você edite suas fotos de forma rápida e fácil, sem a necessidade de conhecimentos avançados em edição de imagens.
            <br />
            <br />
            Para usar nossos presets, basta baixá-los e importá-los para o Lightroom em seu dispositivo. Depois, é só aplicar o preset em qualquer imagem ou vídeo e ver a mágica acontecer.
            <br />
            <br />           
            Nossos presets são a solução perfeita para quem deseja editar suas fotos com qualidade profissional, mas sem perder horas preciosas de seu dia.
        </SectionText>
        <SectionDivider colorAlt />
        <PresetTitle main>Compra 100% segura</PresetTitle>
        {infos.map((data, i) => {
            return (
                <ul key={i}>
                    <TagList>
                        <Image src={lock} width={24} height={24} alt={"Lock"}/>
                        {' ' + data.text}
                    </TagList>
                </ul>
            );
        })}
    </Section>
)

export default Information
