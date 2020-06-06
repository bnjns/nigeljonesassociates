import { ConsultantProps } from '@/types/consultants'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const marked = require('marked')

export const getFirstName = (consultant: ConsultantProps) => consultant.name.split(' ')[0]

export const processAbout = (consultant: ConsultantProps) => {
  return marked(
    consultant.about.join('\n\n')
      .toString()
      .replace(consultant.name, `**${ consultant.name }**`)
  )
}

export const createMailLink = (input: string) => `mailto:${ input }`
