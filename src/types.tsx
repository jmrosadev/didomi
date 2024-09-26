export enum ConsentAgreementType {
  NEWSLETTER = 'newsletter',
  ADS = 'ads',
  STATISTICS = 'statistics',
}

export interface ConsentType {
  id: string
  email: string
  name: string
  agreements: ConsentAgreementType[]
}
