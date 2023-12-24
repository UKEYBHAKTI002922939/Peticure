import * as petHealthRecordService from '../services/pet-health-record-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

// function for request response for create pet health by id

export const createPetHealthRecord = async (req, res) => {

    try {
        const newPetHealthRecord = { ...req.body };
        const petHealthRecord = await petHealthRecordService.createPetHealthRecord(newPetHealthRecord);
        setResponse(petHealthRecord, res);
    }
    catch (err) {
        console.log(err);
        setErrorResponse(err, res);
    }
}

// function for request response for get pet health by id

export const getPetHealthRecordByPetId = async (req, res) => {

    try {
        const petId = req.params.id;
        const petHealthRecord = await petHealthRecordService.getPetHealthRecordByPetId(petId);
        setResponse(petHealthRecord, res);
    }
    catch (err) {
        console.log(err);
        setErrorResponse(err, res);
    }
}

