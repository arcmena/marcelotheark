import { ChangeEvent } from 'react'
import { useRouter } from 'next/router'

import { SelectContainer } from './styles'

const LocalePicker = () => {
  const router = useRouter()

  const { locale, query, pathname } = router

  const queryEntries = Object.entries(query)
  const textQuery =
    queryEntries.length === 0
      ? ''
      : `?${Object.entries(query)
          .map(([paramName, paramVal]) => `${paramName}=${paramVal}`)
          .join('&')}`

  const handleChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target

    router.push(`${pathname}${textQuery}`, undefined, {
      locale: value
    })
  }

  return (
    <SelectContainer
      name="locale"
      id="locale"
      value={locale}
      onChange={handleChangeLocale}
    >
      <option value="en">EN</option>
      <option value="pt-BR">PT-BR</option>
    </SelectContainer>
  )
}

export default LocalePicker
