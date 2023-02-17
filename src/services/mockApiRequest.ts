// Takes a payload and returns a promise which returns the payload
const mockApiRequest = ({payload, shouldReject = false}: {payload: any, shouldReject?: boolean}) => {
  return new Promise((resolve, reject) => {
    if(!shouldReject) {
      setTimeout(() => {
        resolve(payload);
      }, 1000);
    } else {
      reject(new Error('mockAPI call failed'));
    }
  });
};

export default mockApiRequest;