function checkFormatEmail(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let checkEmail = regex.test(email);
    console.log(email.match(regex));
    if (checkEmail) {
        console.log(`Format email is valid`);
    } else {
        console.log(`Format email is invalid`);
    }
}

checkFormatEmail('gil.ang@gm.ail.co')