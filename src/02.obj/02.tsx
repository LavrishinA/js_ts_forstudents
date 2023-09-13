//create obj

type CityType = {
    title:string
    country: string
}
type AdressType = {
    street: string
    city: CityType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name:string
    isActive: boolean
    adress: AdressType
    technologies: Array<TechnologiesType>
}

export const student = {
    id: 1,
    name: "Alex",
    age: 38,
    isActive: true,
    adress: {
        street: "Krystallovskaya",
        city: {
            title: "Homel",
            country: "BLR"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 1,
            title: "CSS"
        },
        {
            id: 1,
            title: "JSL"
        }
    ]
};