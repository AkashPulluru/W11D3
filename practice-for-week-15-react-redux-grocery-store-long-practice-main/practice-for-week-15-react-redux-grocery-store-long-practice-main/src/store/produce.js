const produceData = require('../mockData/produce.json')


export default function produceReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function populateProduce(){
    const POPULATE = 'POPULATE'
    return {
        type: POPULATE,
        produceData
    }
}