import { ConsentAgreementType, type ConsentType } from '@/types'

export const MOCK_DATA: ConsentType[] = [
  {
    id: 'e18f39a2-5aa8-490f-a127-ca61724191bb',
    name: 'Agnes O\'Reilly',
    email: 'Hildegard79@hotmail.com',
    agreements: [ConsentAgreementType.ADS, ConsentAgreementType.NEWSLETTER],
  },
  {
    id: '9ce08a8b-975b-4358-b9ff-7d26a6230a3f',
    name: 'Iris Langworth',
    email: 'Maribel_Mohr@hotmail.com',
    agreements: [ConsentAgreementType.ADS, ConsentAgreementType.STATISTICS],
  },
  {
    id: 'e69565b5-17f8-42eb-b17b-9fec894b1660',
    name: 'Van Jaskolski',
    email: 'Kristofer.Reichert92@yahoo.com',
    agreements: [ConsentAgreementType.NEWSLETTER, ConsentAgreementType.ADS],
  },
  {
    id: 'd5a1b08a-c707-4e5b-b1de-f6413c85f505',
    name: 'Michelle Grady',
    email: 'Virginie_Herman@gmail.com',
    agreements: [ConsentAgreementType.NEWSLETTER, ConsentAgreementType.STATISTICS],
  },
  {
    id: 'fe0a970b-4f9e-4c65-a920-015d1174bf5f',
    name: 'Paulette Hilll',
    email: 'Richmond_Larkin18@yahoo.com',
    agreements: [ConsentAgreementType.NEWSLETTER],
  },
  {
    id: 'f8a82de1-3b98-4050-a169-baa5aef7e86e',
    name: 'Hubert Kub-Mills',
    email: 'Ayana_Daniel12@hotmail.com',
    agreements: [ConsentAgreementType.ADS],
  },
  {
    id: '77cbde99-f340-4eeb-96f4-2861531e7d14',
    name: 'Dr. Heidi Harvey',
    email: 'Johnny68@yahoo.com',
    agreements: [ConsentAgreementType.NEWSLETTER],
  },
  {
    id: '3e8856a7-9647-4511-ae44-be8c83bed403',
    name: 'Mrs. Roxanne McKenzie-Kiehn',
    email: 'Leila_Zboncak17@gmail.com',
    agreements: [ConsentAgreementType.STATISTICS, ConsentAgreementType.ADS],
  },
  {
    id: 'be307d0a-ca50-4a01-b93d-6394aa63c26a',
    name: 'Melvin Terry PhD',
    email: 'Elvis.Maggio81@gmail.com',
    agreements: [ConsentAgreementType.NEWSLETTER, ConsentAgreementType.ADS],
  },
  {
    id: '13753bc1-cd7d-488e-be84-49ef90994190',
    name: 'Larry Reynolds Jr.',
    email: 'Dayna_Grimes27@hotmail.com',
    agreements: [ConsentAgreementType.NEWSLETTER, ConsentAgreementType.STATISTICS],
  },
]
