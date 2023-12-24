// models/index.js
import PetModel from "./pet.js";
import StoreModel from "./store.js";
import ShelterModel from "./shelter.js";
import PetHealthRecordModel from "./health-records.js";
import FosterModel from "./foster.js";
//import User from "./user.js";
import UserModel from "./user.js";
import ReportModel from "./abuse.js";
import DonationModel from "./donation.js";
export default {
  Pet: PetModel,
  Store: StoreModel,
  Shelter: ShelterModel,
  PetHealthRecord: PetHealthRecordModel,
  Foster: FosterModel,
  User: UserModel,
  Report: ReportModel,
  Donation: DonationModel,
};
