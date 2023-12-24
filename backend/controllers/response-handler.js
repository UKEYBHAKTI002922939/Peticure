// function to set response for data and response for success

export const setResponse = (data, response) => {
    response.status(200).json(data);
}

// function to set error response for data and response for failure

export const setErrorResponse = (error, response) => {
    response.status(500).json({
        code: "ServiceError",
        message: "Error occured while processing your request"
    });
}