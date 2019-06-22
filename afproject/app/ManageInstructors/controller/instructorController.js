const mongoose = require('mongoose');
const Instructor = require('../model/instructor');

const InstructorController = function () {
    this.insert = (instructor) => {
        return new Promise((resolve, reject) => {
            const newInstructor = new Instructor({
                code: instructor.code,
                name: instructor.name,
                username: instructor.username,
                password: instructor.password,
                designation: instructor.designation,
                faculty: instructor.faculty

            });

            newInstructor.save().then(() => {
                resolve({status: 200, message: "Added new Instructor"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };

    this.getByCode = (code) => {
        return new Promise((resolve, reject) => {
            Instructor.find({code: code}).exec().then((instructor) => {
                resolve({status: 200, instructors: instructor})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            Instructor.find().exec().then((instructor) => {
                resolve({status: 200, instructors: instructor})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.update = (code, data) => {
        return new Promise((resolve, reject) => {
            Instructor.update({code: code}, data).then(() => {
                resolve({status: 200, message: "updated Instructor"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    };

    this.delete = (code) => {
        return new Promise((resolve, reject) => {
            Instructor.remove({code: code}).then(() => {
                resolve({status: 200, message: "removed instructor"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }
};

module.exports = new InstructorController();