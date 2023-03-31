import people from '../assets/data.json'

const fakeFetch = async () => {
    console.log("faking fetch!")
    return new Promise((resolve) => resolve({
        json: async ()=> people
    }))
}

export default fakeFetch