import * as fosterService from '../services/foster-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';


// function to get foster response and request 
export const getFosters = async (req, res) => {

    try {
        const params = { ...req.query };
        const fosters = await fosterService.getFosters(params);
        setResponse(fosters, res);
    }
    catch (err) {
        setErrorResponse(err, res);

    }

}

// function to creating foster response and request 


export const createFoster = async (req, res) => {

    try {
        const newFoster = { ...req.body };
        const foster = await fosterService.createFoster(newFoster);
        setResponse(foster, res);
    }
    catch (err) {
        console.log(err);
        setErrorResponse(err, res);
    }
}

// function to getting foster response and request  by id

export const getFostersbyId = async (req, res) => {

    try {
        const id = req.params.id ;
        const fosters = await fosterService.findById(id);
        setResponse(fosters, res);
    }
    catch (err) {
        setErrorResponse(err, res);

    }

}
// function to updating foster response and request by id


export const updateFostersbyId = async (req, res) => {
    try {
        const id = req.params.id ;
        const updatedFosters = { ...req.body };
        const fosters = await fosterService.update(updatedFosters, id);
        setResponse(fosters, res);

    } catch (err) {
        setErrorResponse(err, res);

    }

}

// function to remove foster response and request by id


export const remove = async (req, res) => {
    try {
        const id = req.params.id ;
        const fosters = await fosterService.remove(id);
        setResponse({}, res);

    } catch (err) {
        setErrorResponse(err, res);

    }

    
}