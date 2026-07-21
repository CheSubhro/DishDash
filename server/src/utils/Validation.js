
import { body, validationResult } from 'express-validator';
import { ApiError } from './ApiError.js'; 
import HttpStatus from './HttpStatus.js';

export const registerValidator = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 3 }).withMessage('Full name must be at least 3 characters long'),
    
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address'),
    
  body('username')
    .trim()
    .notEmpty().withMessage('Username is required')
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),

  body('role')
    .optional()
    .isIn(['user', 'admin']).withMessage('Role must be either user or admin')
];

export const loginValidator = [
  body('email')
    .optional()
    .isEmail().withMessage('Please provide a valid email address'),
  
  body('username')
    .optional()
    .trim(),

  body().custom((value, { req }) => {
    if (!req.body.email && !req.body.username) {
      throw new Error('Email or Username is required');
    }
    return true;
  }),

  body('password')
    .notEmpty().withMessage('Password is required')
];

export const categoryValidator = [
  body('name')
    .trim()
    .notEmpty().withMessage('Category name is required')
    .isLength({ min: 2 }).withMessage('Category name must be at least 2 characters long'),
  
  body('type')
    .optional()
    .isIn(['main', 'sub']).withMessage('Type must be either main or sub'),

  body('parentCategory')
    .if(body('type').equals('sub'))
    .notEmpty().withMessage('Parent category ID is required for sub-categories')
    .isMongoId().withMessage('Invalid Parent Category ID format')
];

export const menuItemValidator = [
  body('name')
    .trim()
    .notEmpty().withMessage('Menu item name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
  
  body('price')
    .notEmpty().withMessage('Price is required')
    .isFloat({ gt: 0 }).withMessage('Price must be a positive number'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),

  body('category')
    .notEmpty().withMessage('Category ID is required')
    .isMongoId().withMessage('Invalid Category ID format'),

  body('isAvailable')
    .optional()
    .isBoolean().withMessage('isAvailable must be a boolean value')
];

export const editMenuItemValidator = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
  
  body('price')
    .optional()
    .isFloat({ gt: 0 }).withMessage('Price must be a positive number'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),

  body('category')
    .optional()
    .isMongoId().withMessage('Invalid Category ID format'),

  body('isAvailable')
    .optional()
    .isBoolean().withMessage('isAvailable must be a boolean value')
];


export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ApiError(HttpStatus.BAD_REQUEST, "Validation Failed", errors.array());
  }
  next();
};