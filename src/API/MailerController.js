import BaseController from './BaseController';
import $ from 'jquery';

export default class MailerController extends BaseController {
  static sendMail(data) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: process.env.REACT_APP_MAILER,
        method: 'post',
        crossDomain: true,
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (result) {
          resolve(result);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }

  static sendCareerMail(data) {
    const formData = new FormData();
    formData.append('firstName', data.Fname);
    formData.append('lastName', data.Lname);
    formData.append('email', data.Email);
    formData.append('subject', data.Position);
    formData.append('message', data.Details);
    formData.append('resume', data.file);
    return new Promise((resolve, reject) => {
      $.ajax({
        url: process.env.REACT_APP_MAILER,
        method: 'post',
        crossDomain: true,
        type: 'POST',
        dataType: 'json',
        contentType: false,
        data: formData,
        processData: false,
        success: function (result) {
          resolve(result);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }
  static sendProgressMail(data) {
    let nda;
    if (data.nda == 'Yes') {
      nda = 'Yes';
    } else {
      nda = 'No';
    }
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('budget', data.budget);
    formData.append('country', data.country);
    formData.append('file', data.file);
    formData.append('nda', nda);
    formData.append('message', data.message);
    return new Promise((resolve, reject) => {
      $.ajax({
        url: process.env.REACT_APP_PROCESS_MAILER,
        method: 'post',
        crossDomain: true,
        type: 'POST',
        dataType: 'json',
        contentType: false,
        data: formData,
        processData: false,
        success: function (result) {
          resolve(result);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }
}
