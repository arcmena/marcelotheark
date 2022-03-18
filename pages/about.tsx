import { Fragment } from 'react'

import SEO from '@components/common/SEO'
import PageTitle from '@components/elements/PageTitle'
import Timeline from '@components/layouts/AboutPage/Timeline'

import {
  AboutPageContainer,
  AboutPageIntroduction,
} from '@styles/pages/AboutPageStyles'

const SEOContent = {
  title: 'About me | Marcelo the ark - Front End Developer',
  description:
    'A bit about myself (Marcelo Mena) as a person and as a dev, my works and achievements!'
}

const titleContent = (
  <Fragment>
    Hello there 👋 <br /> I’m Marcelo.
  </Fragment>
)

const aboutContent = (
  <p>
    I am a Frontend developer based in Brazil 🇧🇷
    <br />
    <br />
    Have been developing user experiences for over two and a half years now,
    working from financial to health sectors, building new apps and landing
    pages using the best development tools and practices.
    <br />
    <br />
    I’m passionate about creating the best user experiences, using ui/ux
    thinking, developing, documenting and implementing design systems.
    <br />
    <br />
    Have worked with MVC pattens with C#, implementing view templates and logic
    with vanilla JavaScript and JQuery, but in the last two years I’ve been in
    love with React and the way it allows the developer to create the structure
    he needs for each project in a clean way.
  </p>
)

import { TTimeline } from '@graphql/schema'

const timelineData: TTimeline[] = [
  {
    id: 'ckw2n283ky0c60b804vdqlbsr',
    year: '2021',
    items: [
      {
        id: 'ckxad7ukwhi490a76byd7vlc6',
        title: 'Joined Oowlish as Front End Developer',
        description:
          'Really happy and excited to embrace new challenges and work with people from all around the world. Working with React and GraphQL.'
      },
      {
        id: 'ckw2n0m88y6b70c850nuwz27c',
        title: 'Promoted to Mid Front End Developer on Kompa Saúde',
        description: 'Carrer level up.'
      }
    ]
  },
  {
    id: 'ckw2nfx5kyduh0c85dr0xkwx2',
    year: '2020',
    items: [
      {
        id: 'ckw2nenmoy9yr0b724zul0ag0',
        title: 'Joined Kompa Saúde as a Junior Front End Developer',
        description: 'So grateful for this opportunity.'
      },
      {
        id: 'ckw2nfu2gyalo0b726j8pcz0e',
        title: 'Landed first job as a Software Developer',
        description:
          'The result of studying every day and putting myself out there.'
      }
    ]
  },
  {
    id: 'ckw2nrjd4ygx90b72hnzgym9j',
    year: '2019',
    items: [
      {
        id: 'ckw2niku0yfdz0c8508hw5w14',
        title: 'Landed first job in tech industrie',
        description: 'So grateful for this opportunity.'
      },
      {
        id: 'ckw2nrd6wyjda0g89d8n8esd1',
        title: "Started a Bachelor's Degree in Computer Science",
        description: 'Starting my contact with the tech community'
      }
    ]
  },
  {
    id: 'ckw2nzxu0yg5p0b80icu5c58n',
    year: '2018',
    items: [
      {
        id: 'ckw2nztz4ymch0g8993kax5oc',
        title: 'Wrote my first line of code',
        description:
          'After a lot of tutorials, finally done my first "hello world" '
      }
    ]
  }
]

export default function AboutPage() {
  return (
    <>
      <SEO {...SEOContent} />

      <AboutPageContainer>
        <PageTitle label={titleContent} />

        <AboutPageIntroduction>{aboutContent}</AboutPageIntroduction>

        <Timeline timelines={timelineData} />
      </AboutPageContainer>
    </>
  )
}
