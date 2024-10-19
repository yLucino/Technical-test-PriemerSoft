const fs = require('fs');

// Functions secondary for filter
function isPalindrome(candidates) {
  const firstNameForVerification = candidates[0].name.split(' ')[0];
  const cleanedName = firstNameForVerification.toLowerCase().replace(/\s+/g, '');
  const reversedName = cleanedName.split('').reverse().join('');
  if (cleanedName === reversedName) {
    return candidates[0]
  } 
}

function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

function candidatesWithPerfectSquareAge(candidates) {
  const validCandidates = candidates.filter(candidate => {
    const age = parseInt(candidate.age);
    return age >= 18 && age <= 30 && isPerfectSquare(age);
  });
  return validCandidates;
}

function ageBetween30And40YearsAndPair(candidates) {
  const filterCandicates = []

  candidates.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age)
    
    if (candidateAge >= 30 && candidateAge <= 40 && (candidateAge%2) === 0) {
      filterCandicates.push(candidate)
    }
  });

  return filterCandicates;
}

function lastNameStartsletterC(candidates) {
  const instructorMobile = []

  candidates[0].forEach((candidate) => {
    const names = candidate.name.split(' ');
    const lastNames = names[1]

    if (lastNames.startsWith('C')) {
      instructorMobile.push(candidate);
    }
  });

  return instructorMobile[0];
}

// Functions primary for tasks
function percentageCandidatesApplied(candidates) {
  const quantityOfCandidates = candidates.length;
  let vacancyWebApplications = null
  let vacancyMobileApplications = null
  let vacancyQAApplications = null
  let percentageApplicationsWeb = null
  let percentageApplicationsMobile = null
  let percentageApplicationsQA = null

  candidates.forEach((candidate) => {
    if (candidate.vacancy === 'Web') {
      vacancyWebApplications += 1
    } else if (candidate.vacancy === 'Mobile') {
      vacancyMobileApplications += 1
    } else if (candidate.vacancy === 'QA') {
      vacancyQAApplications += 1
    }
  });

  percentageApplicationsWeb = (vacancyWebApplications / quantityOfCandidates * 100).toFixed(1);
  
  percentageApplicationsMobile = (vacancyMobileApplications / quantityOfCandidates * 100).toFixed(1);

  percentageApplicationsQA = (vacancyQAApplications / quantityOfCandidates * 100).toFixed(1);

  return {
    Web: percentageApplicationsWeb,
    Mobile: percentageApplicationsMobile,
    QA: percentageApplicationsQA
  }
}

function averageAgeCandidates(candidates) {
  const candidatesOfVacancyWeb = []
  const candidatesOfVacancyMobile = []
  const candidatesOfVacancyQA = []
  let totalAgesWeb = null
  let totalAgesMobile = null
  let totalAgesQA = null
  let averageAgeWeb = null
  let averageAgeMobile = null
  let averageAgeQA = null

  candidates.forEach((candidate) => {
    if (candidate.vacancy === 'Web') {
      candidatesOfVacancyWeb.push(candidate);
    } else if (candidate.vacancy === 'Mobile') {
      candidatesOfVacancyMobile.push(candidate);
    } else if (candidate.vacancy === 'QA') {
      candidatesOfVacancyQA.push(candidate);
    }
  });

  candidatesOfVacancyWeb.forEach((candidate) => {
    const ageNumber = parseInt(candidate.age)
    totalAgesWeb += ageNumber
    averageAgeWeb = (totalAgesWeb / candidatesOfVacancyWeb.length).toFixed(0);
  });
  candidatesOfVacancyMobile.forEach((candidate) => {
    const ageNumber = parseInt(candidate.age)
    totalAgesMobile += ageNumber
    averageAgeMobile = (totalAgesMobile / candidatesOfVacancyMobile.length).toFixed(0);
  });
  candidatesOfVacancyQA.forEach((candidate) => {
    const ageNumber = parseInt(candidate.age)
    totalAgesQA += ageNumber
    averageAgeQA = (totalAgesQA / candidatesOfVacancyQA.length).toFixed(0);
  });

  return {
    Web: averageAgeWeb,
    Mobile: averageAgeMobile,
    QA: averageAgeQA
  }
}

