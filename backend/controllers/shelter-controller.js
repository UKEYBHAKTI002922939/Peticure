import * as shelterService from '../services/shelter-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';


// function to get shelter response and request 
export const getShelters = async (req, res) => {

    try {
        const params = { ...req.query };
        const shelters = await shelterService.getShelters(params);
        setResponse(shelters, res);
    }
    catch (err) {
        setErrorResponse(err, res);

    }

}

// function to creating shelter response and request 


export const createShelter = async (req, res) => {

    try {
        const newShelter = { ...req.body };
        const shelter = await shelterService.createShelter(newShelter);
        setResponse(shelter, res);
    }
    catch (err) {
        console.log(err);
        setErrorResponse(err, res);
    }
}

// function to getting shelter response and request  by id

export const getSheltersbyId = async (req, res) => {

    try {
        const id = req.params.id ;
        const shelters = await shelterService.findById(id);
        setResponse(shelters, res);
    }
    catch (err) {
        setErrorResponse(err, res);

    }

}
// function to updating shelter response and request by id


export const updateSheltersbyId = async (req, res) => {
    try {
        const id = req.params.id ;
        const updatedShelters = { ...req.body };
        const shelters = await shelterService.update(updatedShelters, id);
        setResponse(shelters, res);

    } catch (err) {
        setErrorResponse(err, res);

    }

}

// function to remove shelter response and request by id


export const remove = async (req, res) => {
    try {
        const id = req.params.id ;
        const shelters = await shelterService.remove(id);
        setResponse({}, res);

    } catch (err) {
        setErrorResponse(err, res);

    }

    
}