import { setResponse, setErrorResponse } from './response-handler.js';
import * as abuseService from '../services/abuse-report-service.js';

// function to get report response and request 
export const getReport = async (req, res) => {

    try {
        const params = { ...req.query };
        const reports = await abuseService.getReports(params);
        setResponse(reports, res);
    }
    catch (err) {
        setErrorResponse(err, res);

    }

}

// function to creating report response and request 


export const createReport = async (req, res) => {

    try {
        const newReport = { ...req.body };
        const report = await abuseService.createReports(newReport);
        setResponse(report , res);
    }
    catch (err) {
        console.log(err);
        setErrorResponse(err, res);
    }
}