function showAgeOldest(candidates) {
  const allCandidatesOfWebApplication = []
  const allCandidatesOfMobileApplication = []
  const allCandidatesOfQAApplication = []
  let olderWeb = null
  let olderMobile = null
  let olderQA = null

  candidates.forEach((candidate) => {
    if (candidate.vacancy === 'Web') {
      allCandidatesOfWebApplication.push(candidate);
    } else if (candidate.vacancy === 'Mobile') {
      allCandidatesOfMobileApplication.push(candidate);
    } else if (candidate.vacancy === 'QA') {
      allCandidatesOfQAApplication.push(candidate);
    }
  });
  
  allCandidatesOfWebApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age);
    if (olderWeb == null || candidateAge > parseInt(olderWeb.age)) {
      olderWeb = candidate
    }
  });
  
  allCandidatesOfMobileApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age);
    if (olderMobile == null || candidateAge > parseInt(olderMobile.age)) {
      olderMobile = candidate
    }
  });
  
  allCandidatesOfQAApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age);
    if (olderQA == null || candidateAge > parseInt(olderQA.age)) {
      olderQA = candidate
    }
  });

  return {
    Web: olderWeb.age,
    Mobile: olderMobile.age,
    QA: olderQA.age
  }
}

function showAgeYoungest(candidates) {
  const allCandidatesOfWebApplication = []
  const allCandidatesOfMobileApplication = []
  const allCandidatesOfQAApplication = []
  let youngestWeb = null
  let youngestMobile = null
  let youngestQA = null

  candidates.forEach((candidate) => {
    if (candidate.vacancy === 'Web') {
      allCandidatesOfWebApplication.push(candidate);
    } else if (candidate.vacancy === 'Mobile') {
      allCandidatesOfMobileApplication.push(candidate);
    } else if (candidate.vacancy === 'QA') {
      allCandidatesOfQAApplication.push(candidate);
    }
  });
  
  allCandidatesOfWebApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age);
    if (youngestWeb == null || candidateAge < parseInt(youngestWeb.age)) {
      youngestWeb = candidate
    }
  });
  
  allCandidatesOfMobileApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age);
    if (youngestMobile == null || candidateAge < parseInt(youngestMobile.age)) {
      youngestMobile = candidate
    }
  });
  
  allCandidatesOfQAApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age);
    if (youngestQA == null || candidateAge < parseInt(youngestQA.age)) {
      youngestQA = candidate
    }
  });

  return {
    Web: youngestWeb.age,
    Mobile: youngestMobile.age,
    QA: youngestQA.age
  }
}

function sumAgesAllCandidates(candidates) {
  const allCandidatesOfWebApplication = []
  const allCandidatesOfMobileApplication = []
  const allCandidatesOfQAApplication = []
  let sumAgesWeb = null
  let sumAgesMobile = null
  let sumAgesQA = null

  candidates.forEach((candidate) => {
    if (candidate.vacancy === 'Web') {
      allCandidatesOfWebApplication.push(candidate);
    } else if (candidate.vacancy === 'Mobile') {
      allCandidatesOfMobileApplication.push(candidate);
    } else if (candidate.vacancy === 'QA') {
      allCandidatesOfQAApplication.push(candidate);
    }
  });

  allCandidatesOfWebApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age)
    sumAgesWeb += candidateAge
  });
  allCandidatesOfMobileApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age)
    sumAgesMobile += candidateAge
  });
  allCandidatesOfQAApplication.forEach((candidate) => {
    const candidateAge = parseInt(candidate.age)
    sumAgesQA += candidateAge
  });

  return {
    Web: sumAgesWeb,
    Mobile: sumAgesMobile,
    QA:sumAgesQA
  }
}

function statesPresentOfAllCandidates(candidates) {
  const allStates = [];
  let statesString = '';
  let numberOfStates = null
  let nameOfStates = null

  candidates.forEach((candidate) => {
    if (!allStates[candidate.state]) {
      allStates[candidate.state] = true; 
      statesString += candidate.state + ' '; 
    }
  });

  numberOfStates = Object.keys(allStates).length;
  nameOfStates = statesString;

  return {
    NumberOfStates: numberOfStates,
    NameOfStates: nameOfStates
  }
}

function findNameQAInstructor(candidates) {
  const candidatesFilter = []
  const candidatesPerfectSquareAge = candidatesWithPerfectSquareAge(candidates)
  let instructorQA = null

  candidatesPerfectSquareAge.forEach((candidate) => {
    if (candidate.state === 'SC' && candidate.vacancy === 'QA') {
      candidatesFilter.push(candidate);
    }
  });

  instructorQA = isPalindrome(candidatesFilter);

  return {
    Name: instructorQA.name
  }
}

