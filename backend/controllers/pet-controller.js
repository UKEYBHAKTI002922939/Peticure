import * as petService from '../services/pet-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

// function for request response for getting pets
export const getPets = async (req, res) => {

    try {
        const params = { ...req.query };
        const pets = await petService.getPets(params);
        setResponse(pets, res);
    }
    catch (err) {
        setErrorResponse(err, res);

    }

}
// function for request response for creating pets

export const createPet = async (req, res) => {

    try {
        const newPet = { ...req.body };
        const pet = await petService.createPet(newPet);
        setResponse(pet, res);
    }
    catch (err) {
        console.log(err);
        setErrorResponse(err, res);
    }
}

// function for request response for getting pets by id

export const getPetsbyId = async (req, res) => {

    try {
        const id = req.params.id ;
        const pets = await petService.findById(id);
        setResponse(pets, res);
    }
    catch (err) {
        setErrorResponse(err, res);

    }

}

// function for request response for update pets by id

export const updatePetsbyId = async (req, res) => {
    try {
        const id = req.params.id ;
        const updatedPets = { ...req.body };
        const pets = await petService.update(updatedPets, id);
        setResponse(pets, res);

    } catch (err) {
        setErrorResponse(err, res);

    }

}

// function for request response for remove pets by id

export const remove = async (req, res) => {
    try {
        const id = req.params.id ;
        const pets = await petService.remove(id);
        setResponse({}, res);

    } catch (err) {
        setErrorResponse(err, res);

    }

    
}