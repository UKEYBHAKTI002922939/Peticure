import Report from '../models/abuse.js';


// Function to retrieve reports based on provided query parameters.
export const getReports = async (params = {}) => {
    // Finding reports in the database that match the given parameters.
    const reports = await Report.find(params).exec();

    // Returning the reports.
    return reports;
}

// Function to create a new report
export const createReports = async (newReport) => {
    // Creating an instance of Foster with the new data.
    const reports = new Report(newReport);

    // Saving the new report to the database and returning the result.
    return await reports.save();
}
