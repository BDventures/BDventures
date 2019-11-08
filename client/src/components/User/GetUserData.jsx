let errorMsg = (err) => {
  return err
}

let success = (data) => {
  return `${data.name} Kim`
}

const promise = (data) => {
  return new Promise ( (resolve, reject) => {
    let error = `sorry no name is found`
    if(!data.name) reject(new Error(errorMsg(error)))

    resolve(success(data))
  })
}
//if you write async in front of a function, it always returns a promise //wraps non-promises in promises
//await is the same thing as .then waits until the promise settles and returns its result
export const GetUserData = async (data) => {
  try {
    let returnedData = await promise(data)
    console.log(returnedData, 'this is from the try block')
    return returnedData
  }
  catch (err){
    console.log(err)
  }
}