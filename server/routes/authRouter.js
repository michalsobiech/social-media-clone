import bcrypt from "bcrypt";
import express from "express";
import {
  BAD_REQUEST,
  CONFLICT,
  CREATED,
} from "../constants/HttpStatusCodes.js";
import User from "../models/User.js";
import CustomError from "../utils/CustomError.js";
import {
  isEmailValid,
  isPasswordValid,
  isValidISO,
} from "../utils/validation.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    let { firstName, lastName, email, password, birthDate, gender } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !birthDate ||
      !gender
    ) {
      throw new CustomError(BAD_REQUEST, "Missing required fields");
    }

    if (
      !isNaN(parseFloat(firstName)) ||
      !isNaN(parseFloat(lastName)) ||
      !isNaN(parseFloat(email)) ||
      !isNaN(parseFloat(password)) ||
      !isValidISO(birthDate)
    ) {
      throw new CustomError(BAD_REQUEST, "Invalid data type");
    }

    if (!isEmailValid(email) || !isPasswordValid(password)) {
      throw new CustomError(BAD_REQUEST, "User input is invalid");
    }

    if (await User.exists({ email })) {
      throw new CustomError(CONFLICT, "Email is taken");
    }

    birthDate = new Date(birthDate);

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await User.create({
      firstName,
      lastName,
      email,
      hashedPassword,
      birthDate,
      gender,
    });

    res.status(CREATED).send({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
});

export default router;
