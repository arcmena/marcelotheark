export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageView = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

type TEvent = {
  action: string
  category: string
  label: string
  value?: string | number
}

export const event = ({ action, category, label, value }: TEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