function findNameMobileInstructor(candidates) {
  let candidatesFilterVacancyAndState = []
  let candidatesFilterAgeAfterVacancyAndState = []

  candidates.forEach((candidate) => {
    if (candidate.vacancy === 'Mobile' && candidate.state === 'PI') {
      candidatesFilterVacancyAndState.push(candidate);
    }
  });

  candidatesFilterAgeAfterVacancyAndState.push(ageBetween30And40YearsAndPair(candidatesFilterVacancyAndState))

  const instructorMobile = lastNameStartsletterC(candidatesFilterAgeAfterVacancyAndState);

  return {
    Name: instructorMobile.name
  }
}

function contentRendering(candidates) {
  const percentageResults = percentageCandidatesApplied(candidates);
  const averageAges = averageAgeCandidates(candidates);
  const oldestAges = showAgeOldest(candidates);
  const youngestAges = showAgeYoungest(candidates);
  const sumAges = sumAgesAllCandidates(candidates);
  const states = statesPresentOfAllCandidates(candidates);
  const instructorQA = findNameQAInstructor(candidates);
  const instructorMobile = findNameMobileInstructor(candidates);

  console.log('-----------------------------------------------');
  console.log('|                     Report                  |');
  console.log('-----------------------------------------------');
  console.log(`|  Total Candidates : ${candidates.length}                    |`);
  console.log('-----------------------------------------------');
  console.log(`|  Total Apply Web    : ${percentageResults.Web}%                 |`);
  console.log(`|  Total Apply Mobile : ${percentageResults.Mobile}%                 |`);
  console.log(`|  Total Apply QA     : ${percentageResults.QA}%                 |`);
  console.log('-----------------------------------------------');
  console.log(`|  Average Age Web    : ${averageAges.Web} anos               |`);
  console.log(`|  Average Age Mobile : ${averageAges.Mobile} anos               |`);
  console.log(`|  Average Age QA     : ${averageAges.QA} anos               |`);
  console.log('-----------------------------------------------');
  console.log(`|  Oldest Candidate Web    : ${oldestAges.Web}          |`);
  console.log(`|  Oldest Candidate Mobile : ${oldestAges.Mobile}          |`);
  console.log(`|  Oldest Candidate QA     : ${oldestAges.QA}          |`);
  console.log('-----------------------------------------------');
  console.log(`|  Youngest Candidate Web    : ${youngestAges.Web}        |`);
  console.log(`|  Youngest Candidate Mobile : ${youngestAges.Mobile}        |`);
  console.log(`|  Youngest Candidate QA     : ${youngestAges.QA}        |`);
  console.log('-----------------------------------------------');
  console.log(`|  Sum of Ages Web    : ${sumAges.Web} anos            |`);
  console.log(`|  Sum of Ages Mobile : ${sumAges.Mobile} anos            |`);
  console.log(`|  Sum of Ages QA     : ${sumAges.QA} anos             |`);
  console.log('-----------------------------------------------');
  console.log(`|  Number of states   : ${states.NumberOfStates}                    |`);
  console.log('-----------------------------------------------');
  console.log(`|  Instructor QA     : ${instructorQA.Name}       |`);
  console.log('-----------------------------------------------');
  console.log(`|  Instructor Mobile : ${instructorMobile.Name}          |`);
  console.log('-----------------------------------------------');
  console.log('\x1b[34m%s\x1b[0m',' => starting to create the CSV file... ')
}

function processCandidates(filePath) {
  console.log('\x1b[33m%s\x1b[0m','Processing candidates data...');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    const candidates = []
    const lines = data.split('\n');
  
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const [name, age, vacancy, state] = line.split(';');
        candidates.push({
          name: name.trim(),
          age: age.trim(),
          vacancy: vacancy.trim(),
          state: state.trim()
        });
      }
    }

    setTimeout(() => {
      candidates.sort((a, b) => a.name.localeCompare(b.name));
  
      const csvContent = 'Name;Age;Vacancy;State\n' + 
        candidates.map(candidate => `${candidate.name};${candidate.age};${candidate.vacancy};${candidate.state}`).join('\n');
  
      fs.writeFile('Sorted_Academy_Candidates.csv', csvContent, (err) => {
        if (err) {
          console.error('\x1b[31m%s\x1b[0m','Error writing CSV file:', err);
        } else {
          console.log('\x1b[32m%s\x1b[0m','CSV file successfully created: Sorted_Academy_Candidates.csv');
        }
      });
    }, 4000);
    
    setTimeout(() => {
      contentRendering(candidates);
    }, 2000);
  });
}

processCandidates('Academy_Candidates.txt');