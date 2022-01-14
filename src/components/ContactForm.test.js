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
    const firstName = screen.getByPlaceholderText('Edd');
    userEvent.type(firstName, 'Nit');
    const fnameError = screen.findByText('firstname must have atleast 5 characters');
    expect(fnameError).toBeTruthy();
    
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    render (<ContactForm/>)

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);
    
    const fnameError = screen.findByText('firstName must have atleast 5 characters.');
    expect(fnameError).toBeTruthy();

    const lnameError = screen.findByText('lastName is required.');
    expect(lnameError).toBeTruthy();

    const emailError = screen.findByText('email must be a valid email address.');
    expect(emailError).toBeTruthy();
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {

    render (<ContactForm/>)

    const firstName = screen.getByPlaceholderText('Edd');
    userEvent.type(firstName, 'Nithya');    

    const lastName = screen.getByPlaceholderText('Burke');
    userEvent.type(lastName, 'Narayanan');    

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    const emailError = screen.findByText('email must be a valid email address.');
    expect(emailError).toBeTruthy();

    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {

    render (<ContactForm/>)

    const firstName = screen.getByPlaceholderText('Edd');
    userEvent.type(firstName, 'Nithya');    

    const lastName = screen.getByPlaceholderText('Burke');
    userEvent.type(lastName, 'Narayanan');    

    const emailAddress = screen.getByPlaceholderText('bluebill1049@hotmail.com')
    userEvent.type(emailAddress, 'test')

    const emailError = screen.findByText('email must be a valid email address.');
    expect(emailError).toBeTruthy();


test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
    render (<ContactForm/>)

    const firstName = screen.getByPlaceholderText('Edd');
    userEvent.type(firstName, 'Nithya');  

    const lnameError = screen.findByText('lastName is required.');
    expect(lnameError).toBeTruthy();

    const emailAddress = screen.getByPlaceholderText('bluebill1049@hotmail.com')
    userEvent.type(emailAddress, 'abcxyz@test.com')

    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
});