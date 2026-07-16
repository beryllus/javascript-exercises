const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        if (calculateAge(oldest) > calculateAge(current)) {
            return oldest;
        }
        return current;
    });
};

const calculateAge = (person) => {
    if (!person.yearOfDeath) {
        return new Date().getFullYear() - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
