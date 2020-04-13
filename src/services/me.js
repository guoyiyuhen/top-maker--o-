import axios from 'axios'
import errorParser from '@/utils/error-parser'
import eventBus from '@/event-bus'
import qs from 'qs'

export default {
  /**
   * Fetch current user's name, boards, and teams
   */
  getMyData () {
    return new Promise((resolve, reject) => {
      axios.get('/me').then(({data}) => {
        resolve(data)
        eventBus.$emit('myDataFetched', data)
      }).catch((error) => {
        reject(errorParser.parse(error))
      })
    })
  },
  signOut (token) {
    let params = {type: 2, app_id: '6a14b66bc7e8f177', domain_type : 1 ,token:token};
    params = qs.stringify(params);
    return new Promise((resolve, reject) => {
      axios.post('/user/logout',params).then(({data}) => {
        resolve(data)
      }).catch((error) => {
        reject(errorParser.parse(error))
      })
    })
  }
}
