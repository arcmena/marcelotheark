import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Tippy, { TippyProps } from '@tippyjs/react'
import { animateFill } from 'tippy.js'
import 'tippy.js/animations/shift-away.css'

import { PickerButton, PickerContent, PickerContentButton } from './styles'

const localeIcon = {
  en: '/us-round.png',
  'pt-BR': '/br-round.png'
}

const tippyOptions: TippyProps = {
  hideOnClick: true,
  trigger: 'click',
  interactive: true,
  interactiveDebounce: 75,
  placement: 'bottom',
  animateFill: true,
  plugins: [animateFill]
}

const TippyContent = ({
  locales,
  handleChangeLocale
}: {
  locales?: string[]
  handleChangeLocale: (locale: string) => void
}) => (
  <PickerContent>
    {locales?.map(locale => (
      <PickerContentButton
        key={locale}
        onClick={() => handleChangeLocale(locale)}
      >
        <Image
          //@ts-ignore
          src={localeIcon[locale]}
          width={25}
          height={25}
          alt="flag"
        />
        <span>{locale === 'en' ? 'English' : 'Portuguese (Brazil)'}</span>
      </PickerContentButton>
    ))}
  </PickerContent>
)

const LocalePicker = () => {
  const tippyRef = useRef<Element>(null)

  const router = useRouter()

  const {
    locale: currentLocale,
    locales: availableLocales,
    query,
    pathname,
    asPath
  } = router

  const handleChangeLocale = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })

    //@ts-ignore
    tippyRef.current._tippy.hide()
  }

  return (
    <Tippy
      content={
        <TippyContent
          locales={availableLocales}
          handleChangeLocale={handleChangeLocale}
        />
      }
      ref={tippyRef}
      {...tippyOptions}
    >
      <PickerButton>
        {currentLocale && (
          <Image
            //@ts-ignore
            src={localeIcon[currentLocale]}
            width={25}
            height={25}
            alt="flag"
          />
        )}
      </PickerButton>
    </Tippy>
  )
}

export default LocalePicker
