const houses = require('./db.json')
let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) =>{
        let index = houses.findIndex(houseId => +houseId.id === +req.params.id)
                houses.splice(index, 1)
                res.status(200).send(houses)
            },
    createHouse: (req, res) => {
        let {adress, price, imageURL} = req.body
        let newHouse = {
            id: globalId,
            adress,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.sttus(200).send(houses)
        globalId++
    },
    updateHouse: (req, res) => {
        let {id} = req.body
        let {type} = req.body
        let index = houses.findIndex(houseId => +houseId.id === +id)

        if(houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }

    }
}