import PetHealthRecord from '../models/health-records.js';

// Function to create a new pet health record.
export const createPetHealthRecord = async (newPetHealthRecord) => {
    // Creating an instance of PetHealthRecord with the new data.
    const petHealthRecord = new PetHealthRecord(newPetHealthRecord);

    // Saving the new record to the database and returning the result.
    return await petHealthRecord.save();
}

// Function to retrieve a pet health record by the pet's ID.
export const getPetHealthRecordByPetId = async (id) => {
    // Finding the health record in the database using the pet's ID
    const petHealthRecord = await PetHealthRecord.find({ petId : id }).exec();

    // Returning the retrieved health records.
    return petHealthRecord;
}

