import { ContactDetails } from '@/types/contact'

interface AdditionalConsultantInfo {
  about: string[];
  image: string;
}

export type ConsultantProps = ContactDetails & AdditionalConsultantInfo
