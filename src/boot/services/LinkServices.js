import CoreServices from './CoreServices'

async function postALink(data) {
  const response = await CoreServices.post('/links', data)
  return response
}

export default { postALink }
