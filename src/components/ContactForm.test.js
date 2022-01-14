import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('renders without errors', ()=>{

    render(<ContactForm/>)
    
    
});

test('renders the contact form header', ()=> {
    render (<ContactForm/>)
    const header = screen.getByText(/ContactForm/i)
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/ContactForm/i)

    
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    render (<ContactForm/>)
    const firstname = screen.getByPlaceholderText('Edd');
    userEvent.type(firstname, 'Nit');
    const fnameerror = screen.findByText('firstname must have atleast 5 characters');
    expect(fnameerror).toBeTruthy();
    
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    render (<ContactForm/>)
    const subButton = screen.getByRole('button');
    userEvent.click(subButton);
    
    const fnameerror = screen.findByText('firstname must have atleast 5 characters');
    expect(fnameerror).toBeTruthy();

    const lnameerror = screen.findByText('lastname is required');
    expect(lnameerror).toBeTruthy();

    const emailerror = screen.findByText('email must be a valid email address');
    expect(emailerror).toBeTruthy();
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
});