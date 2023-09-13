import {CarsType} from "./02_02";

let cars: CarsType

beforeEach(() => {
    cars = {
        make: "Ford",
        model: "Explorer",
        year: 2008,
        color:"red",
        fuel: "gas",
        upgrade: ["ABS", "ClimaCool", "Aluminum Wheels"]
    }
})


test("obj should be full", () => {
    expect(cars.make).toBe("Ford")
    expect(cars.upgrade[2]).toBe("Aluminum Wheels")
})